import React, { useEffect } from "react";
import './work.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Covid from '../../images/covid.png'
import Shoe from '../../images/shoe.png'
import Expense from '../../images/expense.png'
import ShortAnimation from '../../images/shortanimation.png'
import Olx from '../../images/olx.png'
import RedQueen from '../../images/redqueen.png'
import Timer from '../../images/timer.png'
import Quiz from '../../images/quiz.png'
import ShoppingCart from '../../images/shoppingcart.png'
import HostelSite from '../../images/hostel.png'
import SpaceX from '../../images/spacex.png'
import { FaGlobe } from 'react-icons/fa'
import { VscGithub } from 'react-icons/vsc'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Work() {
    useEffect(() => {
        AOS.init();
    }, [])
    const cards = [
        {
            image: Expense,
            site: 'https://expense-tracker-app-okasha.surge.sh/',
            github: 'https://github.com/OkashaTanoli/Expense-Tracker-App',
            heading: 'Expense Tracker App'
        },
        {
            image: Covid,
            site: 'https://covid19-tracker-app-okasha.surge.sh/',
            github: 'https://github.com/OkashaTanoli/covid-tracker',
            heading: 'Covid Tracker App'
        },
        {
            image: Shoe,
            site: 'https://shoe-store-okasha.surge.sh/',
            github: 'https://github.com/OkashaTanoli/shoe-store',
            heading: 'Shoe Store'
        },
        {
            image: ShortAnimation,
            site: 'https://shortanimation-okasha.surge.sh/',
            github: 'https://github.com/OkashaTanoli/Short-Animation',
            heading: 'Tiny Animation'
        },
        {
            image: RedQueen,
            site: 'http://redqueenapp-okasha.surge.sh/',
            github: 'https://github.com/OkashaTanoli/Short-Animation',
            heading: 'Red Queen Animation'
        },
        {
            image: Olx,
            site: 'https://react-309aa.web.app',
            github: 'https://github.com/OkashaTanoli/olx-replica',
            heading: 'Olx Replica'
        },
        {
            image: Timer,
            site: 'https://timer-tdd-okasha.surge.sh/',
            github: 'https://github.com/OkashaTanoli/timer-app-tyscript-tdd',
            heading: 'Timer App'
        },
        {
            image: Quiz,
            site: 'https://quiz-app-tyscript-pwa-okasha.surge.sh',
            github: 'https://github.com/OkashaTanoli/quiz-app-typescript-pwa',
            heading: 'Quiz App'
        },
        {
            image: ShoppingCart,
            site: 'https://shopping-cart-using-redux-toolkit.surge.sh/',
            github: 'https://github.com/OkashaTanoli/shopping-basket-using-redux-toolkit',
            heading: 'Shopping Cart'
        },
        {
            image: HostelSite,
            site: 'https://easyaccomodations.com/',
            github: 'https://github.com/OkashaTanoli/hostel_site',
            heading: 'Hostel Site'
        },
        {
            image: SpaceX,
            site: 'http://spacex-graphgql-okasha.surge.sh/',
            github: 'https://github.com/OkashaTanoli/spacex-graphql',
            heading: 'Space X'
        },
    ]
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <div className='workMainDiv' id='work'>
            <div className='workSecondDiv'>
                <div className='workHeadDiv'>
                    <h1 className='workHead'
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top">My Work</h1>
                    <div className='workHeadUnderlineMianDiv'>
                        <div className='workHeadUnderline'
                            data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-delay="0"
                            data-aos-duration="800"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top"></div>
                        <div className='workHeadUnderlineCircle'
                            data-aos="fade-down"
                            data-aos-offset="200"
                            data-aos-delay="0"
                            data-aos-duration="500"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top"></div>
                        <div className='workHeadUnderline2'
                            data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-delay="0"
                            data-aos-duration="800"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top"></div>
                    </div>
                </div>
                <div className='workBlock'>
                    <Box>
                        <Grid container spacing={5}>
                            {
                                cards.map((val, index) => {
                                    return (
                                        <Grid item xs={12} lg={6} sm={12} className='mainGrid' key={index}>
                                            <Item
                                                className='workItems'

                                                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                                                data-aos-offset="200"
                                                data-aos-delay="100"
                                                data-aos-duration="1000"
                                                data-aos-mirror="true"
                                                data-aos-once="false"
                                                data-aos-anchor-placement="top">
                                                <img src={val.image} alt="" className='workImages' />
                                                <div className='workItemsExtraDiv'></div>
                                                <div className='cardHeading'>{val.heading}</div>
                                                <div className='visitingDiv'>
                                                    <a href={val.site} style={{ textDecoration: 'none' }} rel="noreferrer" target="_blank"><button>Visit Site <FaGlobe className='websiteIcon' /></button></a><br />
                                                    <a href={val.github} style={{ textDecoration: 'none' }} rel="noreferrer" target="_blank"><button>View On Github <VscGithub className='websiteIcon' /></button></a>
                                                </div>
                                            </Item>
                                        </Grid>

                                    )
                                })
                            }
                        </Grid>
                    </Box>

                </div>
            </div>
        </div>
    )
}
export default Work