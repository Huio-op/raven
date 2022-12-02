import prisma from '../../../lib/prisma';

const handler = async (req, res) => {
    if (req.method === 'GET') {
      const posts = await prisma.post.findMany();
      return res.status(200).json({posts});
    } else if (req.method === 'POST') {
        const { text, published, attachments, userProfileId, groupId = null, parentPostId = null } = req.body;
        let postResult = {};
        if (parentPostId) {
            postResult = await prisma.post.create({
                data: {
                    text,
                    published,
                    attachments,
                    userProfile: {connect: {id: userProfileId}},
                    groupId: !!groupId ? parseInt(groupId) : null,
                    parentPost: {connect: {id: parseInt(parentPostId)}},
                }
            })
        } else {
            postResult = await prisma.post.create({
                data: {
                    text,
                    published,
                    attachments,
                    userProfile: {connect: {id: userProfileId}},
                    groupId: !!groupId ? parseInt(groupId) : null,
                }
            })
        }


        res.json(postResult);

    }
    res.end();
  };

export default handler;