import React, { FunctionComponent } from "react";
import { Button, Center, Input, Loading, Scaffold, SubTitle } from "JamUI";
import routesPath from "routes";
import { IonProgressBar } from "@ionic/react";
import Date from "JamUI/Date";

type Props = {
  texts: any;
  loading: boolean;
  formHook: any;
  rules: any;
  defaultValues: any;
  handlerSaveButton: (data: any) => void;
};

const DataView: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header color="primary" title={props.texts.data}>
      <Scaffold.Header.BackAction defaultHref={routesPath.gender}/>
    </Scaffold.Header>
    <Scaffold.Content>
      <Loading isOpen={props.loading} />
      <IonProgressBar value={0.66}></IonProgressBar>
      <br />
      <SubTitle color="primary">{props.texts.enter_data}</SubTitle>
      <Input
        control={props.formHook.control}
        errors={props.formHook.errors}
        defaultValue={props.defaultValues.name}
        name="name"
        type="new-password"
        label={props.texts.name}
        rules={props.rules.rulesName}
      />
      <Input
        control={props.formHook.control}
        errors={props.formHook.errors}
        defaultValue={props.defaultValues.email}
        name="email"
        type="email"
        label={props.texts.email}
        rules={props.rules.rulesEmail}
      />
      <Date
        control={props.formHook.control}
        errors={props.formHook.errors}
        defaultValue={props.defaultValues.dateBirth}
        name="dateBirth"
        label={props.texts.date}
        rules={props.rules.rulesDate}
      />
    </Scaffold.Content>
    <Scaffold.Footer>
      <Center className="mb-6">
        <Button
          className="w-36 md:w-56 mr-2"
          routerLink={routesPath.gender}
          routerDirection="back"
          color="primary"
        >
          {props.texts.back}
        </Button>
        <Button
          className="w-36 md:w-56 ml-2"
          color="secondary"
          onClick={props.formHook.handleSubmit(props.handlerSaveButton)}
          disabled={!props.formHook.isValid || !props.formHook.isDirty}
        >
          {props.texts.continue}
        </Button>
      </Center>
    </Scaffold.Footer>
  </Scaffold>
);

export default DataView;
