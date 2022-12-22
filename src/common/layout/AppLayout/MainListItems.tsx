import { Fragment, useState, FC } from 'react';
import { useTranslation } from 'react-i18next';

import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from '@mui/icons-material';

import { navmenu } from 'common/static/navmenu';
import { theme } from 'styles/theme';
import { LeftPanelLink } from './DashBoard/styles';

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
              <Icon sx={{ fontSize: '30px' }} />
            </ListItemIcon>

            <ListItemText primary={`${t(`${title}`)}`} />

            {open === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
          <Collapse in={open === index} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {expandMenu?.map(({ icon: Icon, key, pass, title }) => (
                <ListItemButton
                  sx={{ pl: 3, bgcolor: `${theme.palette.primary.dark}` }}
                  key={`${key}`}
                >
                  <LeftPanelLink to={pass}>
                    <ListItemIcon>
                      <Icon sx={{ fontSize: '30px' }} />
                    </ListItemIcon>
                    <ListItemText primary={`${t(`${title}`)}`} />
                  </LeftPanelLink>
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </Fragment>
      ))}
    </Fragment>
  );
};
