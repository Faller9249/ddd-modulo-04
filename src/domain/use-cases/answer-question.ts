import { Answer } from "../entities/answer.js"
import type { AnswerRepositories } from "../repositories/answer-repositories.js"

interface AnswerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}

export class AnswerQuestionUseCase {

  constructor(
    private answerRepository: AnswerRepositories
  ){}

  async execute({ instructorId, questionId, content }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({
      content, 
      authorId: instructorId, 
      questionId
    })

    await this.answerRepository.create(answer)

    return answer
  }
}