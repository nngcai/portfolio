import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'React Js'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Node Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Python'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Java'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Web Design'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'40%'} width={'40%'} />
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'} 
                text={'I build custom static & ecommerce sites'}
                />
                <ServicesSection image={intelligence} title={'Software Engineering'} 
                text={'I build, test & deploy quality software solutions using the latest tech stacks.'}
                />
                <ServicesSection image={gamedev} title={'Cloud'} 
                text={'Certified Microsoft Azure practitioner.'}
                />

                
            </div>

        </div>
    )
}

export default AboutPage;
