import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const handler = async (req, res) => {

    const {userId} = req.body;

    if (req.method === 'POST') {
        console.log('vevnevneve', userId)
        const posts = await prisma.post.findMany({
            where: {
                userProfile: {owner: {id: userId}},
            },
            include: {
                userProfile: true
            },
            orderBy: {
              id: 'desc'
            }
        })
        console.log('popopopopop', posts)
        res.json(posts);
    }

    res.end();
};

export default handler;