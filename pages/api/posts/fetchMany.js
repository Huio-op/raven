import prisma from '../../../lib/prisma';

const handler = async (req, res) => {

    const {userId, groupId} = req.body;

    if (req.method === 'POST') {

        let posts;
        if (!!groupId) {
            posts = await prisma.post.findMany({
                where: {
                    userProfile: {owner: {id: parseInt(userId)}},
                    groupId: parseInt(groupId)
                },
                include: {
                    userProfile: true,
                },
                orderBy: {
                    id: 'desc'
                }
            })
        } else {
            posts = await prisma.post.findMany({
                where: {
                    userProfile: {owner: {id: parseInt(userId)}},
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