import React, { FunctionComponent } from "react";
import { Scaffold } from "JamUI";

type Props = {
  texts: any;
};

const NoFoundView: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title="404">
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content></Scaffold.Content>
    <Scaffold.Footer></Scaffold.Footer>
  </Scaffold>
);

export default NoFoundView;