import React from "react";
import { createContext, useCallback, useContext, useState } from "react";
import DescriptionIcon from '@mui/icons-material/Description';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PersonIcon from '@mui/icons-material/Person';
import logo from '../../assets/logo.png';

export interface IDrawerOption {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  path: string;
  label: string;
}

const routes: IDrawerOption[] = [
  {
    icon: <img src={logo} alt="logo" />,
    path: "/home",
    label: "ADS",
  },
  {
    icon: <DescriptionIcon />,
    path: "/ticket",
    label: "Ticket",
  },
  {
    icon: <PersonIcon />,
    path: "/contacts",
    label: "Contact",
  },
  {
    icon: <WhatsAppIcon />,
    path: "/chat-whatsapp",
    label: "Whatsapp",
  },
];

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
  drawerOptions: IDrawerOption[];
  setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

interface IDrawerProps {
  children: React.ReactNode;
}

export const DrawerProvider: React.FC<IDrawerProps> = ({ children }) => {
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>(routes);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen);
  }, []);

  const handleSetDrawerOptions = useCallback((routes: IDrawerOption[]) => {
    setDrawerOptions(routes);
  }, []);

  return (
    <DrawerContext.Provider
      value={{
        isDrawerOpen,
        drawerOptions,
        toggleDrawerOpen,
        setDrawerOptions: handleSetDrawerOptions,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
