import prisma from '../../lib/prisma';

const handler = async (req, res) => {
    if (req.method === 'GET') {
        const { userId } = req.query;
        const groups = await prisma.group.findMany({
            where: {
                owner: {id: parseInt(userId)},
            },
            include: {
                members: true
            },
        });

        res.status(200).json({ groups });
    } else if (req.method === 'POST') {

        const {userId, name} = req.body;

        const user = await prisma.user.findUnique({
            where: {
                id: parseInt(userId),
            },
            include: {
                followerFrom: true,
                followingWho: true,
            },
        });

        delete user.followerFrom;
        delete user.followingWho;

        const group = await prisma.group.create({
            data: { name, ownerId: user.id, members: {connect: [{id: user.id}]} }
        })

        res.status(200).json({ group });
    } else if (req.method === 'DELETE') {

        const {groupId} = req.body;

        await prisma.group.delete({
            where: {
                id: parseInt(groupId),
            },
        });
    }

    res.end();
};

export default handler;
