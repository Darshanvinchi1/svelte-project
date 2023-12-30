import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
    const products = (await import('$lib/dummy-products.json')).default;

    const data = products.products.find((item) => item.id == +params.id)

    if(!data) {
        // throw redirect(301, '/products')
        throw error(404, 'Product not found!')
    }

    return {
        data,
        title: data.title
    }
}