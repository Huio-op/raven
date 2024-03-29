import prisma from '../../lib/prisma';
import MD5 from 'crypto-js/md5';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const { email } = req.query;
    const result = await prisma.user.findUnique({
      where: {
        email: decodeURIComponent(email),
      },
    });

    if (result) {
      delete result.password;
      res.status(200).json(result);
    }
  } else if (req.method === 'POST') {
    const { email, password, name } = req.body;

    const md5Password = MD5(password).toString();

    const userProfileResult = await prisma.userProfile.create({
      data: {
        name: name,
      },
    });

    const result = await prisma.user.create({
      data: {
        email,
        password: md5Password,
        userProfileId: userProfileResult.id,
      },
    });

    res.json(result);
  }

  res.end();
};

export default handler;
