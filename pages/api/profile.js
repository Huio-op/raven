import prisma from '../../lib/prisma';
import MD5 from 'crypto-js/md5';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const { userId } = req.query;
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(userId),
      },
      include: {
        followerFrom: true,
        followingWho: true,
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
  } else if (req.method === 'POST') {

    const {id, name, about, city, birthDate, gender} = req.body;

    const profile = await prisma.userProfile.update({
      where: {id: id},
      data: { name, about, city, birthDate, gender }
    })

  }

  res.end();
};

export default handler;
