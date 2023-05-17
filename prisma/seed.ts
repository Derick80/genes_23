import { PrismaClient } from "@prisma/client";
import { criterions } from "./criterion-seed";
const prisma = new PrismaClient();
async function seed() {
  const email = "iderick@gmail.com";

  // cleanup the existing database
  await prisma.user.delete({ where: { email: email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = (await process.env.HASHEDPASSWORD) as string;

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      username: "iderick",
    },
  });

  await prisma.criterion.createMany({
    data: criterions,
  });

  console.log(`Database has been seeded. 🌱`);
}
seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
