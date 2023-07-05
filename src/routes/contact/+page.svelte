<script>
    import * as config from '$lib/config'
    import { fade } from 'svelte/transition'
</script>

<div in:fade={{duration:1000}}>
    <h1>Get in touch</h1>
    <p>Interested in learning more?</p>
    <br>
    <p>Follow us on Instagram</p>
    <p>or</p>
    <p>Send us an email</p>
</div>