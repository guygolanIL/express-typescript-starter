import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const resolvers = {
  users: async () => {
    const users = await prisma.user.findMany();
    console.log(users);
    return users;
  },
  user: async ({ id }: { id: number }) => {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    console.log(user);

    return user;
  },
};
