import { db } from "@/lib/db";

import { NextResponse } from "next/server";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const urlArray = req.url.split("/product/");
    const filtersArray = urlArray[1].split("-");

    const filter = filtersArray[0];
    const value = filtersArray[1];

    let users;
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
        users = await db.product.findMany({});
        break;
    }

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
