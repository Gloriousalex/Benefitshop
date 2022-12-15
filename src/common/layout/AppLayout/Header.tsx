import { FC } from 'react';
import { AppBar, Container, Toolbar, Box, Typography } from '@mui/material';

const Header: FC = () => {
  return (
    <AppBar position="relative">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography>Header</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
