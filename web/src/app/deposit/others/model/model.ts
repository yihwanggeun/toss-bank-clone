export interface FinancialProduct {
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
  
export interface GroupedProduct {
    id: number;
    image: string;
    text: string;
    blueText: string;
}

export interface ProductCategory {
    title: string;
    items: GroupedProduct[];
}

export interface FinancialProductsProps {
    groupedProducts: ProductCategory[];
}
