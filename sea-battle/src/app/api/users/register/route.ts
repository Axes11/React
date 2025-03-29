import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: any) {
      const { name, email, password } = await request.json();
    
      try {
        const existingUser = await prisma.user.findUnique({
          where: { email },
        });
    
        if (existingUser) {
          return new Response(
            JSON.stringify({ error: "User with this email already exists" }),
            { status: 400 }
          );
        }
    
        const user = await prisma.user.create({
          data: {
            name,
            email,
            password,
          },
        });
    
        return new Response(JSON.stringify(user), { status: 201 });
      } catch (err) {
        console.error(err);
        return new Response(
          JSON.stringify({ error: "Failed to create user" }),
          { status: 500 }
        );
      }
    }