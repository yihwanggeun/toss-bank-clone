// components/BankCard.tsx
import { Card } from './Card'
import { CardTitle, CardRightIcon } from './CardContents'
import { RowContainer } from './RowContainer'
interface TossBankCardProps {
  bankName: string
}

export const TossBankCard = ({ bankName }: TossBankCardProps) => (
    <RowContainer>
      <CardTitle>{bankName}</CardTitle>
      <CardRightIcon>{'>'}</CardRightIcon>
    </RowContainer>
    )