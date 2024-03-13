interface ProductsProps {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  updatedAt: string;
  createdAt: string;
  category: string;
  quantityInStock: number;
  quantitySold: number;
}

interface filtersDataProps {
  filter: string;
  value: string;
}
