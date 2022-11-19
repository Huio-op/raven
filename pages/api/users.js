import prisma from '../../lib/prisma';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const { email, password } = req.body;

    const result = await prisma.user.findUnique({
      where: {
        email,
        password,
      },
    });
    return res.status(200).json(result);
  } else if (req.method === 'POST') {
    const { email, password, name } = req.body;
    const result = await prisma.user.create({
      data: {
        email,
        password,
      },
    });

    await prisma.userProfile.create({
      data: {
        name: name,
      },
    });

    res.json(result);
  }

  res.end();
};

export default handler;
