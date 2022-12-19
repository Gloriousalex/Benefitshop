import React, { Fragment, useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTranslation } from 'react-i18next';
import { Collapse, List } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandMore';
import { FC } from 'react';
import { navmenu } from 'common/static/navmenu';
import { theme } from 'styles/theme';

interface MainListItemsProps {
  toggleDrawer: () => void;
  isSideBarOpen: boolean;
}

export const MainListItems: FC<MainListItemsProps> = ({
  toggleDrawer,
  isSideBarOpen,
}) => {
  const { t } = useTranslation('pages');

  const [open, setOpen] = useState<number | null>(null);

  const handleClick = (value: number) => {
    if (open === value) {
      setOpen(null);
      return;
    }
    setOpen(value);
    if (!isSideBarOpen) toggleDrawer();
  };

  return (
    <Fragment>
      {navmenu.map(({ icon: Icon, key, title, expandMenu }, index) => (
        <Fragment key={`${key}`}>
          <ListItemButton onClick={() => handleClick(index)}>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={`${t(`${title}`)}`} />
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
          <Collapse
            in={open === index}
            timeout="auto"
            unmountOnExit
            key={`${key}`}
          >
            <List component="div" disablePadding>
              {expandMenu?.map(({ icon: Icon, key, pass, title }) => (
                <ListItemButton
                  sx={{ pl: 3, bgcolor: `${theme.palette.primary.dark}` }}
                  key={`${key}`}
                >
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={`${t(`${title}`)}`} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </Fragment>
      ))}
    </Fragment>
  );
};
