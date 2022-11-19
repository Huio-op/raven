import prisma from '../../lib/prisma';
import MD5 from "crypto-js/md5";

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const md5Password = MD5(password).toString();

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user && user.password === md5Password) {
      res.status(200).json(user);
    } else {
      res.status(401);
    }
    res.end();
  }
};

export default handler;
