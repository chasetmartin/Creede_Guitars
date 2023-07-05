<script>
	import * as config from '$lib/config'
</script>

<nav>
  <!-- Title -->


  <!-- Navigation -->
	<ul class="links">
        <li>
            <a href="/" class="title">
                <b>{config.title}</b>
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
  <!-- <button>Toggle</button> -->
</nav>

<style>
	nav {
		padding-block: var(--size-7);
	}
    .title {
        padding-right: 3em;
    }

	.links {
		margin-block: var(--size-7);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 390px) {
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
</style>
