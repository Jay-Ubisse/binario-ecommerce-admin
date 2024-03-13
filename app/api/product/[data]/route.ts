import { NextResponse } from "next/server";

export const GET = async (req: Request, res: NextResponse) => {
  const data = [
    {
      id: 1,
      name: "product",
      price: 10,
      description: "heyyy",
      image: "/image.jpg",
      category: "cat",
      quantityInStock: 10,
      quantitySold: 0,
      createdAt: "20/20/2000",
      updatedAt: "10/20/2000",
    },
    {
      id: 2,
      name: "productxxx",
      price: 10,
      description: "hddd",
      image: "/imagess.jpg",
      category: "cataaa",
      quantityInStock: 20,
      quantitySold: 0,
      createdAt: "20/10/2000",
      updatedAt: "10/2/2000",
    },
  ];
  return data;
  /*
  try {
    const id = req.url.split("/blog/")[1];
    const post = await db.product.findFirst({ where: { id: id } });

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
  */
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
