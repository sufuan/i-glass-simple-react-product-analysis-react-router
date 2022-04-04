import { useEffect, useState } from "react"

const useReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('testimonials.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return [reviews, setReviews]
}

export default useReview