import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <CardGiftcardIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <Link to="/">WishList</Link>
                    </Typography>
                    <Button color="inherit">
                        <Link to="add-gift">Dodaj prezent</Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;
