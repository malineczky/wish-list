import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";

function Layout() {
    return (
        <div>
            <Navbar />
            <Container className="container" fixed sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Outlet />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Layout;
