// components/AccountCard.tsx
import { Card } from './Card'
import { CardImage, CardColumn, CardTopText, CardButton, CardBottomText, PlusText } from './CardContents'
import { RowContainer } from './RowContainer'

interface AccountPlusProps {
  plusTitle: string
  imageUrl: string
  onClick?: () => void;
}

export const AccountPlusRow = ({ plusTitle, imageUrl }: AccountPlusProps) => (
    <RowContainer>
        <CardImage src={imageUrl} alt={"plus"} />
        <PlusText>{plusTitle}</PlusText>
        
    </RowContainer>
)