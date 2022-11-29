import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const handler = async (req, res) => {

    const {idList} = req.body;

    if (req.method === 'POST') {
        const posts = await prisma.post.findMany({
            where: {
                userProfileId: {in: idList},
            },
            include: {
                userProfile: {

                }
            },
            orderBy: {
              id: 'desc'
            }
        })
        res.json(posts);
    }

    res.end();
};

export default handler;