import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
function NavbarLinks() {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} columnGap={2} rowGap={1}>
      <Link sx={{ color: { xs: "black", sm: "white" } }} href={"#"}>
        Home
      </Link>
      <Link sx={{ color: "white" }} href={"#"}>
        About Us
      </Link>
      <Link sx={{ color: "white" }} href={"#"}>
        Contact
      </Link>
    </Stack>
  );
}
export default NavbarLinks;
