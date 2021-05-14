import React, { useEffect, useState } from "react";
import { HoroscopeView } from "pages/layouts";
import { useSettingsUser } from "context/settingsUser";
import acuario from "assets/images/boton_acuario.png";
import aries from "assets/images/boton_aries.png";
import cancer from "assets/images/boton_cancer.png";
import capricornio from "assets/images/boton_capricornio.png";
import escorpion from "assets/images/boton_escorpio.png";
import geminis from "assets/images/boton_geminis.png";
import leo from "assets/images/boton_leo.png";
import libra from "assets/images/boton_libra.png";
import piscis from "assets/images/boton_piscis.png";
import sagitario from "assets/images/boton_sagitario.png";
import tauro from "assets/images/boton_tauro.png";
import virgo from "assets/images/boton_virgo.png";
import Server from "server";
import { useDataUser } from "context/userData";

const imageSigno: any = {
  acuario,
  aries,
  cancer,
  capricornio,
  escorpion,
  geminis,
  leo,
  libra,
  piscis,
  sagitario,
  tauro,
  virgo,
};

const Horoscope: React.FC = () => {
  const { texts } = useSettingsUser()!;
  const [imageHoroscope, setImageHoroscope] = useState<string>("");
  const [horoscope, setHoroscope] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [errores, setErrors] = useState<string>("");
  const [dias, setDias] = useState<number>(0);
  const { user } = useDataUser()!;

  const getHoroscopoFromDate = (date: any) => {
    const dateBirth = new Date(date);
    const dia = dateBirth.getDate();
    const mes = dateBirth.getMonth() + 1;
    let signo: string;
    switch (mes) {
      case 1:
        if (dia > 21) signo = "acuario";
        else signo = "capricornio";
        break;
      case 2:
        if (dia > 19) signo = "piscis";
        else signo = "acuario";
        break;
      case 3:
        if (dia > 20) signo = "aires";
        else signo = "piscis";
        break;
      case 4:
        if (dia > 20) signo = "tauro";
        else signo = "aires";
        break;
      case 5:
        if (dia > 21) signo = "geminis";
        else signo = "tauro";
        break;
      case 6:
        if (dia > 20) signo = "cancer";
        else signo = "geminis";
        break;
      case 7:
        if (dia > 22) signo = "leo";
        else signo = "cancer";
        break;
      case 8:
        if (dia > 21) signo = "virgo";
        else signo = "leo";
        break;
      case 9:
        if (dia > 22) signo = "libra";
        else signo = "virgo";
        break;
      case 10:
        if (dia > 22) signo = "escorpion";
        else signo = "libra";
        break;
      case 11:
        if (dia > 21) signo = "sagitario";
        else signo = "escorpion";
        break;
      case 12:
        if (dia > 21) signo = "capricornio";
        else signo = "sagitario";
        break;
      default:
        signo = "error";
    }
    return signo;
  };

  const diasCumpleaños = (date: any) => {
    //Hasta aca dejo.
  }

  useEffect(() => {
    const getHoroscope = async () => {
      try {
        setLoading(true);
        const response: any = await Server.getHoroscopeUser();
        setHoroscope(
          response.data.horoscopo[getHoroscopoFromDate(user.dateBirth)]
        );
        setImageHoroscope(imageSigno[getHoroscopoFromDate(user.dateBirth)]);
        if (user.dateBirth == "") setErrors("No se registro usuario.");
        setLoading(false);
      } catch (error) {
        setErrors(texts.error_connection);
        setLoading(false);
      }
    };
    getHoroscope();
  }, []);

  return (
    <HoroscopeView
      texts={texts}
      imageHoroscope={imageHoroscope}
      horoscope={horoscope}
      loading={loading}
      errores={errores}
      userName={user.name}
    />
  );
};

export default Horoscope;
