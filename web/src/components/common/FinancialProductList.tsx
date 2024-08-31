// FinancialProductList Component

import { ProductCategory } from "./ProductCategory";

interface ProductItemProps {
    image: string;
    text: string;
    blueText: string;
}
interface ProductCategoryProps {
    title: string;
    items: ProductItemProps[];
}

interface FinancialProductListProps {
    categories: ProductCategoryProps[];
  }
  
  const FinancialProductList: React.FC<FinancialProductListProps> = ({ categories }) => (
    <div>
      {categories.map((category, index) => (
        <ProductCategory key={index} {...category} />
      ))}
    </div>
  );
  
  export default FinancialProductList;