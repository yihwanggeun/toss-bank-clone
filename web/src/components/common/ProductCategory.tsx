import styled from '@emotion/styled'
import { ProductItem } from './ProductItem';

// ProductItem Component
interface ProductItemProps {
    image: string;
    text: string;
    blueText: string;
  }
  
interface ProductCategoryProps {
    title: string;
    items: ProductItemProps[];
  }
  
const CategoryContainer = styled.div`
  margin-bottom: 20px;
  background-color: bisque;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.small};
`;

const CategoryTitle = styled.span`
  font-size: ${props => props.theme.typography.fontSize.large};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.primary};
`;

export const ProductCategory: React.FC<ProductCategoryProps> = ({ title, items }) => (
<CategoryContainer>
    <CategoryHeader>
      <CategoryTitle>{title}</CategoryTitle>
    </CategoryHeader>    {items.map((item, index) => (
    <ProductItem key={index} {...item} />
    ))}
</CategoryContainer>
);