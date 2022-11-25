import prisma from '../../lib/prisma';
import MD5 from 'crypto-js/md5';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const { email } = req.query;
    const user = await prisma.user.findUnique({
      where: {
        email: decodeURIComponent(email),
      },
    });

    const profile = await prisma.userProfile.findMany({
      where: {
        owner: {
          id: user.id,
        },
      },
    });

    if (user) {
      delete user.password;
      res.status(200).json({ user, profile });
    }
  }

  res.end();
};

export default handler;
