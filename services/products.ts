import axios from "axios";

export async function getProducts(
  data: filtersDataProps
): Promise<ProductsProps[] | undefined> {
  console.log(data)
  try {
    const response = await axios.get<ProductsProps[]>(
      `/api/products/${data.filter}-${data.value}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
