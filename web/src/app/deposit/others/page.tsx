'use client'
import React, { useEffect, useState } from 'react';

import { ProductCategory, FinancialProduct, GroupedProduct, FinancialProductsProps} from "./model/model";
import { fetchFinancialProducts, groupProductsByType } from './api/getProducts';
import styled from "@emotion/styled";
import { ProductItem } from '@/components/common/ProductItem';
import { CategoryContainer, CategoryHeader, CategoryTitle } from '@/components/common/ProductCategory';

export default function FinancialProducts() {
    const [groupedProducts, setGroupedProducts] = useState<ProductCategory[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadProducts() {
            try {
                const products = await fetchFinancialProducts();
                const grouped = groupProductsByType(products);
                setGroupedProducts(grouped);
            } catch (err) {
                setError('Failed to load financial products');
            } finally {
                setLoading(false);
            }
        }

        loadProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
  return (
    <div>
      {groupedProducts.map((category, categoryIndex) => (
        <CategoryContainer key={categoryIndex}>
          <CategoryHeader>
            <CategoryTitle>{category.title}</CategoryTitle>
          </CategoryHeader>
            {category.items.map((item, itemIndex) => (
              <ProductItem 
                key={itemIndex}
                {...item}          
              />
            ))}
        </CategoryContainer>
      ))}
    </div>
  );
}
