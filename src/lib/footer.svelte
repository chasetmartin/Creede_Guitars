<script>
	import * as config from '$lib/config'
    import { Instagram, Mail } from 'lucide-svelte';
</script>

<!-- Footer -->
<footer class="row">
	<p class="column">{config.title} &copy {new Date().getFullYear()}</p>
        <a href="https://www.instagram.com/creedeguitars" class="notpink hidephone">
            <Instagram />
        </a>
        <a href="mailto:creedeguitars@gmail.com" class="hidephone">
            <Mail />
        </a>
	<p class="column right">Website design:<a href="https://chasethomasmartin.com" target="_blank"> CM Dev</a></p>
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

    .notpink {
        color: var(--violet-5);
    }

    @media (max-width: 420px) {
        .hidephone {
            display: none;
        }
    }
</style>
