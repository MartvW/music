import Highlight from '@components/features/highlight/Highlight';

const AboutPage = () => {
    const calculateAge = (date: any) => {
        const birthdate = new Date(date);
        let timeDiff = Math.abs(Date.now() - birthdate.getTime());
        let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
        return age;
    };

    return (
        <div className='my-24 md:h-screen h-fit w-full flex justify-center items-center py-24 md:px-24 px-5'>
            <div id='about' className='w-full h-full flex justify-center items-center flex-col gap-5'>
                <h1 className='text-5xl font-thin'>About</h1>
                <div className='mt-5 flex flex-col gap-7 items-center'>
                    <p className='md:text-xl text-md'>Hey, I'm <Highlight color='orange'>Mart van Weeghel</Highlight> I am <Highlight color='blue'>{calculateAge('2004-04-30')} years old</Highlight> and currently living in <Highlight color='red'>The Netherlands</Highlight></p>
                    <p className='md:text-xl text-md'>I started playing piano when I was about <Highlight color='yellow'>6 years</Highlight> old, and in 2021 I started playing guitar.</p>
                    <p className='md:text-xl text-md'>I like to play <Highlight color='green'>worship</Highlight> songs on the piano in the church.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;