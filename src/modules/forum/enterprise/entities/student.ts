import { Entity } from '@/core/entity/entity.js'
import type { UniqueEntityID } from '@/core/entity/unique-entity-id.js'

import type { StudentProps } from './@entities.model.js'

export class Student extends Entity<StudentProps> {
  static create(props: StudentProps, id?: UniqueEntityID) {
    const student = new Student(props, id)

    return student
  }
}
