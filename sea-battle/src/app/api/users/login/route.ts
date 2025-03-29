import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: any) {
  const {name, password} = await request.json();

  try{
    const user = await prisma.user.findFirst({
      where: { name, password }
    });

    if(user){
      return new Response(JSON.stringify(user?.name), { status: 200 });
    }else{
      return new Response(JSON.stringify({ error: "Password or name are wrong", }), { status: 400 });
    }
  }catch(err){
    return new Response(JSON.stringify({ error: "Somethng went wrong" }),
    {status: 500})
  }
}