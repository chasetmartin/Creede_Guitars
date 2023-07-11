<script>
    import * as config from '$lib/config'

    export let description;
    export let title;
    export let type;
    export let canonical;

    import { page } from "$app/stores";

    $: url = $page.url.href;
</script>

<svelte:head>
    {#if canonical}
        <link rel="canonical" href={canonical}>
    {/if}
    <title>{title}</title>
	<meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />

    <meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />

    <meta name="keywords" content={config.keywords} />

    {@html `<script type="application/ld+json">
        {
        "@context": "http://schema.org",
        "@type": "${type}",
        "name": "${title}",
        "description": "${description}",
        "url": "${url}"
        }
        </script>`}

</svelte:head>