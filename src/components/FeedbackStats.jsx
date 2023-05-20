import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)
  // Calc avrage rating
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feedback.length

  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className="feed-stats">
      <p>{feedback.length} Reviews</p>
      <p>average Rating: {isNaN(average) ? 0 : average}</p>
    </div>
  )
}

export default FeedbackStats
