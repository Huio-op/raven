import prisma from '../../lib/prisma';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    console.log('rererererere', user, password);

    if (user && user.password === password) {
      res.status(200).json(user);
    } else {
      res.status(401);
    }
    res.end();
  }
};

export default handler;
