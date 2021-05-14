import React, { FunctionComponent } from "react";
import {
  Button,
  Center,
  ErrorBox,
  Loading,
  Scaffold,
  SubTitle,
  Text,
} from "JamUI";
import { IonImg } from "@ionic/react";
import routesPath from "routes";

type Props = {
  texts: any;
  imageHoroscope: any;
  horoscope: any;
  loading: boolean;
  errores: string;
  userName: string;
};

const HoroscopeView: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header color="primary" title={props.texts.horoscope}>
      <Scaffold.Header.BackAction defaultHref={routesPath.data} />
    </Scaffold.Header>
    <Scaffold.Content>
      <Loading isOpen={props.loading} translucent={false} />
      {props.errores !== "" && <ErrorBox>{props.errores}</ErrorBox>}
      <Center>
        <IonImg src={props.imageHoroscope} />
      </Center>
      <SubTitle className="mt-10">Hola {props.userName}</SubTitle>
      <Text align="center" className="mt-2">
        Tu horoscopo para hoy dice que
      </Text>
      <SubTitle align="center" className="mt-10">
        {props.texts.health}
      </SubTitle>
      <Text align="center" className="mt-2">
        {props.horoscope?.salud}
      </Text>
      <SubTitle align="center" className="mt-10">
        {props.texts.money}
      </SubTitle>
      <Text align="center" className="mt-2">
        {props.horoscope?.dinero}
      </Text>
      <SubTitle align="center" className="mt-10">
        {props.texts.love}
      </SubTitle>
      <Text align="center" className="mt-2">
        {props.horoscope?.amor}
      </Text>
      <Text align="center" className="mt-10">
        Faltan N días para tu cumpleaños.
      </Text>
    </Scaffold.Content>
    <Scaffold.Footer>
      <Button className="mb-6" routerLink={routesPath.home} color="secondary">
        {props.texts.continue}
      </Button>
    </Scaffold.Footer>
  </Scaffold>
);

export default HoroscopeView;
