import React, { useState } from 'react'
import { RamenDining, Mail, Notifications } from "@mui/icons-material";
import { AppBar, Toolbar, styled, Typography, InputBase, Badge,Avatar,Menu,MenuItem } from "@mui/material"
import { Box } from '@mui/system';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0px 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))
const Icons = styled(Box)(({ theme }) => ({
    display:"none",
    gap:"20px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}))
const UserBox = styled(Box)(({ theme }) => ({
    display:"flex",
    gap:"1px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}))

 const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>HungryBeats</Typography>
                <RamenDining sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder="search..." /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar sx={{width:30, height:30}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRZkxDTYE2B85z8Zq5U4rsPxCfQ8JAjN4SzFMQ6RiEYErXxIMsDNCL4HYgkAaiuvdalM&usqp=CAU" onClick={e=>setOpen(true)}/>
                </Icons>
                <UserBox onClick={e=>setOpen(true)}>
                <Avatar sx={{width:30, height:30}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRZkxDTYE2B85z8Zq5U4rsPxCfQ8JAjN4SzFMQ6RiEYErXxIMsDNCL4HYgkAaiuvdalM&usqp=CAU"/>
                <Typography variant='span'>Jesica</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        </AppBar>
    )
}

export default Navbar;