import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Handmade Basket",
        description: "Beautifully woven basket made with natural materials.",
        price: 25.5,
        imageUrl: "/images/basket.jpg",
      },
      {
        name: "Clay Pot",
        description: "Eco-friendly clay pot for indoor plants.",
        price: 15.0,
        imageUrl: "/images/claypot.jpg",
      },
    ],
  });
}

main()
  .then(() => console.log("Seeded successfully!"))
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
