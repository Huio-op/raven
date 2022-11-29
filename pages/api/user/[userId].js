import prisma from '../../../lib/prisma';

const handler = async (req, res) => {

    const {userId} = req.query;

    if (req.method === 'GET') {
        const result = await prisma.user.findUnique({
            where: {
                id: Number(userId),
            },
        });
        return res.status(200).json(result);
    }
}

export default handler;