<h1> Raven </h1>

Raven is a social plataform for people all around the world gather together and have a great time

<h2> Features </h2>

- Make your profile as pretty as possible with our high customizable system
- Gather all your friends together in a *club*
- Make public posts so everyone can see your light

<h2> How to develop Raven </h2>

- Run `git clone https://github.com/Huio-op/raven.git`
- Inside the generated directory, run `npm i`
- Then, create a file in root directory called `.env`
- Inside `.env`, insert this line with your own user, password and database name: `DATABASE_URL=postgresql://user:password@localhost:5432/database`
- Then, in root directory, run `npx prisma migrate dev` and finally `npx prisma generate`
- You should now be able to run the application with `npm run dev`

<h2> Prisma specs </h2>

- To generate a new migration, edit `prisma/schema.prisma` and then run `npx prisma migrate dev`
- For the name, prisma automatically insert an initial unique number, so just describe what your migration do in CLI