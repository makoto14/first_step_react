import React from "react";

const Component: React.FC = () => {
  return (
    <>
      <SubComponent name={"Makoto"} />
      <SubComponent name={"Satoshi"} />
    </>
  );
};

export default Component;

type Prop = {
  name: string;
};

const SubComponent: React.FC<Prop> = (props) => {
  return <div>{props.name}</div>;
};
