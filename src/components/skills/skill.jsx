import React, { useEffect } from "react";
import './skill.css'
import { FaQuoteLeft, FaQuoteRight, FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa'
import { SiFirebase, SiJavascript } from 'react-icons/si'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Skills() {
    let Skills = [
        { skillName: 'HTML', percentage: 90, class: 'skillPercentageDivHtml', icon: <FaHtml5 className='htmlIcon' /> },
        { skillName: 'CSS', percentage: 80, class: 'skillPercentageDivCss', icon: <FaCss3Alt className='cssIcon' /> },
        { skillName: 'Javascript', percentage: 75, class: 'skillPercentageDivJavaScript', icon: <SiJavascript className='javascriptIcon' /> },
        { skillName: 'ReactJS', percentage: 80, class: 'skillPercentageDivReactJS', icon: <FaReact className='reactjsIcon' /> },
        { skillName: 'React Native', percentage: 65, class: 'skillPercentageDivReactNative', icon: <FaReact className='reactNativeIcon' /> },
        { skillName: 'Firebase', percentage: 75, class: 'skillPercentageDivFirebase', icon: <SiFirebase className='firebaseIcon' /> },
    ]
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='mainSkill' id='skills'>
            <div className='skillSecondDiv'>
                <div className='skillHeadDiv'>
                    <h1 className='skillHead'
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top">My Skills</h1>
                    <div className='skillHeadUnderlineMianDiv'>
                        <div className='skillHeadUnderline'
                            data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-delay="0"
                            data-aos-duration="800"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top"></div>
                        <div className='skillHeadUnderlineCircle'
                            data-aos="fade-down"
                            data-aos-offset="200"
                            data-aos-delay="0"
                            data-aos-duration="500"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top"></div>
                        <div className='skillHeadUnderline2'
                            data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-delay="0"
                            data-aos-duration="800"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top"></div>
                    </div>
                </div>
                <div className='mySkillsDiv'>
                    <div className='mySkillsFirstDiv'
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="700"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top">
                        <h1>My Skills and Experience</h1>
                        <FaQuoteLeft className='invertedCommas' />
                        <p className='skillsText'>I am an expert web developer with 1 and half year of experience. I can develop all kinds of websites using ReactJS.
                            I can also develop mobile apps using React Native. I have developed the website of <a style={{ color: 'brown', fontFamily: 'custom3' }} href='http://barimills.com.pk' target='_blank'>bari mills</a> (A Textile Company). This was a good experience with client. Client's satisfaction is my first priority.</p>
                        <FaQuoteRight className='invertedCommas' />
                    </div>
                    <div className='mySkillsSecondDiv'
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top">
                        {
                            Skills.map((val, index) => {
                                return (
                                    <div className='skillsGraphDiv' key={index} >
                                        <div className='skillsGraphHeadDiv'>
                                            <div className='skillsGraphHead'>{val.skillName} {val.icon}</div>
                                            <div className='skillsGraphPercentage'>{val.percentage}%</div>
                                        </div>
                                        <div className='skillsBaseDiv'>
                                            <div className={val.class}></div>
                                        </div>
                                        <div className='skillsLevelDiv'>
                                            <div>Basic</div>
                                            <div>Intermediate</div>
                                            <div>Expert</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills