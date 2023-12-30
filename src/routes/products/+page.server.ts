import { error } from '@sveltejs/kit';

export const load = async ({ fetch, depends }) => {
	// const products = (await import('$lib/dummy-products.json')).default;
	const response = await fetch('/api/products')
	depends("app:productsServerLoad")
	if(response.ok){
		const products = await response.json()
		
		return {
			products
		};
	}

	throw error(response.status, response.statusText)
};
