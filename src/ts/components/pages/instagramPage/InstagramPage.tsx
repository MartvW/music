import InstagramPost from './components/InstagramPost';

const InstagramPage = () => (
    <div className='my-32 md:h-screen h-fit w-full flex justify-center items-center py-24 md:px-24 px-5'>
        <div id='instagram' className='w-full h-full flex justify-center items-center flex-col gap-5'>
            <InstagramPost />
        </div>
    </div>
);

export default InstagramPage;