import React from 'react'

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import SwiperCore,{ Autoplay,FreeMode,Navigation, Pagination}  from 'swiper'

import Course_Card from './Course_Card'

SwiperCore.use([Autoplay, FreeMode, Navigation, Pagination]);

const CourseSlider = ({Courses}) => {
  return (
    <>
      {Courses?.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          freeMode={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 1, 
            },
          }}
          modules={[FreeMode, Pagination]}
          className="max-h-[30rem]"
        >
          {Courses?.map((course, i) => (
              <SwiperSlide key={i}>
              <Course_Card course={course} Height={"h-[250px]"} />
              </SwiperSlide>
         ))}

        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </>
  )
}

export default CourseSlider
