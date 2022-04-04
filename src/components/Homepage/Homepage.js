import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HomePageReview from '../HomepageReview/HomePageReview'
import useReview from '../hooks/useReview'

const Homepage = () => {

  const [reviews, setReviews] = useReview()
  // const [showMore, setShowMore] = useState(false)

  console.log(reviews);

  return (
    <div>

      <section className="text-gray-600 body-font  h-screen">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className='text-gray-600'>i 550-wireless</p>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">The future of eye tracking. Understand natural visual attention
            </h1>
            <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>

            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img src="https://templates.envytheme.com/busan/default/assets/img/eye-glass-image/1.png" alt="heroImg" />
          </div>
        </div>
      </section>
      <h1 className='text-3xl text-center mb-10'>User Ratings Are A Confirmation <br />
Of Our Quality.</h1>
      <div className="container  mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {reviews?.slice(0, 3).map(review => <HomePageReview
          review={review}
          key={review.id}
        ></HomePageReview>)}


        <Link className='flex sm:inline-flex justify-center items-center bg-gradient-to-tr from-indigo-500 to-purple-400 hover:from-indigo-600 hover:to-purple-500 active:from-indigo-700 active:to-purple-600 focus-visible:ring ring-indigo-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2 content-center' to='/review'>See More Review</Link>


      </div>



    </div>

  )

}

export default Homepage
