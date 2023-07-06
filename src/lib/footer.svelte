<script>
	import * as config from '$lib/config'
</script>

<!-- Footer -->
<footer class="row">
	<p class="column">{config.title} &copy {new Date().getFullYear()}</p>
	<p class="column right">Website design:<a href="https://chasethomasmartin.com"> CM Dev</a></p>
</footer>

<style>
    footer {
        padding-block: var(--size-7);
        border-top: 1px solid var(--border);
        display: flex;
        justify-content: space-between; 
    }

    p {
        color: var(--text-2);
    }

    .row {
        display: flex;
    }

    .column {
        flex: 50%;
    }

    .right {
        display: flex;
        justify-content: flex-end;
        align-items: center; 
    }
</style>
