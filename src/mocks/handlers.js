import { rest } from 'msw'
import { mockData } from './data'

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(
      ctx.json(mockData),
    )
  }),
]