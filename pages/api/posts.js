import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const handler = async (req, res) => {
    if (req.method === 'GET') {
      const posts = await prisma.post.findMany();
      return res.status(200).json({posts});
    }
    res.end();
  };

export default handler;