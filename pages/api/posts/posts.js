import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const handler = async (req, res) => {
    if (req.method === 'GET') {
      const posts = await prisma.post.findMany();
      return res.status(200).json({posts});
    } else if (req.method === 'POST') {
        const { text, published, attachments, userProfileId } = req.body;
        const postResult = await prisma.post.create({
            data: {
                text,
                published,
                attachments,
                userProfileId
            }
        })
        res.json(postResult);

    }
    res.end();
  };

export default handler;