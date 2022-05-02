import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Container, SwipeableDrawer } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  marginTop: "50px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "gray",
}));

const theme = createTheme({
  palette: {
    primary: { main: "#142138e0" },

    secondary: { main: "#d1e3f3" },
  },
});

export default function AppBar1() {
  const [state, setState] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar position="static">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Link passHref href="/">
              <a>
                <Image
                  src="/images/logo.svg"
                  width={250}
                  height={30}
                  alt="Hollowverse"
                  layout="fixed"
                />
              </a>
            </Link>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
            >
              <SearchIcon />
            </IconButton>
            <SwipeableDrawer
              anchor="top"
              open={state}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              <Box
                sx={{ width: "auto" }}
                role="presentation"
                onClick={() => toggleDrawer(false)}
                onKeyDown={() => toggleDrawer(false)}
              >
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search a celebrity…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Box>
            </SwipeableDrawer>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
