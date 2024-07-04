import React, { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'

import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

const FeedbackForm = () => {
  const { addFeedback, feedbackEdit, updateFeedback, setFeedbackEdit } =
    useContext(FeedbackContext)

  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleTextChange = (e) => {
    if (text === '' && text.trim().length === 0) {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }

    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
        setFeedbackEdit({
          item: {},
          edit: false,
        })
      } else {
        addFeedback(newFeedback)
      }

      setText('')
      setBtnDisabled(true)
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            onChange={handleTextChange}
            placeholder='Enter your review'
            value={text}
            id='text-input'
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {text && message && (
          <div className='message' style={{ color: 'red', fontWeight: '600' }}>
            {message}
          </div>
        )}
      </form>
    </Card>
  )
}

export default FeedbackForm
