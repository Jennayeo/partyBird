import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import styled from 'styled-components';

import "../Font.css";


const SwiperContainer = () => {

    return (
        <>
            <TextBox>Business Like Party</TextBox>
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
            // onSlideChange={(e) => console.log(e)}
            // onSwiper={(swiper) => console.log(swiper)}
            pagination={true} modules={[Pagination, Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            >
                <SlideContainer><img src={process.env.PUBLIC_URL + '/img1.jpg'}style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}/></SlideContainer>
                <SlideContainer><img src={process.env.PUBLIC_URL + '/img2.jpg'} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}/></SlideContainer>
                <SlideContainer><img src={process.env.PUBLIC_URL + '/img3.jpeg'} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}/></SlideContainer>
            </Swiper>
        </>
      );
}

const SlideContainer = styled(SwiperSlide)`
    width: 100vw;
    height: 100vh;
`

const TextBox = styled.div`
    position: absolute;
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family : Source Sans Pro;
    font-size: 8em;
    font-weight: 900;
    color: #fff;
`;
export default SwiperContainer;