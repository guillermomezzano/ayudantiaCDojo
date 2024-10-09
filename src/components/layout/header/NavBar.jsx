import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { useContext, useEffect } from "react"
import { GlobalContex } from "../../context/global-contex";

export default function NavBar() {

    const { currentUser } = useContext(GlobalContex)

    useEffect(() => {
        console.log("user del navbar", currentUser)
    }, [currentUser])

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
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Bienvenida<p>{currentUser.user.firstName}</p>
                    </Typography>
                    <Button color="inherit">Login</Button>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
