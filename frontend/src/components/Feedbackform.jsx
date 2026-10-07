import React, { useEffect, useRef, useState } from 'react';


const feedback = () => {
  const [satisfied, setSatisfied] = useState(null);
  const [fedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState('false');

  const handleSubmit = (e) => {
    e.prevent.default();
    if (satisfied === null) return;

    console.log({ satisfied, feedback })
    setSubmitted(true);

    if (submitted) {
      return (
        <div style={{ padding: '20x', textAlign: 'center' }}
        >
          <h3> Thank You!</h3>
          <p>We appreciate your feedback.</p>

        </div>
      )
    }



  }



  return (
    <form onSubmit={handleSubmit}>
      <h3>Are you satisfied with the AQI Prediction </h3>

      <div>
        <button
          type='button'
          onClick={() => setSatisfied(true)}
        > Yes, Satisfied !</button>

        <button
          type='button'
          onClick={() => setSatisfied(fasle)}
          className='rounded-xl text-sm text-blue'
        > Not, Satisfied !</button>


      </div>

      {satisfied !== null && (
        <div style={styles.feedbackSection}>
          <label htmlFor='feedback'>
            {satisfied ? 'please tell us what you liked  ' : 'Suggest the improvement'}
            <textarea
              id='feedback'
              rows='4'
              value={feedback}
              onChange={(e) => {
                setFeedback(e.target.value)
                className = 'text-xl bg-white '
              }}
            />
            <button type='submit'>Submit feeback</button>
          </label>
        </div>
      )}
    </form>
  )


}