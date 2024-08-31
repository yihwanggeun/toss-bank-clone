// components/CardContent.tsx
import styled from '@emotion/styled'
import { ReactNode } from 'react'

export const CardTitle = styled.span`
  margin: 0;
  font-size: ${props => props.theme.typography.fontSize.large};
  font-weight: 600;
  flex-grow: 1;
`

export const PlusText = styled.span`
  margin: 0;
  margin-left: 8px;
  font-size: ${props => props.theme.typography.fontSize.medium};
  color : ${props => props.theme.colors.gray};
  font-weight: 600;
  flex-grow: 1;
`

export const CardRightIcon = styled.span`
  font-size: ${props => props.theme.typography.fontSize.small};
  color : ${props => props.theme.colors.gray};
`

export const CardImage = styled.img`
  width: 48px;
  height: 48px;
  background-color: ${props => props.theme.colors.imagebackground};
  border-radius: 24px;
  border : none;
  margin-right: ${props => props.theme.spacing.small};
`

export const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: beige;
  flex-grow: 1;
  height: 48px;
  margin-left: 8px;
`

export const CardTopText = styled.p`
  margin: 0;
  color : ${props => props.theme.colors.gray};
  font-weight: 500;
  font-size: ${props => props.theme.typography.fontSize.small};
`

export const CardBottomText = styled.p`
  margin: 0;
  color : ${props => props.theme.colors.black};
  font-size: ${props => props.theme.typography.fontSize.medium};
  font-weight: 600;
`

export const CardButton = styled.button`
  background-color: ${props => props.theme.colors.background};
  color: "black";
  border: none;
  padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.medium};
  border-radius: ${props => props.theme.borderRadius.medium};
  cursor: pointer;
`