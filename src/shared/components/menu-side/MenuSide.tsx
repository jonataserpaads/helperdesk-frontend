import React from "react";
import {
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { Box } from "@mui/system";
import SettingsIcon from '@mui/icons-material/Settings';

import {
  IDrawerOption,
  useAuthContext,
  useDrawerContext,
} from "../../contexts";

interface IListItemLinkProps {
  to: string;
  icon: string;
  label?: string;
  onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({
  to,
  icon,
  onClick,
}) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <ListItemButton style={{ marginTop: 20 }} selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
    </ListItemButton>
  );
};

interface IMenuLateralProps {
  children: React.ReactNode;
}

export const MenuSide: React.FC<IMenuLateralProps> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { isDrawerOpen, drawerOptions, toggleDrawerOpen } = useDrawerContext();
  const { logout } = useAuthContext();

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(8)}
          height="100%"
          display="flex"
          flexDirection="column"
          style={{ backgroundColor: '#4285F4', overflow: 'hidden' }}
        >
          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map((drawerOption: IDrawerOption) => (
                <ListItemLink
                  to={drawerOption.path}
                  key={drawerOption.path}
                  icon={drawerOption.icon}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>

          <Box>
            <List component="nav">
              <ListItemButton onClick={logout}>
                <SettingsIcon />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(6)}>
        {children}
      </Box>
    </>
  );
};
