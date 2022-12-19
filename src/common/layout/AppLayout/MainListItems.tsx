import React, { Fragment, useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTranslation } from 'react-i18next';
import { Collapse, List } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandMore';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import MapIcon from '@mui/icons-material/Map';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import DevicesIcon from '@mui/icons-material/Devices';
import SchoolIcon from '@mui/icons-material/School';
import { FC } from 'react';
import { navmenu } from 'common/static/navmenu';

interface MainListItemsProps {
  toggleDrawer: () => void;
  isSideBarOpen: boolean;
}

export const MainListItems: FC<MainListItemsProps> = ({
  toggleDrawer,
  isSideBarOpen,
}) => {
  const { t } = useTranslation('pages');

  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
    if (!isSideBarOpen) toggleDrawer();
  };

  return (
    <React.Fragment>
      {navmenu.map(menu => (
        <Fragment key={`${menu.key}`}>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <menu.icon />
            </ListItemIcon>
            <ListItemText primary={`${t(`${menu.title}`)}`} />
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit key={`${menu.key}`}>
            <List component="div" disablePadding>
              {menu.expandMenu?.map(expandMenu => (
                <ListItemButton sx={{ pl: 3 }} key={`${expandMenu.key}`}>
                  <ListItemIcon>
                    <expandMenu.icon />
                  </ListItemIcon>
                  <ListItemText primary={`${t(`${expandMenu.title}`)}`} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </Fragment>
      ))}
    </React.Fragment>
  );
};
