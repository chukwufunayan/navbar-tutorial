import Button from "@mui/material/Button";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
function ThemeButton({ themeMode, toggleTheme }) {
  return (
    <Button
      variant={"contained"}
      onClick={() => toggleTheme()}
      sx={{
        padding: ".6rem .5rem",
        backgroundColor: themeMode ? "#f0dc4e" : "#b967f5",
      }}
    >
      {themeMode ? <NightlightIcon /> : <LightModeIcon />}
    </Button>
  );
}
export default ThemeButton;
