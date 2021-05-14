import React, { FunctionComponent } from "react";
import { IonButtons, IonBackButton } from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";
import { useHistory } from "react-router";

type Props = {
  color?: string;
  defaultHref?: string;
};

const ScaffoldHeaderBackAction: FunctionComponent<Props> = (props) => {
  const history = useHistory();
  return (
    <IonButtons slot="start">
      <IonBackButton
        defaultHref={props.defaultHref}
        icon={chevronBackOutline}
      />
    </IonButtons>
  );
};

export default ScaffoldHeaderBackAction;
