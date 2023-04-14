import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { closeModal } from "../redux/slices/loginModalSlice";
import { logIn, setIsSub } from "../redux/slices/userSlice";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import Form from "./Form";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

import close from "../assets/close.svg";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const modalRef = React.useRef<HTMLDivElement>(null);

  const [errorLogin, setErrorLogin] = React.useState(false);
  const [errorReg, setErrorReg] = React.useState(false);

  const email = useAppSelector((state) => state.auth.email);
  const password = useAppSelector((state) => state.auth.password);
  const member = useAppSelector((state) => state.auth.member);

  const getSub = async (id: string) => {
    try {
      const docRef = doc(db, "subs", `${id}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        dispatch(setIsSub(true));
      } else {
        dispatch(setIsSub(false));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSingIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          logIn({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        setErrorLogin(false);
        dispatch(closeModal());
        return user;
      })
      .then((user) => {
        getSub(user.uid);
      })
      .catch((error) => {
        setErrorLogin(true);
      });
  };

  const handleSingUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          logIn({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        setErrorReg(false);
        dispatch(closeModal());
        navigate("/");
      })
      .catch((error) => {
        setErrorReg(true);
      });
  };

  return (
    <div className="login" ref={modalRef}>
      <div className="login__overlay"></div>
      <div className="login__container">
        <button
          className="login__close"
          onClick={() => {
            modalRef.current?.classList.add("login--before-close");
            setTimeout(() => {
              dispatch(closeModal());
            }, 450);
          }}
        >
          <img src={close} alt="" aria-hidden="true" />
        </button>
        {member ? (
          <Form
            props={{
              title: "Sign In",
              button: "Sign In",
              text: "Not a member yet?",
              link: "Sign Up.",
              error: "Wrong email or password.",
              isError: errorLogin,
            }}
            handler={(e) => handleSingIn(e)}
          />
        ) : (
          <Form
            props={{
              title: "Sign Up",
              button: "Sign Up",
              text: "Already a member?",
              link: "Sign In.",
              error: "Seems like you're already have an account.",
              isError: errorReg,
            }}
            handler={(e) => handleSingUp(e)}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
