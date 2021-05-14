import { createContext, useContext, useEffect, useState } from "react";

type TDataUser = {
  genero: number;
  user: any;
  setGenero: (genero: any) => void;
  setUser: (user: any) => void;
};

const defaultValues: TDataUser = {
  genero: 0,
  user: {},
  setGenero: (genero: any) => {},
  setUser: (user: any) => {},
};

const DataContext = createContext<TDataUser | undefined>(defaultValues);

type Props = {
  children: React.ReactNode;
};

export const DataProvider = ({ children }: Props): JSX.Element => {
  const [user, setuser] = useState({
    name: "",
    mail: "",
    dateBirth: "",
  });
  const [genero, setgenero] = useState(0);

  const setUser = (user: any) => {
    setuser(user);
  };

  const setGenero = (Genero: any) => {
    setgenero(Genero);
  };

  const data = { setGenero, genero, user, setUser };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useDataUser = () => useContext(DataContext);
