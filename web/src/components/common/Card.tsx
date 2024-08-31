import styled from '@emotion/styled'
import { ReactNode } from 'react'
import {css, useTheme} from '@emotion/react'
import { ColumnContainer } from './ColumnContainer'

const CardContainer = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px; // 요소들 사이의 간격을 설정합니다.

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`
interface CardProps {
  children: ReactNode
}

export const Card = ({ children }: CardProps) => (
  <CardContainer>{children}</CardContainer>
)