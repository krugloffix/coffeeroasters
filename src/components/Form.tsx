import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { setEmail, setPassword, setMember } from "../redux/slices/authSlice";

type FormProps = {
  props: {
    title: string;
    button: string;
    text: string;
    link: string;
    error: string;
    isError: boolean;
  };
  handler: (event: React.FormEvent<HTMLFormElement>) => void;
};

const Form: React.FC<FormProps> = ({ props, handler }) => {
  const dispatch = useAppDispatch();
  const member = useAppSelector((state) => state.auth.member);
  return (
    <div>
      <h3 className="login__title">{props.title}</h3>
      <form onSubmit={handler}>
        <input
          type="email"
          placeholder="Email here"
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
        <input
          type="password"
          placeholder="Password here"
          onChange={(e) => dispatch(setPassword(e.target.value))}
        />
        <span className="login__error">{props.isError ? props.error : ""}</span>
        <button className="main__btn" type="submit">
          {props.button}
        </button>
        <p>
          {props.text}{" "}
          <span
            className="login__btn"
            onClick={() => {
              dispatch(setMember(!member));
            }}
          >
            {props.link}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Form;
