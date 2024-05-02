import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

import styles from "./Carousel.module.scss";

import Heading from "../Heading";
import Image from "next/image";

const Carousel = ({label}) => {

    return (
        <section className={styles.carousel}>
            <Heading level={1}>&lt;Work&gt;</Heading>
            <div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className={styles.swiper}
                >
                    <SwiperSlide className={styles.swiper__slide}>
                        <Image 
                            src="wordmark.svg"
                            alt="demo image"
                            height={200}
                            width={200}
                            className={styles.swiper__slide__img}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiper__slide}>
                        <Image 
                            src="wordmark.svg"
                            alt="demo image"
                            height={200}
                            width={200}
                            className={styles.swiper__slide__img}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiper__slide}>
                        <Image 
                            src="wordmark.svg"
                            alt="demo image"
                            height={200}
                            width={200}
                            className={styles.swiper__slide__img}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiper__slide}>
                        <Image 
                            src="wordmark.svg"
                            alt="demo image"
                            height={200}
                            width={200}
                            className={styles.swiper__slide__img}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiper__slide}>
                        <Image 
                            src="wordmark.svg"
                            alt="demo image"
                            height={200}
                            width={200}
                            className={styles.swiper__slide__img}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiper__slide}>
                        <Image 
                            src="wordmark.svg"
                            alt="demo image"
                            height={200}
                            width={200}
                            className={styles.swiper__slide__img}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiper__slide}>
                        <Image 
                            src="wordmark.svg"
                            alt="demo image"
                            height={200}
                            width={200}
                            className={styles.swiper__slide__img}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiper__slide}>
                        <Image 
                            src="wordmark.svg"
                            alt="demo image"
                            height={200}
                            width={200}
                            className={styles.swiper__slide__img}
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiper__slide}>
                        <Image 
                            src="wordmark.svg"
                            alt="demo image"
                            height={200}
                            width={200}
                            className={styles.swiper__slide__img}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
};
export default Carousel;