import { mockProducts } from '../data/mockProducts';
import type { Product, ProductsApiResponse } from '../types/product';

const API_DIRECT_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';
const API_PROXY_URL = '/api/produtos';

/**
 * Busca a lista de produtos da API com resiliência a CORS e fallback para mock local
 */
export async function fetchProducts(): Promise<Product[]> {
  try {
    // 1ª tentativa: via Proxy do Vite (evita CORS em desenvolvimento local)
    const res = await fetch(API_PROXY_URL).catch(() => null);
    if (res && res.ok) {
      const data: ProductsApiResponse = await res.json();
      if (data && Array.isArray(data.products) && data.products.length > 0) {
        return data.products;
      }
    }

    // 2ª tentativa: chamada direta na API da Econverse
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

    // Fallback: caso a API da Econverse esteja inacessível ou com CORS bloqueado
    console.info('Utilizando dados mockados de produtos (Fallback de segurança)');
    return mockProducts;
  } catch (err) {
    console.warn('Erro ao carregar produtos da API, utilizando fallback local:', err);
    return mockProducts;
  }
}
