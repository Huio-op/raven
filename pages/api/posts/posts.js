import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const handler = async (req, res) => {
    if (req.method === 'GET') {
      const posts = await prisma.post.findMany();
      return res.status(200).json({posts});
    } else if (req.method === 'POST') {
        const { text, published, attachments, userProfileId, groupId = null } = req.body;
        const postResult = await prisma.post.create({
            data: {
                text,
                published,
                attachments,
                userProfile: {connect: {id: userProfileId}},
                groupId: !!groupId ? parseInt(groupId) : null
            }
        })
        res.json(postResult);

    }
    res.end();
  };

export default handler;