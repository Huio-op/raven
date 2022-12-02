import prisma from '../../lib/prisma';
import MD5 from 'crypto-js/md5';

const handler = async (req, res) => {
    if (req.method === 'POST') {

        const {userId, followId} = req.body;

        const user = await prisma.user.findUnique({
            where: {id: userId},
            include: {followingWho: true}
        })

        const profile = await prisma.user.update({
            where: {id: parseInt(userId)},
            data: { followingWho: {connect: [{id: parseInt(followId)}]}}
        })

    }

    res.end();
};

export default handler;
