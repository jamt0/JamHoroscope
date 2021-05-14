import React, { useEffect, useState } from "react";
import { HomeView } from "pages/layouts";
import { useSettingsUser } from "context/settingsUser";
import Server from "server";

const Home: React.FC = () => {
  const { texts } = useSettingsUser()!;
  const [imageAvatar, setImageAvatar] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [errores, setErrors] = useState<string>("");

  useEffect(() => {
    const getImageAvatar = async () => {
      try {
        setLoading(true);
        const response: any = await Server.getImageAvatarUrl();
        setImageAvatar(response.data.results[0].picture.large);
        setLoading(false);
      } catch (error) {
        setErrors(texts.error_connection);
        setLoading(false);
      }
    };
    getImageAvatar();
  }, []);

  return (
    <HomeView
      texts={texts}
      imageAvatar={imageAvatar}
      loading={loading}
      errores={errores}
    />
  );
};

export default Home;
