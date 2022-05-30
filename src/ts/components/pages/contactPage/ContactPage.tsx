import Contact from './components/Contact';
import InstagramPNG from '@images/instagram.png';
import YoutubePNG from '@images/youtube.png';
import MailPNG from '@images/mail.png';

const ContactPage = () => (
    <div className='md:my-24 h-screen w-full flex items-center py-24 md:px-24'>
        <div id='contact' className='w-full h-full flex justify-center items-center flex-col gap-5'>
            <h1 className='text-5xl font-thin'>Contact</h1>
            <div className='container md:px-10 md:py-10 md:w-3/4 w-full'>
                <div className="flex md:w-full md:justify-evenly justify-center md:gap-0 gap-[25px]">
                    <Contact src={InstagramPNG} alt='Instagram' href='https://www.instagram.com/musicbymart/' />
                    <Contact src={YoutubePNG} alt='Youtube' href='https://www.youtube.com/channel/UCisi9qaEjEmbAXnX5qDewJw' />
                    <Contact src={MailPNG} alt='Mail' href='mailto:mart@martvanweeghel.nl' />
                </div>
            </div>
        </div>
    </div>
);

export default ContactPage;