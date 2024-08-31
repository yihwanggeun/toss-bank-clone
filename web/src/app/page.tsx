'use client';

import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link';
import { AccountCard } from '@/components/common/AccountCard'
import { TossBankCard } from '@/components/common/TossBankCard';
import { Divider } from '@/components/common/Divider';
import { Card } from '@/components/common/Card';
import { MainContainer } from '@/components/common/MainContainer';

const MoreText = styled.div`
  color: ${props => props.theme.colors.gray};
  font-weight: 600;
  text-align: center;
`
export default function Home() {
  return(
    <MainContainer>
      <Link href="/deposit">
          <Card>
            <TossBankCard bankName="토스뱅크" />
          </Card>
      </Link>
        <Card>
          <AccountCard 
            bankName="토스뱅크 통장" 
            balance="9,000,000,000원" 
            imageUrl="/toss.png" 
          />
          <AccountCard 
            bankName="농협은행 계좌" 
            balance="0원" 
            imageUrl="/kb.png" 
          />
          <AccountCard 
            bankName="우리은행 계좌" 
            balance="0원" 
            imageUrl="/woori.png" 
          />
          <Divider></Divider>
          <Link href="/loan">
            <MoreText>내 계좌 ㆍ 대출 ㆍ 증권 ㆍ 포인트 보기</MoreText>
          </Link>
        </Card>
    </MainContainer>
  )
}
