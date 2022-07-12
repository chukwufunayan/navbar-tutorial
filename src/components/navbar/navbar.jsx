import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Popover from "@mui/material/Popover";
import flag from "../../icons/Flag-map_of_Nigeria.svg.png";
import NavbarLinks from "../navbarLinks/navbarLinks";
import ThemeButton from "../themeButton/themeButton";
import { useRef, useState } from "react";
import { Box } from "@mui/material";
function Navbar() {
  const [isLight, setIsLight] = useState(true);
  const [anchor, setAnchor] = useState(null);
  const popupRef = useRef();
  const open = Boolean(anchor);
  const toggleMenu = () => {
    if (anchor) setAnchor(null);
    else setAnchor(popupRef.current);
  };

  const toggleTheme = () => {
    if (isLight) setIsLight(false);
    else setIsLight(true);
  };
  return (
    <AppBar ref={popupRef} position="fixed" sx={{ padding: "0rem 1rem" }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack columnGap={1} direction="row" alignItems="center">
          <img
            alt="flag logo"
            src={flag}
            style={{ height: "35px", width: "45px" }}
          />
          <h3>Funayan</h3>
        </Stack>
        <Box sx={{ display: { xs: "none", sm: "inline" } }}>
          <NavbarLinks />
        </Box>
        <Stack direction={"row"} columnGap={1} rowGap={1}>
          <ThemeButton themeMode={isLight} toggleTheme={toggleTheme} />
          <Button
            variant={"contained"}
            sx={{ padding: ".6rem .5rem", display: { sm: "none" } }}
            onClick={() => toggleMenu()}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </Button>
        </Stack>
      </Stack>
      <Popover
        open={open}
        anchorEl={anchor}
        onClose={toggleMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{ display: { sm: "none" } }}
      >
        <NavbarLinks />
      </Popover>
    </AppBar>
  );
}

export default Navbar;
