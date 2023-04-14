import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { closeModal } from "../../redux/slices/summaryModalSlice";
import { openModal } from "../../redux/slices/loginModalSlice";
import { useAuth } from "../../hooks/use-auth";
import Summary from "./Summary";

type Props = {
  questionState: {
    preferences: { value: string; state: string };
    type: { value: string; state: string };
    quantity: { value: string; state: string };
    grind: { value: string; state: string };
    delivery: { value: string; state: string };
  };
  price: number;
};

const Modal: React.FC<Props> = ({ questionState, price }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAuth();
  const modalRef = React.useRef<HTMLDivElement>(null);
  const totalCost = useAppSelector((state) => state.plan.plan.totalCost);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [width, setWidth] = React.useState({
    width: window.innerWidth,
  });

  const handleResize = () => {
    setWidth({
      width: window.innerWidth,
    });
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  const checkout = () => {
    if (user.isAuth) {
      navigate("/checkout");
      dispatch(closeModal());
    } else {
      dispatch(openModal());
      dispatch(closeModal());
    }
  };

  return (
    <div className="modal" ref={modalRef}>
      <div className="login__overlay"></div>
      <div className="modal__container">
        <div className="modal__top">
          <button
            className="modal__close"
            onClick={() => {
              modalRef.current?.classList.add("modal--before-close");
              setTimeout(() => {
                dispatch(closeModal());
              }, 450);
            }}
          ></button>
          <h3 className="modal__title">Order Summary</h3>
        </div>
        <div className="modal__bottom">
          <div className="modal__summary">
            <Summary
              summary={{
                preferences: questionState.preferences.value,
                type: questionState.type.value,
                quantity: questionState.quantity.value,
                grind: questionState.grind.value,
                delivery: questionState.delivery.value,
                price: price,
                totalCost: totalCost,
              }}
            />
          </div>
          <p className="modal__text">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.{" "}
          </p>

          {width.width >= 550 ? (
            <>
              <p className="modal__price">{totalCost}$/mo</p>
              <button
                className="main__btn modal__btn"
                onClick={() => checkout()}
              >
                Checkout
              </button>
            </>
          ) : (
            <button className="main__btn modal__btn" onClick={() => checkout()}>
              Checkout - ${totalCost} / mo
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
