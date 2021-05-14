import React, { Fragment, FunctionComponent } from "react";
import { Label, ErrorText, Item } from "JamUI";
import { IonDatetime } from "@ionic/react";
import { ErrorMessage } from "@hookform/error-message";
import { Controller } from "react-hook-form";

type Props = {
  control: any;
  errors: any;
  defaultValue: any;
  name: string;
  rules: any;
  label: string;
}

const Date: FunctionComponent<Props> = (props) => (
  <Fragment>
    <Item className="mb-4" lines="full">
      <Label position="floating" color="primary">
        {props.label}
      </Label>
      <Controller
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <IonDatetime
            className="mt-2"
            onIonChange={onChange}
            onIonBlur={onBlur}
            value={value}
          />
        )}
        control={props.control}
        name={props.name}
        defaultValue={props.defaultValue}
        rules={props.rules}
      />
    </Item>
    <ErrorMessage errors={props.errors} name={props.name} as={<ErrorText />} />
  </Fragment>
);
export default Date;
