import type { UniqueEntityID } from '../../core/entity/unique-entity-id.js'
import type { Slug } from './value-objects/slug.js'

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
