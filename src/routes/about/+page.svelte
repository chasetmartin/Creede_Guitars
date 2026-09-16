<script>
  import * as config from '$lib/config'
  import { fade } from 'svelte/transition'
	import Seo from '../../lib/seo.svelte';
</script>

<Seo 
    type="WebPage"
    title="About | Creede Guitars"
    description="About Creede Guitars: what makes Creede Guitars unique?"
/>

<div in:fade={{duration:1000}} class="about">
    <h1>About</h1>

    <div class="text">
        <p>{config.about}</p>
        <p>{config.philosophy}</p>
        <p>{config.stability}</p>
    </div>

    <div class="photos">
        <img in:fade={{duration:1000, delay:350}} src="/Snowfall-7.webp" alt="Snowfall Guitar" class="photo">
        <img in:fade={{duration:1000, delay:350}} src="/Lobito-4.webp" alt="El Lobito Guitar" class="photo">
    </div>
</div>

<style>
    .about {
        width: 100%;
    }

    .text p {
        margin: 0 0 1.25rem;
        line-height: 1.6;
        max-inline-size: none;
        max-width: none;
    }

    .photos {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        margin-top: 2rem;
    }

    .photo {
        width: 100%;
        border-radius: 8px;
    }

    @media (max-width: 700px) {
        .photos {
            grid-template-columns: 1fr;
        }
    }
</style>
