import { IconButton } from '@mui/material';

import TranslateIcon from '@mui/icons-material/Translate';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import MenuIcon from '@mui/icons-material/Menu';

import EsportsLogo from '../icons/esports-logo';
import Button from '../ui/button';
import { NavLinks } from '../ui/navlink';

const DUMMY_LINKS_ARRAY = [
  { id: 1, title: 'Home', submenu: [], to:"/" },
  { id: 2, title: 'About', submenu: [], to:"/about" },
  { id: 3, title: 'Services',submenu:[], to:"/services" },
  {
    id: 4,
    title: 'Brands',
    submenu: [
      { id: '5', title: 'Esports News', to:"/brands/esports-news" },
      { id: 6, title: 'Arab News', to:"/brands/arab-news" },
      { id: 7, title: 'Arabia Talents', to:"/brands/arabia-talents" },
    ],
  },
  { id: 8, title: 'Portfolio', submenu:[], to:"/portfolio" },
  { id: 9, title: 'Team', submenu:[], to:"/team" },
  { id: 10, title: 'Blog', submenu:[], to:"/blog" },
];

const Navigation = props => {
  return (
    <div className="bg-navigation">
      <div className="h-11 md:h-14 px-5 md:px-10 lg:px-16 flex items-center justify-between">
        <div className="flex text-offwhite items-center">
          <TranslateIcon className="text-offwhite" />
          <p className="pl-1">English</p>
          <IconButton className="text-offwhite">
            <KeyboardArrowDownIcon />
          </IconButton>
        </div>
        {/* ----- SOCIAL MEDIA ICONS ----- */}
        <SocialMediaIcons />
      </div>
      <nav className="h-16 md:h-20 px-5 md:px-10 lg:px-16 flex items-center justify-between">
        <div className="flex">
          <IconButton disableRipple className="text-offwhite p-0 pr-4 lg:hidden">
            <MenuIcon />
          </IconButton>
          <EsportsLogo />
        </div>
        <div className="navlinks hidden lg:block h-full">
          <NavLinks linksArray={DUMMY_LINKS_ARRAY} />
        </div>
        <Button title={'CONTACT'} />
      </nav>
    </div>
  );
};

export default Navigation;

const SocialMediaIcons = () => {
  return (
    <div className="flex items-center">
      <p className="hidden md:block text-offwhite">
        Follow Us On <HorizontalRuleIcon />
      </p>
      <IconButton>
        <YouTubeIcon className="text-yellow" />
      </IconButton>
      <IconButton>
        <FacebookIcon className="text-yellow" />
      </IconButton>
      <IconButton>
        <TwitterIcon className="text-yellow" />
      </IconButton>
      <IconButton>
        <InstagramIcon className="text-yellow" />
      </IconButton>
      <IconButton className="pr-0">
        <LinkedInIcon className="text-yellow" />
      </IconButton>
    </div>
  );
};
