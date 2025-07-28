'use client'
import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination ,Autoplay,EffectCoverflow,Navigation} from 'swiper/modules';
import SlidePhone from './slidePhone';


export default function CarouselSection() {
  return (
    <div className='min-h-screen flex w-full flex-col justify-center items-center'>
        {/* <div className='w-full h-14 p-6  flex justify-start'>
            <p className='text-3xl font-semibold'>
                Screens
            </p>
        </div> */}
        <div className='flex-1 w-[90%] sm:w-full flex justify-center items-center'>
            <Swiper slidesPerView={1} spaceBetween={10} loop={true} pagination={{clickable: true,}} modules={[Pagination,Autoplay,EffectCoverflow,Navigation]} autoplay={{delay:2000, disableOnInteraction:false}} coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5, slideShadows: true}} className='w-[60%] h-full flex justify-center items-center'>


                <SwiperSlide className='flex justify-center items-center'>
                    <SlidePhone src='/phone screen/shot1.webp'/>
                </SwiperSlide>

                 <SwiperSlide className='flex justify-center items-center'>
                    <SlidePhone src='/phone screen/shot2.webp'/>
                </SwiperSlide>

                 <SwiperSlide className='flex justify-center items-center'>
                    <SlidePhone src='/phone screen/shot3.webp'/>
                </SwiperSlide>

                 <SwiperSlide className='flex justify-center items-center'>
                    <SlidePhone src='/phone screen/shot4.webp'/>
                </SwiperSlide>

                 <SwiperSlide className='flex justify-center items-center'>
                    <SlidePhone src='/phone screen/shot5.webp'/>
                </SwiperSlide>

                 <SwiperSlide className='flex justify-center items-center'>
                    <SlidePhone src='/phone screen/shot6.webp'/>
                </SwiperSlide>

                 <SwiperSlide className='flex justify-center items-center'>
                    <SlidePhone src='/phone screen/shot7.webp'/>
                </SwiperSlide>

                 <SwiperSlide className='flex justify-center items-center'>
                    <SlidePhone src='/phone screen/shot8.webp'/>
                </SwiperSlide>

                 <SwiperSlide className='flex justify-center items-center'>
                    <SlidePhone src='/phone screen/shot9.webp'/>
                </SwiperSlide>

                 <SwiperSlide className='flex justify-center items-center'>
                    <SlidePhone src='/phone screen/shot10.webp'/>
                </SwiperSlide>

                
            </Swiper>

        </div>
    </div>
  )
}
