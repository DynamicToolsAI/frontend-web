import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,

    Typography,

} from '@mui/material';

const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
  return (
    <AppBar position="static" >
      <Toolbar>
        <Typography variant="h6" >
          DynamicTools
        </Typography>
        {/* Добавьте здесь другие элементы хедера, такие как кнопки или ссылки */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
