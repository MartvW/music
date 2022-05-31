import InstagramPost from './components/InstagramPost';

const InstagramPage = () => (
    <div className='my-24 md:h-screen h-fit w-full flex justify-center items-center py-24 px-24'>
        <div id='instagram' className='w-full h-full flex justify-center items-center flex-col gap-5'>
            <InstagramPost />
        </div>
    </div>
);

export default InstagramPage;