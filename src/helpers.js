import axios from 'axios'

const questionsUrl = 'http://server-ip'

export const fetchQuestions = difficulty => axios.get(questionsUrl, {
  params: {
    difficulty
  }
})
.then(({ data: { results = [] } }) => results.map(({
  category,
  question,
  correct_answer,
  incorrect_answers
}) => ({
  category,
  question,
  correctAnswer: correct_answer,
  incorrectAnswers: incorrect_answers
})))
