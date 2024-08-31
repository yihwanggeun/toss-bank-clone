// app/deposit/layout.tsx
'use client'

import styled from '@emotion/styled'
import { TopBar } from "@/components/common/TopBar"
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { MainContainer } from '@/components/common/MainContainer'





export default function DepositLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  const navItems = [
    { title: '통장', href: '/deposit/savings' },
    { title: '내 토스뱅크', href: '/deposit/mybank' },
    { title: '상품 찾기', href: '/deposit/others' },
  ]

  return (
    <div>
    <TopBar title="수신(예금)" navItems={navItems} />
    <MainContainer>
        {children}
    </MainContainer>
    </div>
  )
}
