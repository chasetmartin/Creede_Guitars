<script>
    import * as config from '$lib/config'
    import { fade } from 'svelte/transition'
</script>

<div in:fade={{duration:1000}}>
    <h1>About</h1>
    <p>{config.about}</p>
    <br>
    <p>{config.philosophy}</p>
</div>