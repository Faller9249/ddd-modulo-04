import type { UniqueEntityID } from '@/core/entity/unique-entity-id.js'
import type { Slug } from '../modules/forum/enterprise/entities/value-objects/slug.js'
import type { Question } from '../modules/forum/enterprise/entities/question.js'
import type { Answer } from '../modules/forum/enterprise/entities/answer.js'

export interface StudentProps {
  name: string
}

export interface InstructorProps {
  name: string
}

export interface QuestionProps {
  authorId: UniqueEntityID
  bestAnswerId?: UniqueEntityID
  title: string
  content: string
  slug: Slug
  createdAt: Date
  updatedAt?: Date
}

export interface AnswerProps {
  authorId: UniqueEntityID
  questionId: UniqueEntityID
  content: string
  createdAt: Date
  updatedAt?: Date
}

export interface CreateQuestionUseCaseRequest {
  authorId: string
  title: string
  content: string
}
export interface AnswerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}

export interface AnswerQuestionUseCaseResponse {
  answer: Answer
}

export interface CreateQuestionUseCaseResponse {
  question: Question
}

export interface GetQuestionBySlugUseCaseRequest {
  slug: string
}

export interface GetQuestionBySlugUseCaseResponse {
  question: Question
}

export interface FetchRecentQuestionsUseCaseRequest {
  questionId: string
  page: number
}

export interface FetchRecentQuestionsUseCaseResponse {
  questions: Question[]
}

export interface FetchQuestionAnswersUseCaseRequest {
  questionId: string
  page: number
}

export interface FetchQuestionAnswersUseCaseResponse {
  answers: Answer[]
}

export interface EditAnswerUseCaseRequest {
  authorId: string
  answerId: string
  content: string
}

export interface EditQuestionUseCaseRequest {
  authorId: string
  questionId: string
  title: string
  content: string
}

export interface EditQuestionUseCaseResponse {
  question: Question
}

export interface EditAnswerUseCaseResponse {
  answer: Answer
}

export interface DeleteAnswerUseCaseRequest {
  authorId: string
  answerId: string
}

export interface DeleteAnswerUseCaseResponse {}

export interface DeleteQuestionUseCaseRequest {
  authorId: string
  questionId: string
}

export interface DeleteQuestionUseCaseResponse {}

export interface ChooseQuestionBestAnswerUseCaseRequest {
  authorId: string
  answerId: string
}

export interface ChooseQuestionBestAnswerUseCaseResponse {
  question: Question
}
