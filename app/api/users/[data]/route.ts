import { db } from "@/lib/db";

import { NextResponse } from "next/server";

interface UsersProps {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const urlArray = req.url.split("/users/");
    const filtersArray = urlArray[1].split("-");

    const filter = filtersArray[0];
    const value = filtersArray[1];

    let users: UsersProps[];
    switch (filter) {
      case "all":
        users = await db.user.findMany({});
        break;
      case "id":
        users = await db.user.findMany({
          where: {
            id: value,
          },
        });
        break;
      case "firstName":
        users = await db.user.findMany({
          where: {
            firstName: value,
          },
        });
        break;
      case "lastName":
        users = await db.user.findMany({
          where: {
            lastName: value,
          },
        });
        break;
      default:
        users = await db.user.findMany({});
        break;
    }

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
