import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const result = await prisma.user.findMany();
        return res.status(200).json(result);
    } else {
        console.error('UNSUPORTED OPERATION');
    }
};

export default handler;