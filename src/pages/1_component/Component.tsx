import React from "react";

const Component: React.VFC = () => {
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

const SubComponent: React.VFC<Prop> = (props) => {
  return <div>{props.name}</div>;
};
