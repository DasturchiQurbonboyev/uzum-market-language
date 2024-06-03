import React, { useRef } from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Hero.css'
import { Swiper } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

const Hero = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const heroImg = [

        {
            img: "https://images.uzum.uz/cpc4menfrr82f0a4m2g0/main_page_banner.jpg"
        },
        {
            img: "https://images.uzum.uz/cp5fggvj2e4ghqns3leg/main_page_banner.jpg"
        },
        {
            img: "https://images.uzum.uz/cp5fjnnfrr80f2gm0hcg/main_page_banner.jpg"
        },
        {
            img: "https://images.uzum.uz/cpcreh4crcfqljg1bctg/main_page_banner.jpg"
        },
        {
            img: "https://images.uzum.uz/cp5f01c0u44tu6dqd430/main_page_banner.jpg"
        },
        {
            img: "https://images.uzum.uz/cpcnvojmdtjnp737nb40/main_page_banner.jpg"
        },
        {
            img: "https://images.uzum.uz/cp3jr47frr80f2glk05g/main_page_banner.jpg"
        }
    ]

    return (
        <div className='kontainer '>
            <Swiper
                spaceBetween={40}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                {
                    heroImg?.map((el, inx) => (
                        <SwiperSlide key={inx}>
                            <img src={el.img} alt="" />
                        </SwiperSlide>
                    ))
                }


                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    )
}

export default Hero