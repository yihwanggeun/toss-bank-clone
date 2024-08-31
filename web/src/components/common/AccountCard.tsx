// components/AccountCard.tsx
import { Card } from './Card'
import { CardImage, CardColumn, CardTopText, CardButton, CardBottomText } from './CardContents'
import { RowContainer } from './RowContainer'

interface AccountCardProps {
  bankName: string
  balance: string
  imageUrl: string
}

export const AccountCard = ({ bankName, balance, imageUrl }: AccountCardProps) => (
    <RowContainer>
        <CardImage src={imageUrl} alt={bankName} />
        <CardColumn>
        <CardTopText>{bankName}</CardTopText>
        <CardBottomText>{balance}</CardBottomText>
        </CardColumn>
        <CardButton>송금</CardButton>
    </RowContainer>
)