'use client'

import React, {useState} from 'react';
import styled from '@emotion/styled';
import { MainContainer } from '@/components/common/MainContainer';

const ProductInfo = styled.div`
  margin-bottom: 20px;
`;

const SignUpButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

interface LoanPageProps {
  params: {
    id: string;
  };
}

const handleContract = (productId: number, userId: number, amount: number) => {
    createContract(productId, userId, amount);
};

async function fetchFinancialProductById(productId: number): Promise<FinancialProduct> {
  const apiUrl = 'http://localhost:3002/product/';
  const response = await fetch(apiUrl + `${productId}`, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Failed to fetch financial products');
  }
  return response.json();
}

async function createContract(productId: number, userId: number, amount: number){
    const apiUrl = 'http://localhost:3003/loan/';
    try{
        const currentDate = new Date();
        const endDate = new Date(currentDate.setMonth(currentDate.getMonth() + 12)); // Assuming 12 months loan term
  
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              product_id: productId,
              user_id: userId,
              amount: amount,
              remaining_balance: amount,
              start_date: new Date().toISOString().split('T')[0],
              end_date: endDate.toISOString().split('T')[0],
              status: 'active'
            }),
        });
        if (!response.ok) {
            throw new Error('계약 생성에 실패했습니다.');
        }

        const data = await response.json();
        console.log('계약이 성공적으로 생성되었습니다:', data);
        return data;
    } catch (error) {
        console.error('계약 생성 중 오류 발생:', error);
        throw error;
    }
}

export default async function LoanPage({ params }: LoanPageProps) {
  const productId = parseInt(params.id, 10);
  const [amount, setAmount] = useState<number>(451);

  const productInfo = await fetchFinancialProductById(productId);

  return (
    <MainContainer>
      <ProductInfo>
        <h1>대출 상품 정보</h1>
        <p>상품 ID: {productInfo.id}</p>
        <p>상품명: {productInfo.name}</p>
        <p>이자율: {productInfo.interest_rate}%</p>
        <p>유형: {productInfo.type}</p>
        <p>설명: {productInfo.description}</p>
        <p>기간 (개월): {productInfo.term_months}</p>
        <p>최소 금액: {productInfo.min_amount}</p>
        <p>최대 금액: {productInfo.max_amount}</p>
      </ProductInfo>
      <SignUpButton onClick={() => createContract(productInfo.id, 1, amount)}>가입하기</SignUpButton>
    </MainContainer>
  );
}

interface FinancialProduct {
  id: number;
  name: string;
  type: 'account' | 'savings' | 'loan';
  description: string;
  interest_rate: number;
  term_months: number;
  min_amount: number;
  max_amount: number;
  created_at: string;
}