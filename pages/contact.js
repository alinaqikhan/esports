import CloseIcon from '@mui/icons-material/Close';
import { IconButton, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import Button from '../components/ui/button';

import ContactBarLogo from '../components/icons/contact-bar';

const ContactPage = props => {

  return (
    <>
      <div className="bg-navigation h-full">
        <NavgationBar />
        <div className='h-full px-5 py-5 md:py-7 lg:py-10 md:px-10 lg:px-16'>
            <ContactBarLogo />
            <Typography variant='h5' className='text-offwhite py-5 font-bold'>Contact Us</Typography>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <label htmlFor="name" className='text-offwhite'>Name</label>
                    <TextField id='name' variant='outlined' placeholder='Enter full name' className='w-full py-2' inputProps={{style:{color:"#fff"}}}></TextField>
                </div>
                <div>
                    <label htmlFor="email" className='text-offwhite'>Email</label>
                    <TextField id='email' variant='outlined' placeholder='Enter email here' className='w-full py-2' inputProps={{style:{color:"#fff"}}}></TextField>
                </div>
                <div>
                    <label htmlFor="whatsapp" className='text-offwhite'>WhatsApp (optional)</label>
                    <TextField id='whatsapp' variant='outlined' placeholder='WhatsApp' className='w-full py-2' inputProps={{style:{color:"#fff"}}}></TextField>
                </div>
                <div>
                    <label htmlFor="wechat" className='text-offwhite'>Wechat (optional)</label>
                    <TextField id='wechat' variant='outlined' placeholder='Wechat' className='w-full py-2' inputProps={{style:{color:"#fff"}}}></TextField>
                </div>
                <div className='md:col-span-2'>
                    <label htmlFor="subject" className='text-offwhite'>Subject</label>
                    <TextField id='subject' variant='outlined' placeholder='Wechat' className='w-full py-2' inputProps={{style:{color:"#fff"}}}></TextField>
                </div>
                <div className='md:col-span-2'>
                    <label htmlFor="message" className='text-offwhite'>Message</label>
                    <TextField id='message' variant='outlined' placeholder='Type message here' multiline className='w-full py-2' minRows={5} inputProps={{style:{color:"#fff"}}}></TextField>
                </div>
                <div className='flex md:col-span-2 justify-end items-center my-3'>
                    <Button title={'Submit'} />
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;

const NavgationBar = () => {
    const router = useRouter();
  return (
    <div className="h-11 md:h-14 px-5 md:px-10 lg:px-16 flex items-center justify-between box">
      <div className="flex text-offwhite items-center"></div>
      <div>
        <IconButton onClick={() => router.push('/')}>
          <CloseIcon className="text-offwhite" />
        </IconButton>
      </div>
    </div>
  );
};
