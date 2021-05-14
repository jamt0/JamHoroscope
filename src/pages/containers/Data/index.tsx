import React, { useState } from "react";
import { DataView } from "pages/layouts";
import { useSettingsUser } from "context/settingsUser";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { rulesEmail, rulesName, rulesDate } from "utils/rulesValidation";
import routesPath from "routes";
import { useDataUser } from "context/userData";

const Data: React.FC = () => {
  const { texts } = useSettingsUser()!;
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);
  const {setUser} = useDataUser()!;

  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty, errors },
  } = useForm({
    mode: "onChange",
  });

  const defaultValues = { name: "", email: "", dateBirth: "" };

  const rules = {
    rulesEmail: rulesEmail(texts),
    rulesName: rulesName(texts),
    rulesDate: rulesDate(texts),
  };

  const handlerSaveButton = async (data: any) => {
    setLoading(true);
    setUser(data);
    history.push(routesPath.horoscope);
    setLoading(false);
  };

  return (
    <DataView
      texts={texts}
      formHook={{ control, errors, isValid, isDirty, handleSubmit }}
      defaultValues={defaultValues}
      handlerSaveButton={handlerSaveButton}
      loading={loading}
      rules={rules}
    />
  );
};

export default Data;
