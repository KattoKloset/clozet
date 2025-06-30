import prisma from '~/lib/prisma'
import { authedProcedure } from '../../trpc'
import { addUserSchema } from './user.schema'
import { withPrismaErrorHandler } from '~/utils/withPrismaErrorHandler'

export const UserModel = {
  add: authedProcedure.input(addUserSchema).mutation(
    withPrismaErrorHandler(async ({ input }) => {
      await prisma.user.create({
        data: input,
      })
    }),
  ),
}
