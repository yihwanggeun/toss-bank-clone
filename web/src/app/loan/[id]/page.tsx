'use client'

import React, {useState} from 'react';
import styled from '@emotion/styled';
import { MainContainer } from '@/components/common/MainContainer';

const ProductContainer = styled.div`
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
`;

const ProductTitle = styled.h1`
  color: #343a40;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const ProductInfo = styled.div`
  margin-bottom: 30px;
`;

const InfoItem = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 16px;
  color: #495057;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Value = styled.span`
  color: #007bff;
`;

const SignUpButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  font-size: 18px;
  width: 100%;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const AmountInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 16px;
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
  const apiUrl = 'http://localhost:3004/product/';
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
      <ProductContainer>
        <ProductTitle>대출 상품 정보</ProductTitle>
        <ProductInfo>
          <InfoItem>
            <Label>상품명:</Label>
            <Value>{productInfo.name}</Value>
          </InfoItem>
          <InfoItem>
            <Label>이자율:</Label>
            <Value>{productInfo.interest_rate}%</Value>
          </InfoItem>
          <InfoItem>
            <Label>유형:</Label>
            <Value>{productInfo.type}</Value>
          </InfoItem>
          <InfoItem>
            <Label>설명:</Label>
            <Value>{productInfo.description}</Value>
          </InfoItem>
          <InfoItem>
            <Label>기간 (개월):</Label>
            <Value>{productInfo.term_months}</Value>
          </InfoItem>
        </ProductInfo>
        <AmountInput
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="대출 금액을 입력하세요"
          min={productInfo.min_amount}
          max={productInfo.max_amount}
        />
        <SignUpButton onClick={() => createContract(productInfo.id, 1, amount)}>
          가입하기
        </SignUpButton>
      </ProductContainer>
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