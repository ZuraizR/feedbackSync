import { v4 as uuidv4 } from 'uuid'
import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  // Func to Fetch Feedback from db.json file
  const fetchFeedback = async () => {
    const response = await fetch(`/api/feedback?_sort=id&_order=desc`)
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }

  // Delete Feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you wanna delete?')) {
      await fetch(`/api/feedback/${id}`, { method: 'DELETE' })

      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // Add Feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json()

    // newFeedback.id = uuidv4()
    // setFeedback([newFeedback, ...feedback])
    setFeedback([data, ...feedback])
  }

  // Edit existing feedback item
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })

    document.querySelector('#text-input').focus()
  }

  // update edited feedback item
  const updateFeedback = async (id, updtItem) => {
    const response = await fetch(`/api/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updtItem),
    })

    const data = await response.json()

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    )
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        setFeedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
