import React, { Component } from "react";
import Slider from "react-slick";

import './Clients.scss'
import partners1 from './images/partners/partners1.jpg'
import partners2 from './images/partners/partners2.jpg'
import partners3 from './images/partners/partners3.jpg'
import partners4 from './images/partners/partners4.jpg'

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 2000,
            slidesToShow: 5,
            slidesToScroll: 4,
            initialSlide: 0,
            // autoplay: true,
            // speed: 2000,
            // autoplaySpeed: 5000,
            // pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <div className="responsive_slider">
                    <Slider {...settings}>
                        <div>
                            <img src={partners1} alt="partner1" />
                        </div>
                        <div>
                            <img src={partners2} alt="partner2" />
                        </div>
                        <div>
                            <img src={partners3} alt="partner3" />
                        </div>
                        <div>
                            <img src={partners4} alt="partner4" />
                        </div>
                        <div>
                            <img src={partners3} alt="partner3" />
                        </div>
                        <div>
                            <img src={partners4} alt="partner4" />
                        </div>
                        <div>
                            <img src={partners1} alt="partner1" />
                        </div>
                        <div>
                            <img src={partners2} alt="partner2" />
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}