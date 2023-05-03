import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      style={{ border: "1px solid #AAA", borderRadius: 10 }}
      component="span"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      label={
        <span> 
            {props.label}
            <IconButton size="small" component="span" onClick={() => { alert("Closing this tab..."); }}>
                <CloseIcon />
            </IconButton>
        </span>
        }
    />
  );
}

interface INavTabs {
  title: string;
}

export default function NavTabs(tab: INavTabs) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label={tab.title} href="/contacts" />
      </Tabs>
    </Box>
  );
}
