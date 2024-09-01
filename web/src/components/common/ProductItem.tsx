// ProductItem Component
import styled from '@emotion/styled'
import Link from 'next/link';
interface ProductItemProps {
    id: number;
    image: string;
    text: string;
    blueText: string;
}
  
export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  padding: ${props => props.theme.spacing.small} 0;
  border-bottom: 1px solid #eee;
`;

export const ItemImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: ${props => props.theme.spacing.medium};
`;

export const ItemText = styled.span`
  color : ${props => props.theme.colors.black};
  font-size: ${props => props.theme.typography.fontSize.medium};
  font-weight: 500;
  flex-grow: 1;
`;

export const BlueText = styled.span`
  color : ${props => props.theme.colors.black};
  font-size: ${props => props.theme.typography.fontSize.small};
  font-weight: 500;
  color: blue;
`;

export const ProductItem: React.FC<ProductItemProps> = ({ id, image, text, blueText}) => (
    <Link href={`/loan/${id}`} passHref>
      <ItemContainer>
        <ItemImage src={image} alt={text} />
        <ItemText>{text}</ItemText>
        <BlueText>{blueText}</BlueText>
      </ItemContainer>
    </Link>

  );