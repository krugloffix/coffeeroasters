import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setIsPlan, setPlan } from "../../redux/slices/planSlice";
import { openModal } from "../../redux/slices/summaryModalSlice";
import Modal from "./Modal";
import Summary from "./Summary";

const list = [
  {
    id: 0,
    index: "preferences",
    title: "Preferences",
    link: "#preferences",
  },
  { id: 1, index: "type", title: "Bean Type", link: "#type" },
  {
    id: 2,
    index: "quantity",
    title: "Quantity",
    link: "#quantity",
  },
  { id: 3, index: "grind", title: "Grind Option", link: "#grind" },
  {
    id: 4,
    index: "delivery",
    title: "Deliveries",
    link: "#delivery",
  },
];

const plan = [
  {
    id: "preferences",
    key: 0,
    question: "How do you drink your coffee?",
    answers: [
      {
        id: 0,
        title: "Capsule",
        text: "Compatible with Nespresso systems and similar brewers",
      },
      {
        id: 1,
        title: "Filter",
        text: "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        id: 2,
        title: "Espresso",
        text: "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
  },
  {
    id: "type",
    key: 1,
    question: "What type of coffee?",
    answers: [
      {
        id: 0,
        title: "Single Origin",
        text: "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        id: 1,
        title: "Decaf",
        text: "Just like regular coffee, except the caffeine has been removed",
      },
      {
        id: 2,
        title: "Blended",
        text: "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
  },
  {
    id: "quantity",
    key: 2,
    question: "How much would you like?",
    answers: [
      {
        id: 0,
        title: "250g",
        text: "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        id: 1,
        title: "500g",
        text: "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      {
        id: 2,
        title: "1000g",
        text: "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    ],
  },
  {
    id: "grind",
    key: 3,
    question: "Want us to grind them?",
    answers: [
      {
        id: 0,
        title: "Wholebean",
        text: "Best choice if you cherish the full sensory experience",
      },
      {
        id: 1,
        title: "Filter",
        text: "For drip or pour-over coffee methods such as V60 or Aeropress",
      },
      {
        id: 2,
        title: "Cafetiére",
        text: " Course ground beans specially suited for french press coffee",
      },
    ],
  },
  {
    id: "delivery",
    key: 4,
    question: "How often should we deliver?",
    answers: [
      {
        id: 0,
        title: "Every week",
        text: "per shipment. Includes free first-class shipping.",
      },
      {
        id: 1,
        title: "Every 2 weeks",
        text: "per shipment. Includes free first-class shipping.",
      },
      {
        id: 2,
        title: "Every month",
        text: "per shipment. Includes free first-class shipping.",
      },
    ],
  },
];

const Options = () => {
  const dispatch = useAppDispatch();

  const [questionState, setQuestionState] = React.useState({
    preferences: { value: "", state: "" },
    type: { value: "", state: "" },
    quantity: { value: "", state: "" },
    grind: { value: "", state: "" },
    delivery: { value: "", state: "" },
  });

  const [expand, setExpand] = React.useState({
    preferences: "close",
    type: "close",
    quantity: "close",
    grind: "close",
    delivery: "close",
  });

  const [prices, setPrices] = React.useState({
    0: { price: "7.20" },
    1: { price: "9.60" },
    2: { price: "12.00" },
  });

  const [isDisabled, setIsDisabled] = React.useState(false);
  const [price, setPrice] = React.useState(0);

  React.useEffect(() => {
    const arr = Object.keys(questionState);
    const isCompleted = arr.every(
      (val) => questionState[val as keyof typeof questionState].value !== ""
    );

    setIsDisabled(isCompleted);
  }, [questionState]);

  React.useEffect(() => {
    updatePrices(questionState.quantity.value);
  }, [questionState.quantity]);

  React.useEffect(() => {
    switch (questionState.delivery.value) {
      case "Every week":
        setPrice(Number(prices[0].price));
        break;
      case "Every 2 weeks":
        setPrice(Number(prices[1].price));
        break;
      case "Every month":
        setPrice(Number(prices[2].price));
        break;
    }
  }, [questionState.delivery.value]);

  const toggleExpand = (name: string) => {
    const currExpand = expand[name as keyof typeof expand];

    setExpand({
      ...expand,
      [name as keyof typeof expand]:
        currExpand === "close" ? "active" : "close",
    });
  };

  const updatePrices = (value: string) => {
    switch (value) {
      case "250g":
        setPrices({
          0: { price: "7.20" },
          1: { price: "9.60" },
          2: { price: "12.00" },
        });
        break;
      case "500g":
        setPrices({
          0: { price: "13.00" },
          1: { price: "17.50" },
          2: { price: "22.00" },
        });
        break;
      case "1000g":
        setPrices({
          0: { price: "22.00" },
          1: { price: "32.00" },
          2: { price: "42.00" },
        });
    }
  };

  const updatePlan = (name: string, value: string, state: string) => {
    if (value === "Capsule") {
      setQuestionState({
        ...questionState,
        grind: { value: "empty", state: "disabled" },
        preferences: { value: value, state: state },
      });

      setExpand({
        ...expand,
        grind: "disabled",
      });
    } else {
      if (questionState.grind.state === "disabled" && name === "preferences") {
        setQuestionState({
          ...questionState,
          [name as keyof typeof questionState]: { value: value, state: state },
          grind: { value: "", state: "" },
        });
        setExpand({
          ...expand,
          grind: "close",
        });
      } else {
        setQuestionState({
          ...questionState,
          [name as keyof typeof questionState]: { value: value, state: state },
        });
      }
    }
  };

  const totalCost =
    questionState.delivery.value === "Every week"
      ? price * 4
      : questionState.delivery.value === "Every 2 weeks"
      ? price * 2
      : price;

  const createPlan = () => {
    dispatch(
      setPlan({
        preferences: questionState.preferences.value,
        type: questionState.type.value,
        quantity: questionState.quantity.value,
        grind: questionState.grind.value,
        delivery: questionState.delivery.value,
        price: price,
        totalCost: totalCost,
      })
    );
    dispatch(openModal());
    dispatch(setIsPlan(true));
  };

  return (
    <div className="options">
      <div className="options__container">
        <div className="options__left">
          <ul className="options__list">
            {list.map((obj) => (
              <li
                key={obj.id}
                className={`options__item options__item--${
                  questionState[obj.index as keyof typeof questionState].state
                }`}
              >
                <a href={obj.link}>
                  <span>{`0${obj.id + 1}`}</span>
                  <p>{obj.title}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="options__inner">
          <ul className="options__plan">
            {plan.map((obj) => (
              <li
                key={obj.key}
                id={obj.id}
                className={`options__element options__element--${
                  expand[obj.id as keyof typeof expand]
                }`}
              >
                <h3
                  className="options__question"
                  onClick={() => toggleExpand(obj.id)}
                >
                  {obj.question}{" "}
                </h3>
                <ul className="options__answers ">
                  {obj.answers.map((arr) => (
                    <li
                      key={arr.id}
                      className={`options__answer options__answer--${
                        arr.title ===
                        questionState[obj.id as keyof typeof questionState]
                          .value
                          ? questionState[obj.id as keyof typeof questionState]
                              .state
                          : ""
                      }`}
                      onClick={() => {
                        updatePlan(obj.id, arr.title, "checked");
                      }}
                    >
                      <h4>{arr.title}</h4>
                      <p>
                        {obj.id === "delivery"
                          ? `$${prices[arr.id as keyof typeof prices].price} ${
                              arr.text
                            }`
                          : arr.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="options__recap">
            <h4 className="options__title">Order summary</h4>
            {useAppSelector((state) => state.summaryModal.isActive) && (
              <Modal questionState={questionState} price={price} />
            )}
            <div className="options__summary">
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
            <button
              className={
                isDisabled
                  ? "main__btn options__btn"
                  : "main__btn options__btn options__btn--disabled"
              }
              onClick={() => createPlan()}
            >
              Create my plan!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
