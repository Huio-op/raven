import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const handler = async (req, res) => {
    if (req.method === 'GET') {
      const result = await prisma.user.findMany();
      return res.status(200).json(result);
    }
  };

export default handler;