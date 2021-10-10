import React from 'react'
import Navbar from '../navbar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './heroElement';

const Hero = () => {
    return (
        <HeroContainer>
            <Navbar/>
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
 