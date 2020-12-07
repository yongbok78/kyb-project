import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // await prisma.post.deleteMany({});
  // await prisma.user.deleteMany({});
  for (let i = 1; i <= 100; i++) {
    await prisma.user.create({ data: createUser(i) });
  }
}

function createUser(i: number) {
  let pad = ('' + i).padStart(3, '0');
  let user = {
    email: `user${pad}@test.com`,
    name: '사용자' + pad,
    posts: {
      create: createPosts(pad),
    },
  };
  return user;
}

function createPosts(pad: string) {
  let posts = [];
  let pad2 = '';
  for (let k = 1; k <= 10; k++) {
    pad2 = ('' + k).padStart(3, '0');
    posts.push({
      title: `제목${pad}-${pad2}`,
      content: `내용${pad}-${pad2}`,
      published: parseInt('' + Math.random() * 2) === 0,
    });
  }
  return posts;
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
