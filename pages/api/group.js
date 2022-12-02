import prisma from '../../lib/prisma';

const handler = async (req, res) => {
    if (req.method === 'GET') {
        const { groupId } = req.query;
        const group = await prisma.group.findUnique({
            where: {
                id: parseInt(groupId),
            },
            include: {
                members: true,
                owner : true
            },
        });

        res.status(200).json({ group });
    }

    res.end();
};

export default handler;
