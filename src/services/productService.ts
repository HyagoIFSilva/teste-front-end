import { mockProducts } from '../data/mockProducts';
import type { Product, ProductsApiResponse } from '../types/product';

const API_DIRECT_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';
const API_PROXY_URL = '/api/produtos';

export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await fetch(API_PROXY_URL).catch(() => null);
    if (res && res.ok) {
      const data: ProductsApiResponse = await res.json();
      if (data && Array.isArray(data.products) && data.products.length > 0) {
        return data.products;
      }
    }

    const directRes = await fetch(API_DIRECT_URL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    }).catch(() => null);

    if (directRes && directRes.ok) {
      const data: ProductsApiResponse = await directRes.json();
      if (data && Array.isArray(data.products) && data.products.length > 0) {
        return data.products;
      }
    }

    return mockProducts;
  } catch (err) {
    console.error('Erro ao buscar produtos:', err);
    return mockProducts;
  }
}
