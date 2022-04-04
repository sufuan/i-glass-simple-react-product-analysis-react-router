import React from 'react'
import { Link } from 'react-router-dom'
import HomePageReview from '../HomepageReview/HomePageReview'
import useReview from '../hooks/useReview'

const Homepage = () => {

  const [reviews, setReviews] = useReview()
  // const [showMore, setShowMore] = useState(false)

  console.log(reviews);

  return (
    <div>

      <section className="text-gray-600 body-font  ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className='text-gray-600'>i 550-wireless</p>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">The future of eye tracking. Understand natural visual attention
            </h1>
            <p className="mb-8 leading-relaxed">Our newest product with improved audio and new styles,i-550 combines your headphones, prescription glasses and Alexa voice assistant into one.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Explore Now</button>

            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img src="https://templates.envytheme.com/busan/default/assets/img/eye-glass-image/1.png" alt="heroImg" />
          </div>
        </div>
      </section>
      <h1 className='text-3xl text-center mb-10'>User Ratings Are A Confirmation <br />
        Of Our Quality.</h1>
      <div className="container   mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
        {reviews?.slice(0, 3).map(review => <HomePageReview
          review={review}
          key={review.id}
        ></HomePageReview>)}


      </div>

      <div className="flex items-center justify-center my-6">
        <Link className=' inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg' to='/review'>See More Review</Link>
      </div>



    </div>

  )

}

export default Homepage
