import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const result = await prisma.userProfile.create({
            data: req.body
        })
    } else {
        console.error('UNSUPPORTED OPERATION');
    }
};

export default handler;