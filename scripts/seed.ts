const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: 'Celebrities' },
        { name: 'Movies & TV' },
        { name: 'Music' },
        { name: 'Art' },
        { name: 'Business' },
        { name: 'Philosophy' },
        { name: 'Science' },
        { name: 'Sport' },
      ],
    });
  } catch (error) {
    console.error('Error seeding default categories', error);
  } finally {
    await db.$disconnect();
  }
}

main();
