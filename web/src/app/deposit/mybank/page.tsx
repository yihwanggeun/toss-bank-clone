'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/common/Card'
import { TossBankCard } from '@/components/common/TossBankCard'
import { AccountCardNoButton } from '@/components/common/AccountCardNoButton'
import { AccountPlusRow } from '@/components/common/AccountPlus'
import Link from 'next/link'
import { fetchUserAccounts } from './api'

export interface Account {
  id: number;
  user_id: number;
  account_number: string;
  balance: number;
  account_type: string;
  created_at: string;
}


interface BankCategory {
  categoryName: string;
  accounts: Account[];
  addNewTitle: string;
}


const categorizeAccounts = (accounts: Account[]): BankCategory[] => {
  return [
    {
      categoryName: "입출금",
      accounts: accounts.filter(acc => acc.account_type === "입출금"),
      addNewTitle: "통장 추가하기"
    },
    {
      categoryName: "Group",
      accounts: accounts.filter(acc => acc.account_type === "Group"),
      addNewTitle: "모임 추가하기"
    },
    {
      categoryName: "예적금",
      accounts: accounts.filter(acc => acc.account_type === "예적금"),
      addNewTitle: "예적금 추가하기"
    }
  ];
};

export default function MyBankPage() {
  const [bankData, setBankData] = useState<Account[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const accounts = await fetchUserAccounts(1); // 사용자 ID 1로 고정
        setBankData(accounts);
        console.log(accounts);
      } catch (err) {
        setError('계좌 정보를 불러오는데 실패했습니다.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;

  return (
    <div>
      <Card>
        <TossBankCard bankName="내 통장" />
        {
          bankData.map((account) => (
            <AccountCardNoButton
              key = {account.id}
              bankName='토스뱅크'
              balance = {account.balance}
              imageUrl='/toss.png'
            />

          ))
        }
        <AccountPlusRow
          plusTitle="통장 추가하기"
          imageUrl="/plus.png"
        />
      </Card>
    </div>
  )
}