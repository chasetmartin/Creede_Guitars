<script>
    import * as config from '$lib/config'
    import { fade } from 'svelte/transition'
    import { Instagram, Mail, MousePointerClick } from 'lucide-svelte'
</script>

<div in:fade={{duration:1000}} class="row">
    <div class="column">
        <h1>Get in touch</h1>
        <p>Interested in learning more?</p>
        <br>
        <p>Follow us on Instagram</p>
        <a href="https://www.instagram.com/creedeguitars" class="notpink">
            <Instagram /><MousePointerClick />
        </a>
        <p>or</p>
        <p>Send us an email</p>
        <a href="mailto:creedeguitars@gmail.com">
            <Mail /><MousePointerClick />
        </a>
    </div>
    <div class="column columnhide">
        <img src="guitar10.jpg" alt="Creede Guitar" width="95%">
    </div>
    <div class="column columnhide">
        <img src="guitar3.jpeg" alt="Creede Guitar" width="95%">
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
