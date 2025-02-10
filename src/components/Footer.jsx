import FavoriteIcon from "@mui/icons-material/Favorite";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <footer>
      <Typography align="center" fontSize={12}>
        Hand-Built with <FavoriteIcon sx={{ color: "red" }} fontSize="14" />
      </Typography>
    </footer>
  );
}
