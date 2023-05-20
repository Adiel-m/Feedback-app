import { useContext } from 'react'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card>
      <button className="btn-close" onClick={() => deleteFeedback(item.id)}>
        &#128473;
      </button>
      <button className="btn-edit" onClick={() => editFeedback(item)}>
        &#9998;
      </button>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem
