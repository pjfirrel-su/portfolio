import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import styles from "./Carousel.module.scss";

import Heading from "../Heading";
import Image from "next/image";
import Link from "next/link";

const Carousel = ({label}) => {

    return (
        <section className={styles.carousel}>
            <div>
                <Heading level={1}>&lt;work&gt;</Heading>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#3FA9F5",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-navigation-color": "#3FA9F5",
                    }}
                    effect={'coverflow'}
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
                    navigation={true}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className={styles.swiper}
                >
                    <SwiperSlide className={styles.swiper__slide}>
                        <Link href="/video-game-ui">
                            <Image 
                                src="/passion_thumbnail.png"
                                alt="demo image"
                                height={300}
                                width={500}
                                className={styles.swiper__slide__img}
                            />
                        </Link>
                    </SwiperSlide>
                    {/* <SwiperSlide className={styles.swiper__slide}>
                        <Link href="/the-outlet">
                            <Image 
                                src="wordmark.svg"
                                alt="demo image"
                                height={200}
                                width={200}
                                className={styles.swiper__slide__img}
                            />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiper__slide}>
                        <Link href="/summit-typeface">
                            <Image 
                                src="wordmark.svg"
                                alt="demo image"
                                height={200}
                                width={200}
                                className={styles.swiper__slide__img}
                            />
                        </Link>
                    </SwiperSlide> */}
                    <SwiperSlide className={styles.swiper__slide}>
                        <Link href="/pronto">
                            <Image 
                                src="/pronto_thumbnail.png"
                                alt="demo image"
                                height={200}
                                width={200}
                                className={styles.swiper__slide__img}
                            />
                        </Link>
                    </SwiperSlide>
                    {/* <SwiperSlide className={styles.swiper__slide}>
                        <Link href="/grocery-ux">
                            <Image 
                                src="/wordmark.svg"
                                alt="demo image"
                                height={200}
                                width={200}
                                className={styles.swiper__slide__img}
                            />
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiper__slide}>
                        <Link href="/interactive-type-specimen">
                            <Image 
                                src="/wordmark.svg"
                                alt="demo image"
                                height={200}
                                width={200}
                                className={styles.swiper__slide__img}
                            />
                        </Link>
                    </SwiperSlide> */}
                    <SwiperSlide className={styles.swiper__slide}>
                        <Link href="/personal-brand">
                            <Image 
                                src="/personal_thumbnail.png"
                                alt="demo image"
                                height={200}
                                width={200}
                                className={styles.swiper__slide__img}
                            />
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
};
export default Carousel;