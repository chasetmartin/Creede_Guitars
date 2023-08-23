<script>
    import * as config from '$lib/config'
    import { fade } from 'svelte/transition'
    import { Instagram, Mail, MousePointerClick, Youtube } from 'lucide-svelte'
	import Seo from '../../lib/seo.svelte';
</script>

<Seo 
    type="WebPage"
    title="Contact | Creede Guitars"
    description="Contact Creede Guitars: interested in learning more?"
/>

<div class="row">
    <div in:fade={{duration:1000}} class="column">
        <h1>Get in touch</h1>
        <p>Interested in learning more?</p>
        <br>
        <p>Follow us on Instagram</p>
        <a href="https://www.instagram.com/creedeguitars" class="notpink">
            <Instagram /><MousePointerClick />
        </a>
        <p>Send us an email</p>
        <a href="mailto:creedeguitars@gmail.com">
            <Mail /><MousePointerClick />
        </a>
        <p>or</p>
        <br>
        <p>check out our YouTube channel!</p>
        <a href="https://www.youtube.com/@CreedeGuitars/featured" class="notpink">
            <Youtube /><MousePointerClick />
        </a>
    </div>
    <div class="column columnhide">
        <img in:fade={{duration:1000, delay:350}} src="000_1-16.jpg" alt="Creede Guitar" width="50%">
    </div>
    <div class="column columnhide">
        <img in:fade={{duration:1000, delay:350}} src="headstock.jpg" alt="Creede Guitar" width="56%">
    </div>
</div>

<style>
    .row {
        display: flex;
    }

    .column {
        flex: 33%;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 1000px) {
        .columnhide {
            display: none;
        }
    }

    .notpink {
        color: var(--violet-5);
    }
</style>
