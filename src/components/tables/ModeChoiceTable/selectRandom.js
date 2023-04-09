export default function selectRandom(items) {
	return items[Math.floor(Math.random() * items.length)];
}
