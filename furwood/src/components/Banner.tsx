import React from "react";

interface Props {
  title: string;
}

export const Banner = ({ title }: Props) => {
  return (
    <div className="Banner">
      <h1>{title}</h1>
    </div>
  );
};
