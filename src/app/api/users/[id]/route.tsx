import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

interface IParams {
  params: {
    id: string;
  };
}

// export function GET(request: NextRequest, { params }: IParams) {
//   if (params.id > 10) {
//     return NextResponse.json({ error: "User not found" }, { status: 404 });
//   } else {
//     return NextResponse.json({ id: 1, name: "Mosh" });
//   }
// }

export async function GET(request: NextRequest, { params }: IParams) {
  const users = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!users) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  } else {
    return NextResponse.json(users);
  }
}

// 修改用户
// export async function PUT(request: NextRequest, { params }: IParams) {
//   const body = await request.json();
//   const validation = schema.safeParse(body);
//   //   if (!body.name) {
//   //     return NextResponse.json({ error: "Name is required" }, { status: 400 });
//   //   }
//   if (!validation.success) {
//     return NextResponse.json(validation.error.errors, { status: 400 });
//   }
//   if (parseInt(params.id) > 10) {
//     return NextResponse.json({ error: "User not found" }, { status: 404 });
//   }
//   return NextResponse.json({ id: 1, name: body.name });
// }

export async function PUT(request: NextRequest, { params }: IParams) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  const user: any = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  console.log(user);
  const updateUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(updateUser);
}

// 删除用户
// export function DELETE(requst: NextRequest, { params }: IParams) {
//   if (parseInt(params.id) > 10) {
//     return NextResponse.json({ error: "User not found" }, { status: 404 });
//   } else {
//     return NextResponse.json({});
//   }
// }

export async function DELETE(requst: NextRequest, { params }: IParams) {
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  } else {
    await prisma.user.delete({
      where: {
        id: user.id,
      },
    });
    return NextResponse.json({});
  }
}
