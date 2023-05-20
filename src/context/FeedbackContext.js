import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 6,
      text: 'Reader will be distracted by the readable content of a page when looking at its layout. The point of using it has a more-or-less normal distribution of letters.',
    },
    {
      id: 2,
      rating: 9,
      text: 'It is a long established fact that a reader will be distracted',
    },
    {
      id: 3,
      rating: 8,
      text: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
    },
    {
      id: 4,
      rating: 10,
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  // update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item)),
    )
  }

  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4
    setFeedback([newFeedback, ...feedback])
  }

  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // Set edit mode
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
