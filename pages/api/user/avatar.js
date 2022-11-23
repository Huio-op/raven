import prisma from '../../../lib/prisma';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const { userId } = req.body;
    console.log('aququqiuiq', req.body);

    const result = await prisma.user.findUnique({
      where: {
        userId,
      },
    });
    console.log('aququqiuiq', result);
    return res.status(200).json(result);
  }

  res.end();
};

export default handler;
