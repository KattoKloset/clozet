import { UserModel } from '../models'
import { router, authedProcedure } from '../trpc'
import axios from 'axios'

export const appRouter = router({
  healthcheck: authedProcedure.query(async () => {
    const response = await axios.get('http://instagram-scraper:8080/')
    console.log(response.data)
    return response.data
  }),
  user: UserModel,
})

export type AppRouter = typeof appRouter
