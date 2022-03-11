import React, { useEffect, useState } from "react";
import './header.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { AiFillHome, AiFillContacts, AiOutlineClose } from 'react-icons/ai'
import { GiSkills } from 'react-icons/gi'
import { MdWork } from 'react-icons/md'
// import Avatar from '../../images/avatar.png'

function Header() {
    useEffect(() => {
        AOS.init();
    }, [])

    const [menu, setMenu] = useState(false)
    return (
        <>
            <div className='header'
                data-aos="fade-right"
                data-aos-easing="ease-in-sine"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-mirror="false"
                data-aos-once="true"
                data-aos-anchor-placement="top">
                <div className='navTitle'
                    data-aos="flip-down"
                    data-aos-delay="1500"
                    data-aos-duration="1000"
                    data-aos-mirror="false"
                    data-aos-once="true"
                    data-aos-anchor-placement="top">Okasha</div>
                <div className='navItems'
                    data-aos="fade-left"
                    data-aos-delay="1800"
                    data-aos-duration="1000"
                    data-aos-mirror="false"
                    data-aos-once="true"
                    data-aos-anchor-placement="top">
                    <a href="#about" style={{ textDecoration: 'none' }}><div>About</div></a>
                    <a href="#skills" style={{ textDecoration: 'none' }}><div>Skills</div></a>
                    <a href="#work" style={{ textDecoration: 'none' }}><div>Work</div></a>
                    <a href="#contact" style={{ textDecoration: 'none' }}><div>Contact</div></a>
                </div>
                <div
                    className='menuIconDiv'
                    data-aos="zoom-in"
                    data-aos-delay="1000"
                    data-aos-duration="1000"
                    data-aos-mirror="false"
                    data-aos-once="true"
                    data-aos-anchor-placement="top">
                    <HiOutlineMenuAlt3 className='menuIcon' onClick={() => { setMenu(true) }} />
                </div>
            </div>
            <div className='responsiveMenu' style={{ transform: menu === true ? 'translateX(0)' : 'translateX(-100%)' }} >
                <div className='responsiveMenuItmesDiv'>
                    <div className='navTitle menuNavTitle'>Okasha
                        <AiOutlineClose className='cancelIcon' onClick={() => { setMenu(false) }} />
                    </div>
                    {/* <hr /> */}
                    <ul className='menuNavItems'>
                        <li><a href="#about" style={{ textDecoration: 'none', color: 'white' }} onClick={() => { setMenu(false) }}><AiFillHome className='menuBarIcons' /> About</a></li>
                        <li><a href="#skills" style={{ textDecoration: 'none', color: 'white' }} onClick={() => { setMenu(false) }}><GiSkills className='menuBarIcons' /> Skills</a></li>
                        <li><a href="#work" style={{ textDecoration: 'none', color: 'white' }} onClick={() => { setMenu(false) }}><MdWork className='menuBarIcons' /> Work</a></li>
                        <li><a href="#contact" style={{ textDecoration: 'none', color: 'white' }} onClick={() => { setMenu(false) }}><AiFillContacts className='menuBarIcons' />Contact</a></li>
                    </ul>
                    {/* <div className='menuAvatarDiv'>
                        <img className='menuAvatar' src={Avatar} alt="" />
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Header