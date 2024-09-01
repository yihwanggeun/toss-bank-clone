import styled from '@emotion/styled'
import { ProductItem } from './ProductItem';

export const CategoryContainer = styled.div`
  margin-bottom: 20px;
  background-color: bisque;
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.small};
`;

export const CategoryTitle = styled.span`
  font-size: ${props => props.theme.typography.fontSize.large};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.primary};
`;

// export const ProductCategory: React.FC<ProductCategoryProps> = ({ title, items }) => (
// <CategoryContainer>
//     <CategoryHeader>
//       <CategoryTitle>{title}</CategoryTitle>
//     </CategoryHeader>    {items.map((item, index) => (
//     <ProductItem key={index} {...item} />
//     ))}
// </CategoryContainer>
// );