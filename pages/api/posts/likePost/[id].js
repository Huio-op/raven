import prisma from '../../../../lib/prisma';

const handler = async (req, res) => {
    const { id } = req.query;

    if (req.method === 'GET') {
        const likes = await prisma.post.update({
            where: {
                id: parseInt(id)
            },
            data: {
                likes: {increment: 1}
            }
        })

        res.json(likes);
    }

    res.end();
}

export default handler;