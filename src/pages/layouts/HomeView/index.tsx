import React, { FunctionComponent } from "react";
import { Avatar, Button, Center, ErrorBox, Loading, Scaffold } from "JamUI";
import routesPath from "routes";

type Props = {
  texts: any;
  imageAvatar: string;
  loading: boolean;
  errores: string;
};

const HomeView: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Content height="full">
      {props.errores !== "" && <ErrorBox>{props.errores}</ErrorBox>}
      <Loading isOpen={props.loading} translucent={false} />
      <Center
        justify="center"
        content="center"
        direction="col"
        className="h-full"
      >
        <Avatar src={props.imageAvatar} size={80} />
      </Center>
    </Scaffold.Content>
    <Scaffold.Footer>
      <Button
        className="mb-6"
        routerLink={routesPath.gender}
        color="secondary"
      >
        {props.texts.enter}
      </Button>
    </Scaffold.Footer>
  </Scaffold>
);

export default HomeView;
