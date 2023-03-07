import React, { useEffect } from "react";
import './skill.css'
import { FaQuoteLeft, FaQuoteRight, FaCss3Alt, FaHtml5, FaReact, FaGithub, FaNodeJs } from 'react-icons/fa'
import { SiFirebase, SiJavascript, SiRedux, SiTypescript, SiMaterialui, SiGraphql, SiMongodb, SiExpress,SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import AOS from 'aos';
import PWA from '../../images/pwa.png'
import 'aos/dist/aos.css';


function Skills() {
    let Skills = [
        { skillName: 'HTML', icon: <FaHtml5 className='htmlIcon' /> },
        { skillName: 'CSS', icon: <FaCss3Alt className='cssIcon' /> },
        { skillName: 'Javascript', icon: <SiJavascript className='javascriptIcon' /> },
        { skillName: 'ReactJS', icon: <FaReact className='reactjsIcon' /> },
        { skillName: 'React Native', icon: <FaReact className='reactNativeIcon' /> },
        { skillName: 'Firebase', icon: <SiFirebase className='firebaseIcon' /> },
        { skillName: 'Redux', icon: <SiRedux className='reduxIcon' /> },
        { skillName: 'TypeScript', icon: <SiTypescript className='typescriptIcon' /> },
        { skillName: 'MaterialUI', icon: <SiMaterialui className='materialuiIcon' /> },
        { skillName: 'Github', icon: <FaGithub className='githubIcon' /> },
        { skillName: 'GraphQL', icon: <SiGraphql className='graphqlIcon' /> },
        { skillName: 'NodeJS', icon: <FaNodeJs className='nodeIcon' /> },
        { skillName: 'MongoDB', icon: <SiMongodb className='mongoIcon' /> },
        { skillName: 'ExpressJS', icon: <SiExpress className='ExpressIcon' /> },
        { skillName: 'Progressive Web App', icon: <img src={PWA} className='pwaIcon' alt="pwa_img" /> },
        { skillName: 'NextJS', icon: <SiNextdotjs className='NextIcon' /> },
        { skillName: 'Tailwind CSS', icon: <SiTailwindcss className='TailwindIcon' /> },
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
                        <p className='skillsText'>I am an expert web developer with 1 and half year of experience. I can develop all kinds of websites using ReactJS and NextJS.
                            I can also develop mobile apps using React Native. I have worked on many national and international projects. Few of sample projects are listed in work section. </p>
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
                                    // <div className='skillsGraphDiv' key={index} >
                                    //     <div className='skillsGraphHeadDiv'>
                                    //         <div className='skillsGraphHead'>{val.skillName} {val.icon}</div>
                                    //         <div className='skillsGraphPercentage'>{val.percentage}%</div>
                                    //     </div>
                                    //     <div className='skillsBaseDiv'>
                                    //         <div className={val.class}></div>
                                    //     </div>
                                    //     <div className='skillsLevelDiv'>
                                    //         <div>Basic</div>
                                    //         <div>Intermediate</div>
                                    //         <div>Expert</div>
                                    //     </div>
                                    // </div>
                                    <div className="my_skills ">
                                        <div className="extra_div_my_skills"></div>
                                        <div className='my_skills_second'>{val.skillName} {val.icon}</div>
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