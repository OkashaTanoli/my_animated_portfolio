import React, { useEffect } from 'react'
import './about.css'
import MyPic from '../../images/mypic.jpg';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';


function About() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='about' id='about'>
            <div className='aboutSecond'>
                <div className='aboutHeadDiv'>
                    <h1 className='aboutHead'
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top">About Me</h1>
                    <div className='aboutHeadUnderlineMianDiv'>
                        <div className='aboutHeadUnderline'
                            data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-delay="0"
                            data-aos-duration="800"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top"></div>
                        <div className='aboutHeadUnderlineCircle'
                            data-aos="fade-down"
                            data-aos-offset="200"
                            data-aos-delay="0"
                            data-aos-duration="500"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top"></div>
                        <div className='aboutHeadUnderline2'
                            data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-delay="0"
                            data-aos-duration="800"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top" ></div>
                    </div>
                </div>
                <div className='aboutBlock'>
                    <div className='myPicMainDiv'
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top">

                        <div className='myPicDiv'>
                            <div className='myPicExtraDiv'></div>
                            <img src={MyPic} alt="" />
                        </div>
                    </div>
                    <div className='aboutTextDiv'
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="100"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top">
                        <h1>Hey There! I'm Okasha Aijaz</h1>
                        <FaQuoteLeft className='invertedCommas' />
                        <p className='aboutText'>
                            I am an 18 years old web developer and currently studying in college. I am front-end web developer with 1 and half year of experience.
                        </p>
                        <FaQuoteRight className='invertedCommas' />
                    </div>
                </div>
                <div className='personalInfo'
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top">
                    <div className='qualificationDiv'>
                        <h1>Qualification :</h1>
                        <div className='qualificationExtraDiv'></div>
                        <ul>
                            <li className='matriculation'>I have passed matriculation examination from F.G. Public School Karachi Cantt with  <span style={{ fontSize: '25px', fontFamily: 'sans-serif', fontWeight: '800' }}>91.1%</span> (A+ Grade).</li>
                            <li className='matriculation'>Currently I am studying ICS from F.G Boys Inter College Karachi.</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About