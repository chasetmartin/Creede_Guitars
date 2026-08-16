import { youtubeChannelId } from '$lib/config'

/** @param {string} xml */
function parseVideos(xml) {
	const videos = []
	const entryRegex = /<entry>([\s\S]*?)<\/entry>/g
	let match

	while ((match = entryRegex.exec(xml)) !== null) {
		const entry = match[1]
		const id = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1]
		const title = entry.match(/<title>([^<]+)<\/title>/)?.[1]
		const published = entry.match(/<published>([^<]+)<\/published>/)?.[1]
		const description = entry.match(/<media:description>([^<]*)<\/media:description>/)?.[1]

		if (id && title) {
			videos.push({ id, title, published, description: description || null })
		}
	}

	return videos
}

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const res = await fetch(
		`https://www.youtube.com/feeds/videos.xml?channel_id=${youtubeChannelId}`
	)
	const xml = await res.text()

	return { videos: parseVideos(xml) }
}
