
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
  discount: number;
  weight: string;
  image: string;
  categoryId: number;
  inStock: boolean;
  isPopular?: boolean;
}
