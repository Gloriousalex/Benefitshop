import {
  School as SchoolIcon,
  MoveToInbox as InboxIcon,
  Loyalty as LoyaltyIcon,
  AccountTree as AccountTreeIcon,
  Map as MapIcon,
  Devices as DevicesIcon,
  LocalLibrary as LocalLibraryIcon,
} from '@mui/icons-material';
import { ROUTES } from 'common/types/routes';

interface IExpandMenu {
  title: string;
  pass: string;
  icon: any;
  key: string;
}

interface Inavmenu {
  title: string;
  icon: any;
  key: string;
  expandMenu?: IExpandMenu[];
}

export const navmenu: Inavmenu[] = [
  {
    title: 'benefit.benefitshop',

    icon: InboxIcon,
    key: 'benefitshop',
    expandMenu: [
      {
        title: 'benefit.myBenefit',
        pass: ROUTES.MYBENEFITS,
        icon: LoyaltyIcon,
        key: 'mybenefit',
      },
      {
        title: 'benefit.bonusGuide',
        pass: ROUTES.BENEFITS_GUIDE,
        icon: AccountTreeIcon,
        key: 'bonusguide',
      },
      {
        title: 'benefit.benefitMap',
        pass: ROUTES.BENEFITS_MAP,
        icon: MapIcon,
        key: 'benefitMap',
      },
    ],
  },

  {
    title: 'knowledgeBase.knowledgeBase',
    icon: SchoolIcon,
    key: 'knowledgeBase',
  },

  {
    title: 'testDevices.testDevices',
    icon: DevicesIcon,
    key: 'testDevices',
    expandMenu: [
      {
        title: 'My devices',
        pass: '',
        icon: LocalLibraryIcon,
        key: 'myDevices',
      },
    ],
  },

  {
    title: 'library.library',
    icon: LocalLibraryIcon,
    key: 'library',
  },
];
