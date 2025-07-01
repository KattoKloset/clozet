import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc'
import { addUserSchema } from './user.schema'

export const userRouter = createTRPCRouter({
  add: protectedProcedure
    .input(addUserSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.create({
        data: input,
      })
    }),
})
