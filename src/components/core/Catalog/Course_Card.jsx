import React, { useEffect, useState } from 'react'
import RatingStars from '../../common/RatingStars'
import GetAvgRating from '../../../utils/avgRating';
import { Link } from 'react-router-dom';

const Course_Card = ({course, Height}) => {


    const [avgReviewCount, setAvgReviewCount] = useState(0);

    useEffect(()=> {
        const count = GetAvgRating(course.ratingAndReviews);
        setAvgReviewCount(count);
    },[course])

    
  return (
    <>
      <Link to={`/courses/${course._id}`}
        className='w-[300px] h-[330px] flex flex-col justify-between '
      >
        {/* <div className="w-[300px]"> */}
        {/* <div className=""> */}
          <div className="rounded-lg">
            <img
              src={course?.thumbnail}
              alt="course thumnail"
              // className={`${Height} w-full rounded-xl object-cover `}
              className={` w-full rounded-xl  `}
            />
          </div>
          <div className="flex flex-col gap-2 px-1 py-3">
            <p className="text-xl text-richblack-5">{course?.courseName}</p>
            <p className="text-sm text-richblack-50">
              {course?.instructor?.firstName} {course?.instructor?.lastName}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-yellow-5">{avgReviewCount || 0}</span>
              <RatingStars Review_Count={avgReviewCount} />
              <span className="text-richblack-400">
                {course?.ratingAndReviews?.length} Ratings
              </span>
            </div>
            <p className="text-xl text-richblack-5">Rs. {course?.price}</p>
          </div>
        {/* </div> */}
      </Link>

{/*                     
<Link to={`/courses/${course._id}`}>
        <div className="w-[300px]">
          <div className="rounded-lg">
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr4qzdsrQY4Paab1Gk2sQs_df4qwClQ-A4YA&s'
              alt="course thumnail"
              className={` w-full rounded-xl  `}
            />
          </div>
          <div className="flex flex-col gap-2 px-1 py-3">
            <p className="text-xl text-richblack-5">Python Tutorial</p>
            <p className="text-sm text-richblack-50">
              Love Babbar
            </p>
            <div className="flex items-center gap-2">
              <span className="text-yellow-5">0</span>
              <span className="text-richblack-400">
                3 Ratings
              </span>
            </div>
            <p className="text-xl text-richblack-5">Rs. {course?.price}</p>
          </div>
        {/* </div> */}
      </Link>

{/*                     
<Link to={`/courses/${course._id}`}>
        <div className="w-[300px]">
          <div className="rounded-lg">
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr4qzdsrQY4Paab1Gk2sQs_df4qwClQ-A4YA&s'
              alt="course thumnail"
              className={` w-full rounded-xl  `}
            />
          </div>
          <div className="flex flex-col gap-2 px-1 py-3">
            <p className="text-xl text-richblack-5">Python Tutorial</p>
            <p className="text-sm text-richblack-50">
              Love Babbar
            </p>
            <div className="flex items-center gap-2">
              <span className="text-yellow-5">0</span>
              <span className="text-richblack-400">
                3 Ratings
              </span>
            </div>
            <p className="text-xl text-richblack-5">Rs. {course?.price}</p>
          </div>
        </div>
      </Link> */}
      
    </>
  )
}

export default Course_Card
