"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { headers } from "next/headers";

export const getCoinsAction = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) return null;
  const userId = session?.user?.id;
  const response = await prisma.user.findUniqueOrThrow({
    where: { id: userId },
    select: { credits: true },
  });
  return response.credits;
};
