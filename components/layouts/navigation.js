import { IconButton } from '@mui/material';

import TranslateIcon from '@mui/icons-material/Translate';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

const Navigation = props => {
  return (
    <div className="bg-navigation">
      <div className="h-11 px-5 md:px-10 lg:px-16 flex items-center justify-between">
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
      <nav></nav>
    </div>
  );
};

export default Navigation;

const SocialMediaIcons = () => {
  return (
    <div className='flex items-center'>
        <p className='hidden md:block text-offwhite'>Follow Us On <HorizontalRuleIcon /></p>
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
      <IconButton>
        <LinkedInIcon className="text-yellow" />
      </IconButton>
    </div>
  );
};
