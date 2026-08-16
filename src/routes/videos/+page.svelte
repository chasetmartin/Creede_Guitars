<script>
	import * as config from '$lib/config'
	import { fade } from 'svelte/transition'
	import { tick } from 'svelte'
	import { Youtube } from 'lucide-svelte'
	import Seo from '../../lib/seo.svelte'

	/** @type {import('./$types').PageData} */
	export let data

	let activeVideo = data.videos[0]
	/** @type {HTMLElement | undefined} */
	let playerEl

	/** @param {{ id: string }} video */
	async function selectVideo(video) {
		if (activeVideo?.id === video.id) return

		activeVideo = video
		await tick()
		playerEl?.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}
</script>

<Seo
	type="WebPage"
	title="Videos | Creede Guitars"
	description="Watch builds and demos on the Creede Guitars YouTube channel."
/>

<div in:fade={{ duration: 1000 }} class="page">
	<h1>Videos</h1>
	<p>Watch builds and demos on our YouTube channel.</p>
	<br />

	{#if activeVideo}
		<section class="player" bind:this={playerEl}>
			<div class="embed">
				<iframe
					src="https://www.youtube.com/embed/{activeVideo.id}"
					title={activeVideo.title}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
			<h2 class="video-title">{activeVideo.title}</h2>
			{#if activeVideo.description}
				<p class="description">{activeVideo.description}</p>
			{/if}
		</section>
	{/if}

	<ul class="grid">
		{#each data.videos as video (video.id)}
			<li>
				<button
					type="button"
					class:active={activeVideo?.id === video.id}
					on:click={() => selectVideo(video)}
				>
					<img
						src="https://i.ytimg.com/vi/{video.id}/hqdefault.jpg"
						alt={video.title}
						loading="lazy"
					/>
					<span>{video.title}</span>
				</button>
			</li>
		{/each}
	</ul>

	<p>
		<a href={config.youtubeUrl} target="_blank" rel="noopener noreferrer" class="youtube-link">
			<Youtube size={28} />
			View on YouTube
		</a>
	</p>
</div>

<style>
	.page {
		width: 100%;
		max-width: 100%;
		overflow-x: clip;
	}

	.player {
		width: 100%;
		margin-bottom: var(--size-7);
		scroll-margin-top: var(--size-5);
	}

	.embed {
		position: relative;
		width: 100%;
		aspect-ratio: 16 / 9;
	}

	.embed iframe {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		border: 0;
		border-radius: var(--radius-3);
	}

	.video-title {
		margin-top: var(--size-4);
		margin-bottom: var(--size-2);
		font-family: var(--font-sans);
		font-size: var(--font-size-2);
		line-height: var(--font-lineheight-3);
		overflow-wrap: break-word;
	}

	.description {
		color: var(--text-2);
		line-height: var(--font-lineheight-3);
		white-space: pre-wrap;
		overflow-wrap: break-word;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 220px), 1fr));
		gap: var(--size-5);
		width: 100%;
		margin-bottom: var(--size-7);
	}

	.grid li {
		min-width: 0;
	}

	button {
		display: flex;
		flex-direction: column;
		gap: var(--size-2);
		width: 100%;
		min-width: 0;
		padding: 0;
		border: 2px solid transparent;
		border-radius: var(--radius-3);
		background: none;
		color: inherit;
		cursor: pointer;
		text-align: left;
		box-sizing: border-box;
	}

	button.active {
		border-color: var(--brand);
	}

	button:hover {
		border-color: var(--border);
	}

	img {
		width: 100%;
		aspect-ratio: 16 / 9;
		object-fit: cover;
	}

	span {
		font-size: var(--font-size-0);
		line-height: var(--font-lineheight-2);
		padding-inline: var(--size-1);
		padding-bottom: var(--size-2);
		overflow-wrap: break-word;
	}

	a {
		color: inherit;
	}

	.youtube-link {
		display: inline-flex;
		align-items: center;
		gap: var(--size-2);
		color: var(--violet-5);
	}

	@media (max-width: 1000px) {
		.grid {
			grid-template-columns: repeat(auto-fill, minmax(min(100%, 180px), 1fr));
		}
	}

	@media (max-width: 600px) {
		.grid {
			grid-template-columns: 1fr;
			gap: var(--size-4);
		}

		.player {
			margin-bottom: var(--size-5);
		}

		.video-title {
			font-size: var(--font-size-1);
		}
	}

	@media (max-width: 420px) {
		.grid {
			gap: var(--size-3);
		}

		span {
			font-size: var(--font-size-00);
		}
	}
</style>
