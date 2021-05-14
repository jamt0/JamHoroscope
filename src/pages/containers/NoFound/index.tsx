import React from "react";
import { NoFoundView } from "pages/layouts";
import { useSettingsUser } from "context/settingsUser";

const NoFound: React.FC = () => {
  const { texts } = useSettingsUser()!;
  return <NoFoundView texts={texts}/>;
};

export default NoFound;