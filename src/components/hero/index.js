import React, { useState } from 'react'
import Navbar from '../navbar';
import Sidebar from '../sidebar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './heroElement';

const Hero = () => {
    const [isOpen, setIsOpen]  = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar toggle = {toggle}/>
            <Sidebar isOpen = {isOpen} toggle = {toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Stylish</HeroH1>
                    <HeroP>Sustainable clothes</HeroP>
                    <HeroBtn>Browse Now</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;
 