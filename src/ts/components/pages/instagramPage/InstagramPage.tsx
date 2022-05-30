import InstagramPost from './components/InstagramPost';

const InstagramPage = () => {
    return (
        <div className='my-24 md:h-screen h-fit w-full flex justify-center items-center py-24 px-24'>
            <div id='instagram' className='w-full h-full flex justify-center items-center flex-col gap-5'>
                <h1 className='text-5xl mt-24 font-thin'>Instagram</h1>
                <InstagramPost />
            </div>
        </div>
    );
};

export default InstagramPage;