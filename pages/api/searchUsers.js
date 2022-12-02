import prisma from '../../lib/prisma';

const handler = async (req, res) => {
    if (req.method === 'GET') {
        const { search } = req.query;
        const profiles = await prisma.userProfile.findMany({
            where: {
                name: {contains: search},
            },
            include: {
                owner: true
            },
        });
        res.status(200).json({ profiles });
    }
    res.end();
};

export default handler;
