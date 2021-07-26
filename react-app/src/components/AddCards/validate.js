

const validate = values => {
    const errors = {}
    if (!values.deckTitle) {
      errors.deckTitle = 'Required'
    }
    if (!values.cards || !values.cards.length) {
      errors.cards = { _error: 'At least one card must be entered' }
    } else {
      const cardsArrayErrors = []
      values.cards.forEach((card, cardIndex) => {
        const cardErrors = {}
        if (!card || !card.question) {
          cardErrors.question = 'Required'
          cardsArrayErrors[cardIndex] = cardErrors
        }
        if (!card || !card.answer) {
          cardErrors.answer = 'Required'
          cardsArrayErrors[cardIndex] = cardErrors
        }
      })
    }
    return errors
  }
  
  export default validate