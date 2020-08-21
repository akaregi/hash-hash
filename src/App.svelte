<script lang='ts'>
	import DigestCard from './DigestCard.svelte'

	let text: string = '';
</script>

<main>
	<h1>Hash-hash</h1>
	<label for='text'>Original text to be computed for hashing:</label>
	<input type='text' id='text' bind:value={text}>

	<DigestCard text={text} variant="SHA-1" />
	<DigestCard text={text} variant="SHA-224" />
	<DigestCard text={text} variant="SHA-256" />
	<DigestCard text={text} variant="SHA-384" />
	<DigestCard text={text} variant="SHA-512" />
	<DigestCard text={text} variant="SHA3-224" />
	<DigestCard text={text} variant="SHA3-256" />
	<DigestCard text={text} variant="SHA3-384" />
	<DigestCard text={text} variant="SHA3-512" />
</main>

<style>
	main {
		padding: 1em;
		max-width: 500px;
		margin: 0 auto;

		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 24px;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4rem;
		font-weight: 100;
	}

	input {
		font-size: 20px;
		
		margin: .5rem 0;
		padding: .5rem;

		width: 100%;
	}
</style>