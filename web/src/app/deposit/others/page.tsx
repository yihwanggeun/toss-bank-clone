'use client'

import FinancialProductList from "@/components/common/FinancialProductList";

export default function OthersPage() {
  const financialProducts = {
    categories: [
      {
        title: "통장",
        items: [
          { image: "/1.png", text: "입출금 통장", blueText: "3.5%" },
          { image: "/2.png", text: "저축 통장", blueText: "4.0%" },
          { image: "/3.png", text: "입출금 통장", blueText: "3.5%" },
          { image: "/4.png", text: "입출금 통장", blueText: "3.5%" },
        ]
      },
      {
        title: "예적금",
        items: [
          { image: "/5.png", text: "정기예금", blueText: "5.0%" },
          { image: "/6.png", text: "자유적금", blueText: "4.5%" },
          { image: "/7.png", text: "입출금 통장", blueText: "3.5%" },
          { image: "/8.png", text: "입출금 통장", blueText: "3.5%" },
        ]
      },
      {
        title: "대출",
        items: [
          { image: "/9.png", text: "신용대출", blueText: "6.5%" },
          { image: "/10.png", text: "담보대출", blueText: "3.8%" },
          { image: "/11.png", text: "입출금 통장", blueText: "3.5%" },
          { image: "/12.png", text: "입출금 통장", blueText: "3.5%" },
        ]
      }
    ]
  };
  return <FinancialProductList {...financialProducts} />;

}