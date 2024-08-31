'use client'

import { Card } from '@/components/common/Card'
import { TossBankCard } from '@/components/common/TossBankCard'
import { AccountCardNoButton } from '@/components/common/AccountCardNoButton'
import { AccountPlusRow } from '@/components/common/AccountPlus'
import Link from 'next/link'
import AddGroupModal from '@/components/modals/AddGroupModal'
import { useState } from 'react'
interface Account {
  bankName: string;
  balance: string;
  imageUrl: string;
}

interface BankCategory {
  categoryName: string;
  accounts: Account[];
  addNewTitle: string;
}

const bankData: BankCategory[] = [
  {
    categoryName: "입출금",
    accounts: [
      {
        bankName: "토스뱅크 통장",
        balance: "9,000,000,000원",
        imageUrl: "/toss.png"
      }
    ],
    addNewTitle: "통장 추가하기"
  },
  {
    categoryName: "Group",
    accounts: [
      {
        bankName: "토스뱅크 통장",
        balance: "9,000,000,000원",
        imageUrl: "/toss.png"
      }
    ],
    addNewTitle: "모임 추가하기"
  },
  {
    categoryName: "예적금",
    accounts: [
      {
        bankName: "토스뱅크 통장",
        balance: "9,000,000,000원",
        imageUrl: "/toss.png"
      }
    ],
    addNewTitle: "예적금 추가하기"
  }
];

export default function MyBankPage() {
  return (
    <div>
      {bankData.map((category, index) => (
        <Card key={index}>
          <TossBankCard bankName={category.categoryName} />
          {category.accounts.map((account, accIndex) => (
            <AccountCardNoButton
              key={accIndex}
              bankName={account.bankName}
              balance={account.balance}
              imageUrl={account.imageUrl}
            />
          ))}
          <Link 
            href={
              category.categoryName === '예적금'
                ? "/deposit/others"
                : `/deposit/${category.categoryName.toLowerCase()}`
            } 
            passHref
          >
            <AccountPlusRow
              plusTitle={category.addNewTitle}
              imageUrl="/plus.png"
            />
          </Link>
        </Card>
      ))}
    </div>
  )
}