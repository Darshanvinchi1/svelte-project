<script lang="ts">

    import type { PageData } from './$types'

    export let data: PageData;

    $: products = data.data

</script>

<!-- <svelte:head>
    <title>{products.title}</title>
    <meta name="description" content={products.description} />
</svelte:head> -->

<img src={products?.thumbnail} alt={products?.title} />

<h1>{products?.title}</h1>

<p>{products?.description}</p>

<style>
    img {
        width: 100%;
    }
</style>