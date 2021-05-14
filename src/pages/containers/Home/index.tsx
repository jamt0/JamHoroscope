import React from "react";
import { HomeView } from "layouts";
import { useSettingsUser } from "context/settingsUser";

const Home: React.FC = () => {
  const { texts } = useSettingsUser()!;
  return <HomeView texts={texts} />;
};

export default Home;
