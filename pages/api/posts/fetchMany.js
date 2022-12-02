import prisma from '../../../lib/prisma';

const handler = async (req, res) => {

    const {userId, groupId, profile} = req.body;

    if (req.method === 'POST') {

        let posts;
        if (!!groupId) {
            posts = await prisma.post.findMany({
                where: {
                    userProfile: {owner: {id: parseInt(userId)}},
                    groupId: parseInt(groupId)
                },
                include: {
                    userProfile: true,
                },
                orderBy: {
                    id: 'desc'
                }
            })
        } else {

            let ids = [];

            if (!profile) {
                const user = await prisma.user.findUnique({
                    where: {
                        id: parseInt(userId),
                    },
                    include: {
                        followerFrom: true,
                        followingWho: {
                            include: {
                                owner:true
                            }
                        },
                    },
                });


                ids = user.followingWho.map(follow => follow.owner.id)
            }

            ids.push(parseInt(userId));

            posts = await prisma.post.findMany({
                where: {
                    userProfile: {owner: {id: {in: ids}}},
                },
                include: {
                    userProfile: true
                },
                orderBy: {
                    id: 'desc'
                }
            })
        }
        res.json(posts);
    }

    res.end();
};

export default handler;