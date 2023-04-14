import React from "react";

type Props = {
  summary: {
    preferences: string;
    type: string;
    quantity: string;
    grind: string;
    delivery: string;
    price: number;
    totalCost: number;
  };
};

const Summary: React.FC<Props> = ({ summary }) => {
  return (
    <p>
      “I drink my coffee as <span>{`${summary.preferences || "_____"}`}</span>,
      with a <span>{`${summary.type || "_____"}`}</span> type of bean.{" "}
      <span>{`${summary.quantity || "_____"}`}</span>,{" "}
      {`${summary.grind !== "empty" && summary.grind ? `ground ala ` : ""}`}
      <span>{`${
        summary.grind !== "empty" && summary.grind
          ? `${summary.grind || "_____"}, `
          : ""
      }`}</span>
      sent to me <span>{`${summary.delivery || "_____"}`}</span>.”
    </p>
  );
};

export default Summary;
