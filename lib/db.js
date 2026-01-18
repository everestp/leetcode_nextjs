import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
  url: process.env.DATABASE_URL 
})


const db = new PrismaClient({adapter: adapter});

export default db;