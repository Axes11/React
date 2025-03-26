// app/api/users/route.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.user.findMany();
  return new Response(JSON.stringify(users), { status: 200 });
}

export async function POST(request) {
  const { name, email } = await request.json();
  const user = await prisma.user.create({
    data: { name, email },
  });
  return new Response(JSON.stringify(user), { status: 201 });
}
