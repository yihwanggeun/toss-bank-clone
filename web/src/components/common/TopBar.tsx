import styled from '@emotion/styled'
import Link from 'next/link'
import React from 'react'
import { theme } from "./../../styles/theme";
import { usePathname } from 'next/navigation'

const TopBarContainer = styled.div`
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  padding: 20px 20px;  // 상하 패딩 추가
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;  // 세로 중앙 정렬
  width: 100%;
`


const NavItem = styled.a<{ isSelected: boolean;}>`
  color: black;  // 글자색을 검정으로 변경
  text-decoration: none;
  font-size: ${theme.typography.fontSize.medium};
  color: ${props => props.isSelected ?  theme.colors.darkgray : theme.colors.gray};

  font-weight: 600;
  position: relative;
  background-color: aliceblue;
  &:hover {
    text-decoration: underline;
  }
`

const Divider = styled.div<{ isVisible: boolean;}>`
  width: 100%;
  background-color: ${theme.colors.primary};
  height: 2px;
  position: absolute;
  bottom: -2px;
  left: 0;
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: opacity 0.3s ease;
`


interface TopBarProps {
  title: string;
  navItems: { title: string; href: string }[];
}

export function TopBar({ title, navItems }: TopBarProps) {
  const pathname = usePathname()
  console.log(pathname);
  return (
    <TopBarContainer>
      <Nav>
        {navItems.map((item) => {
          const isSelected = pathname === item.href
          return (
            <div key={item.href} style={{ position: 'relative' }}>
              <Link href={item.href} passHref legacyBehavior>
                <NavItem isSelected={isSelected}>{item.title}</NavItem>
              </Link>
            </div>
          )
        })}
      </Nav>
    </TopBarContainer>
  )
}