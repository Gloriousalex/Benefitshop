import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { styled } from '@mui/system';

const NavBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Header: FC = () => {
  const { t, i18n } = useTranslation('layout');

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <AppBar position="relative">
      <Container maxWidth="xl">
        <NavBar disableGutters>
          <Typography>{t('header.title')}</Typography>
          <Box>
            <Button onClick={() => handleChangeLanguage('en')}>en</Button>
            <Button onClick={() => handleChangeLanguage('ua')}>ua</Button>
          </Box>
        </NavBar>
      </Container>
    </AppBar>
  );
};

export default Header;
