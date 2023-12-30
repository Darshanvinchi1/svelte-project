<script lang="ts">
 import { page } from '$app/stores'
</script>

<nav>
	<a href="/">Home</a>
	<a href="/products">Products</a>
</nav>

<svelte:head>
    <title>Website Name{$page.data.title ? `- ${$page.data.title}` : ''}</title>
    <meta name="description" content="description" />
</svelte:head>

<slot />