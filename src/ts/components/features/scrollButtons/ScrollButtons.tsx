import { useEffect, useState } from 'react';
import Button from './component/Button';
import { ReactComponent as HomeSVG } from '@images/icons/home.svg';
import { ReactComponent as InstagramSVG } from '@images/icons/instagram.svg';
import { ReactComponent as AboutSVG } from '@images/icons/about.svg';
import { ReactComponent as YoutubeSVG } from '@images/icons/youtube.svg';
import { ReactComponent as ContactSVG } from '@images/icons/contact.svg';
import isInViewport from '@utils/isInViewport';

const ScrollButtons = () => {
    const [homeVisible, setHomeVisible] = useState(false);
    const [aboutVisible, setAboutVisible] = useState(false);
    const [instagramVisible, setInstagramVisible] = useState(false);
    const [youtubeVisible, setYoutubeVisible] = useState(false);
    const [contactVisible, setContactVisible] = useState(false);

    useEffect(() => {
        setActiveButton();
    }, []);

    const setActiveButton = () => {
        setHomeVisible(isInViewport('home') as boolean);
        setAboutVisible(isInViewport('about') as boolean);
        setInstagramVisible(isInViewport('instagram') as boolean);
        setYoutubeVisible(isInViewport('youtube') as boolean);
        setContactVisible(isInViewport('contact') as boolean);
        setHomeVisible(window.scrollY === 0);
    };

    window.addEventListener('scroll', setActiveButton);

    return (
        <div className='fixed md:top-0 md:bg-transparent bottom-5 md:right-5 right-0 md:w-1/12 w-full flex justify-center items-end md:h-full h-fit md:flex-col flex-row md:gap-1 gap-2 md:m-0'>
            <Button Icon={HomeSVG} setIsActive={setHomeVisible} isActive={homeVisible} elementId='home' />
            <Button Icon={AboutSVG} setIsActive={setAboutVisible} isActive={aboutVisible} elementId='about' />
            <Button Icon={InstagramSVG} setIsActive={setInstagramVisible} isActive={instagramVisible} elementId='instagram' />
            <Button Icon={YoutubeSVG} setIsActive={setYoutubeVisible} isActive={youtubeVisible} elementId='youtube' />
            <Button Icon={ContactSVG} setIsActive={setContactVisible} isActive={contactVisible} elementId='contact' />
        </div>
    );
};

export default ScrollButtons;