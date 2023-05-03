import React from "react";
import { ReactNode } from "react";
import {
  InputAdornment,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";

import NavTabs from "../components/tabs/NavTabs";
import SearchIcon from "@mui/icons-material/Search";

interface ILayoutBasePageProps {
  title: string;
  toolBars?: ReactNode;
  children: React.ReactNode;
  textSearch?: string;
  placeholder?: string;
  changeTextSearch?: (novoTexto: string) => void;
}

export const LayoutBasePage: React.FC<ILayoutBasePageProps> = ({
  title,
  children,
  toolBars,
  textSearch,
  placeholder,
  changeTextSearch,
}) => {
  const theme = useTheme();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={2}>
      <NavTabs title={title} />
      <Box
        gap={1}
        marginX={1}
        padding={1}
        paddingX={2}
        display="flex"
        alignItems="center"
        height={theme.spacing(5)}
        component={Paper}
      >
        <Typography
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipses"
        >
          {title}
        </Typography>

        <div
          style={{
            width: "648px",
            height: "0px",
            border: "1px solid #404252",
            flex: "none",
          }}
        ></div>

        <Box flex={1} display="flex" justifyContent="end">
          <TextField
            size="small"
            fullWidth
            value={textSearch}
            placeholder={placeholder}
            onChange={(e) => changeTextSearch?.(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>

      {toolBars && <Box>{toolBars}</Box>}

      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};
