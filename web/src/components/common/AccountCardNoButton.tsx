// components/AccountCard.tsx
import { Card } from './Card'
import { CardImage, CardColumn, CardTopText, CardButton, CardBottomText } from './CardContents'
import { RowContainer } from './RowContainer'

interface AccountCardProps {
  bankName: string
  balance: number
  imageUrl: string
}

export const AccountCardNoButton = ({ bankName, balance, imageUrl }: AccountCardProps) => (
    <RowContainer>
        <CardImage src={imageUrl} alt={bankName} />
        <CardColumn>
        <CardTopText>{bankName}</CardTopText>
        <CardBottomText>{balance}</CardBottomText>
        </CardColumn>
    </RowContainer>
)