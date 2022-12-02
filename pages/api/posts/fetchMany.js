import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const handler = async (req, res) => {

    const {userId, groupId} = req.body;

    if (req.method === 'POST') {

        let posts;
        if (!!groupId) {
            posts = await prisma.post.findMany({
                where: {
                    userProfile: {owner: {id: userId}},
                    groupId: {groupId}
                },
                include: {
                    userProfile: true
                },
                orderBy: {
                    id: 'desc'
                }
            })
        } else {
            posts = await prisma.post.findMany({
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
        }
        res.json(posts);
    }

    res.end();
};

export default handler;