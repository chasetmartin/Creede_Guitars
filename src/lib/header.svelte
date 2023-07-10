<script>
	import * as config from '$lib/config'
	import Toggle from '$lib/toggle.svelte';

</script>

<nav>
  <!-- Title -->


  <!-- Navigation -->
	<ul class="links">
        <li>
            <a href="/" class="title">
                {config.title}
            </a>
        </li>
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<a href="/contact">Contact</a>
		</li>
	</ul>

  <!-- Theme -->
<Toggle />
</nav>

<style>
	nav {
		padding-block: var(--size-7);
	}
    .title {
        padding-right: 3em;
		font-size: larger;
    }

	.links {
		margin-block: var(--size-7);
	}

	li {
		padding: 2px;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 420px) {
		nav {
			display: flex;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}

	@media (max-width: 390px) {
		nav {
			padding-block: var(--size-1);
		}
	}
</style>
