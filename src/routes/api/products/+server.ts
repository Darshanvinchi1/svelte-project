import { error, json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async ({ fetch }) => {
    
    const response = await fetch('https://dummyjson.com/products');//?limit=6


    if(response.ok){
        const products = await response.json();

        
            return json(products, {
                status: 200
            })
    }

    throw error(response.status, response.statusText)
    // const products = await (await import('$lib/dummy-products.json')).default
 
    // throw error(401, "not login")

    
    // return new Response(JSON.stringify(products),{
    //     status: 200,
    // })
}