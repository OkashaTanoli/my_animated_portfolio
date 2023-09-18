import React, { useEffect } from 'react'
import './mainblock.css'
// import Image from '../../images/3.png'
import Avatar from '../../images/avatar.png'
import useWebAnimations from '@wellyshen/use-web-animations'
import { MdWavingHand } from 'react-icons/md'
import { GrFacebookOption, GrLinkedinOption } from 'react-icons/gr'
import { RiInstagramFill } from 'react-icons/ri'
import { VscGithubInverted } from 'react-icons/vsc'
import AOS from 'aos';
import 'aos/dist/aos.css';


function MianBlock() {
    const GithubAnimation = useWebAnimations({
        keyframes: [
            { boxShadow: '0 0 10px yellow' },
            { boxShadow: '0 0 10px #0f93ff' },
            { boxShadow: '0 0 10px #02cf24' },
            { boxShadow: '0 0 10px pink' },
            { boxShadow: '0 0 10px yellow' },
        ],
        animationOptions: {
            duration: 5000,
            iterations: Infinity
        }
    })
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>

            <div className='socialLinks'
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-delay="2500"
                data-aos-duration="700"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top"
            >
                <div>
                    <a href="https://www.facebook.com/okasha.tanoli.54/" rel="noreferrer" target='_blank'>
                        <GrFacebookOption className='fbIcon' />
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/okashatanoli/" rel="noreferrer" target='_blank'>
                        <RiInstagramFill className='instaIcon' />
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/okasha-aijaz/" rel="noreferrer" target='_blank'>
                        <GrLinkedinOption className='linkIcon' />
                    </a>
                </div>
            </div>
            <div className='mainBlock'>
                {/* <img id='mainBlockBackImage' src={Image} height='100vh' width='100%' alt='img' /> */}
                <div className='IntroDiv'
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="1000"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top">
                    <h1 className='Helloh1'><MdWavingHand className='wavingIcon' /> Hello, I'm</h1>
                    <p className='namePara'>Okasha Aijaz</p>
                    <div className='expDiv'>
                        <p className='expPara'>Full Stack Developer</p>
                        {/* <p className='expPara2 expPara'>Web Designer</p> */}
                    </div>
                    <a  href="https://github.com/OkashaTanoli" style={{ textDecoration: 'none' }} rel="noreferrer" target='_blank'>
                        <div className='githubDiv' ref={GithubAnimation.ref}
                            data-aos="flip-left"
                            data-aos-offset="0"
                            data-aos-delay="2000"
                            data-aos-duration="1000"
                            data-aos-mirror="false"
                            data-aos-once="true"
                            data-aos-anchor-placement="top" >
                            Github Account
                            <VscGithubInverted size={35} className='githubIcon' />
                        </div>
                    </a>
                </div>
                <div className='avatarDiv'>
                    <img src={Avatar} width='300px' alt="" />
                </div>
            </div>

        </div>
    )
}

export default MianBlock