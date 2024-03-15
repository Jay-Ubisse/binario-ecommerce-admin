import { db } from "@/lib/db";

import { NextResponse } from "next/server";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const urlArray = req.url.split("/product/");
    const filtersArray = urlArray[1].split("-");

    const filter = filtersArray[0];
    const value = filtersArray[1];
    console.log(filter);

    let products;
    switch (filter) {
      case "all":
        products = await db.product.findMany({});
        break;
      case "id":
        products = await db.product.findMany({
          where: {
            id: Number(value),
          },
        });
        break;
      case "name":
        products = await db.product.findMany({
          where: {
            name: value,
          },
        });
        break;
      case "category":
        products = await db.product.findMany({
          where: {
            category: value,
          },
        });
        break;
      default:
        products = await db.product.findMany({});
        break;
    }

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

/* 
export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("/blog/")[1];
    const { title, description } = await req.json();
    const post = await db.product.update({
      data: { title, description },
      where: { id: id },
    });

    if (!post) {
      return NextResponse.json(
        { message: "Not found.", post },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    const id = req.url.split("/blog/")[1];
    const { title, description } = await req.json();

    const post = await db.product.delete({ where: { id: id } });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
*/
