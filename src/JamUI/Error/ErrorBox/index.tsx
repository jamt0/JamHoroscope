import React, { FunctionComponent } from "react";

type Props = {};

const Error: FunctionComponent<Props> = (props) => (
  <div className="px-6 py-3 bg-red-500 text-white">
    {props.children}
  </div>
);

export default Error;
