import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { useNavigate } from "react-router-dom";

type pageType = {
  name: string;
  url: string;
};

const SideMenu: React.FC = () => {
  const navigate = useNavigate();

  const [isOpen, setOpen] = React.useState<boolean>(false);

  const hundlePage = (page: pageType) => {
    document.title = `${page.name} | First step React.js`;
    navigate(`/${page.url}`);
    setOpen(false);
  };

  const handleDrawerToggle = () => {
    setOpen(!isOpen);
  };

  const pageList: pageType[] = [
    {
      name: "Step0. ",
      url: "main",
    },
    {
      name: "Step1. Component",
      url: "component",
    },
    {
      name: "Step2. useState",
      url: "usestate",
    },
    {
      name: "Step3. useEffect",
      url: "useeffect",
    },
    {
      name: "Step4. reduxToolkit",
      url: "reduxtoolkit",
    },
    {
      name: "Step5. ReactRouter",
      url: "reactrouter",
    },
    {
      name: "Step6. other",
      url: "other",
    },
  ];

  const drawer = (
    <div>
      <List>
        {pageList.map((page, index) => (
          <ListItem button key={page.url} onClick={() => hundlePage(page)}>
            <ListItemText primary={page.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {/* First step React.js */}
            Test
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav" aria-label="mailbox folders">
        <Drawer
          variant="temporary"
          open={isOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: false,
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
};

export default SideMenu;
