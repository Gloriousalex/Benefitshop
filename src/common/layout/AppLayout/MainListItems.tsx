import React, { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import { useTranslation } from 'react-i18next';
import { Collapse, List } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandMore';
import { StarBorder } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import MapIcon from '@mui/icons-material/Map';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

export const MainListItems = () => {
  const { t } = useTranslation('pages');

  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={`${t('benefit.benefitshop')}`} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <LoyaltyIcon />
            </ListItemIcon>
            <ListItemText primary={`${t('benefit.myBenefit')}`} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <AccountTreeIcon />
            </ListItemIcon>
            <ListItemText primary={`${t('benefit.bonusGuide')}`} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
              <MapIcon />
            </ListItemIcon>
            <ListItemText primary={`${t('benefit.benefitMap')}`} />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary={`${t('knowledgeBase.knowledgeBase')}`} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary={`${t('testDevices.testDevices')}`} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary={`${t('library.library')}`} />
      </ListItemButton>
    </React.Fragment>
  );
};
