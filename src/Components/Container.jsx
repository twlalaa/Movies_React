import React from "react";

const Container = (props) => {
  return <div className="container mx-auto mt-5">{props.children}</div>;
};

export default Container;
