import React, { useState } from "react";
import { GenderView } from "pages/layouts";
import { useSettingsUser } from "context/settingsUser";
import { useHistory } from "react-router";
import routesPath from "routes";
import { useDataUser } from "context/userData";

const Gender: React.FC = () => {
  const { texts } = useSettingsUser()!;
  const [gender, setGender] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();
  const {setGenero} = useDataUser()!;

  const changeGender = (id: number) => {
    setGender(id);
  };

  const saveGender = () => {
    setLoading(true);
    setGenero(gender);
    history.push(routesPath.data);
    setLoading(false);
  };

  return (
    <GenderView
      texts={texts}
      changeGender={changeGender}
      gender={gender}
      saveGender={saveGender}
      loading={loading}
    />
  );
};

export default Gender;
