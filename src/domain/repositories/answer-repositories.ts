import type { Answer } from "../entities/answer.js";


export interface AnswerRepositories {
  create(answer: Answer): Promise<void>
}