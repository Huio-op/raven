import prisma from '../../../../lib/prisma';

const handler = async (req, res) => {
    const { id } = req.query;

    if (req.method === 'GET') {
        const post = await prisma.post.findMany({
            where: {
                parentPost: {
                    id: parseInt(id)
                },
            },
            include: {
                userProfile: true
            },
            orderBy: {
                id: 'desc'
            }
        })
        res.json(post);
    }

    res.end();
}

export default handler;