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

export const getUserDataAction = async (id: string) => {
  try {
    if (!id) throw new Error("Please provide the user ID");
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return {
      success: true,
      data: user,
      message: "User retrieved successfully",
    };
  } catch (err) {
    console.error(err);
    return { success: false, message: "Unknown error found!" };
  }
};

export const updateNameAction = async (id: string, name?: string) => {
  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: name,
      },
    });
    return {
      success: true,
      message: "Name updated successfully",
      data: updatedUser,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: "Could not update name, unknown reasons",
    };
  }
};
export const updateEmailAction = async (id: string, email?: string) => {
  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        email: email,
      },
    });
    return {
      success: true,
      message: "Email updated successfully",
      data: updatedUser,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: "Could not update email, unknown reasons",
    };
  }
};
