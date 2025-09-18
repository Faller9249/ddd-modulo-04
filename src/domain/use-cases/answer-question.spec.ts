import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question.js'
import type { AnswerRepositories } from '../repositories/answer-repositories.js'
import type { Answer } from '../entities/answer.js'

const fakeAnswerRepository: AnswerRepositories = {
  create: async (answer: Answer) => {},
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository)

  const answer = await answerQuestion.execute({
    questionId: '1',
    instructorId: '2',
    content: 'Nova resposta',
  })

  expect(answer.id).toEqual('Nova resposta')
})
