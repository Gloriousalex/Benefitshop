import {
  School as SchoolIcon,
  MoveToInbox as InboxIcon,
  Loyalty as LoyaltyIcon,
  AccountTree as AccountTreeIcon,
  Map as MapIcon,
  Devices as DevicesIcon,
  LocalLibrary as LocalLibraryIcon,
} from '@mui/icons-material';

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
        pass: '',
        icon: LoyaltyIcon,
        key: 'mybenefit',
      },
      {
        title: 'benefit.bonusGuide',
        pass: '',
        icon: AccountTreeIcon,
        key: 'bonusguide',
      },
      {
        title: 'benefit.benefitMap',
        pass: '',
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
