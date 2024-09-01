import { FinancialProduct, ProductCategory } from '../model/model';

const apiUrl = 'http://localhost:3004/product/';
//1234
export async function fetchFinancialProducts(): Promise<FinancialProduct[]> {
    const response = await fetch(apiUrl);
    console.log("Update");
    if (!response.ok) {
      throw new Error('Failed to fetch financial products');
    }
    return response.json();
}


export function groupProductsByType(products: FinancialProduct[]): ProductCategory[] {
    const typeMap: { [key: string]: string } = {
        'account': '통장',
        'savings': '저축',
        'loan': '대출'
    };

    return products.reduce<ProductCategory[]>((acc, product) => {
        const categoryTitle = typeMap[product.type] || product.type;
        
        let category = acc.find(cat => cat.title === categoryTitle);
        if (!category) {
            category = { title: categoryTitle, items: [] };
            acc.push(category);
        }

        category.items.push({
            id : product.id,
            image: `/${product.id}.png`,
            text: product.name,
            blueText: `${product.interest_rate}%`
        });

        return acc;
    }, []);
}