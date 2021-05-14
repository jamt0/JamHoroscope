import React, { FunctionComponent } from "react";
import { Scaffold, SubTitle, Center, Button, Loading } from "JamUI";
import gen1 from "assets/images/gen-1.png";
import gen2 from "assets/images/gen-2.png";
import gen3 from "assets/images/gen-3.png";
import { IonImg, IonProgressBar } from "@ionic/react";
import routesPath from "routes";

type Props = {
  texts: any;
  gender: number;
  changeGender: (id: number) => void;
  saveGender: () => void;
  loading: boolean;
};

const GenderView: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header color="primary" title={props.texts.gender}>
      <Scaffold.Header.BackAction defaultHref={routesPath.home}/>
    </Scaffold.Header>
    <Scaffold.Content>
      <Loading isOpen={props.loading} translucent={false} />
      <IonProgressBar value={0.33}></IonProgressBar>
      <br />
      <SubTitle color="primary">{props.texts.enter_gender}</SubTitle>
      <Center className="my-10">
        <IonImg src={gen1} onClick={() => props.changeGender(1)} className={props.gender === 1 ? "border border-blue-500": ""}/>
        <IonImg src={gen2} onClick={() => props.changeGender(2)} className={props.gender === 2 ? "border border-blue-500": ""}/>
        <IonImg src={gen3} onClick={() => props.changeGender(3)} className={props.gender === 3 ? "border border-blue-500": ""}/>
      </Center>
    </Scaffold.Content>
    <Scaffold.Footer>
      <Button
        className="mb-6"
        onClick={props.saveGender}
        color="secondary"
        disabled={props.gender !== 0 ? false: true}
      >
        {props.texts.continue}
      </Button>
    </Scaffold.Footer>
  </Scaffold>
);

export default GenderView;
