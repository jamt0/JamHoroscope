import React from "react";
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";
import { Home, NoFound } from "pages/containers";
import RoutesPath from "routes";

const AppRoutes: React.FC = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path={RoutesPath.home} exact>
          <Home />
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
