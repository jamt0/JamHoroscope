import React from "react";
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";
import { Data, Gender, Home, NoFound, Horoscope } from "pages";
import RoutesPath from "routes";

const AppRoutes: React.FC = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path={RoutesPath.home} exact>
          <Home />
        </Route>
        <Route path={RoutesPath.gender} exact>
          <Gender />
        </Route>
        <Route path={RoutesPath.data} exact>
          <Data />
        </Route>
        <Route path={RoutesPath.horoscope} exact>
          <Horoscope />
        </Route>
        <Route path={RoutesPath.welcome} exact>
          <Redirect to={RoutesPath.home} />
        </Route>
        <Route>
          <NoFound />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default AppRoutes;
