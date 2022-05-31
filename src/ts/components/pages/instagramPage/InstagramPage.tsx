import InstagramPost from './components/InstagramPost';

// {
//     "media_url": "https://scontent-ams4-1.cdninstagram.com/v/t51.29350-15/284542464_589410989007144_4766433577629752353_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=JkZUDGuuuVkAX-suvGS&_nc_ht=scontent-ams4-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_YaOX5480WUMJzw9Dv5EFaYrH7aaHB4m-65kZeO64dUA&oe=629B03DE",
//     "timestamp": "2022-05-29T18:37:15+0000",
//     "media_type": "IMAGE",
//     "permalink": "https://www.instagram.com/p/CeJvsouKWQR/",
//     "username": "musicbymart",
//     "id": "17931172325324164"
// }

const InstagramPage = () => (
    <div className='my-32 md:h-screen h-fit w-full flex justify-center items-center py-24 md:px-24 px-5'>
        <div id='instagram' className='w-full h-full flex justify-center items-center flex-col gap-5'>
            <InstagramPost />
        </div>
    </div>
);

export default InstagramPage;