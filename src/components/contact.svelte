<script>
	const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
	let name = '';
	let email = '';
	let message = '';
	let accessKey = '0a8ed87f-80c4-402d-b6c5-037d2b24df16';
	let submissionStatus = '';

	const submitHandler = async (data) => {
		submissionStatus = 'submitting';

		try {
			const res = await fetch('https://api.staticforms.xyz/submit', {
				method: 'POST',
				body: JSON.stringify({
					name,
					email,
					message,
					accessKey
				}),
				headers: { 'Content-Type': 'application/json' }
			});

			const json = await res.json();

			if (json.success) {
				submissionStatus = 'success';
			} else {
				submissionStatus = 'failed';
			}
		} catch (data) {
			submissionStatus = 'failed';
		}
	};
</script>

<div class="w-full mb-4 lg:mt-10">
	<div class="p-14 grid lg:grid-cols-2">
		<div class="self-center lg:ml-10">
			<h1 class="text-lg lg:text-2xl font-bold">Have a business goal in mind?</h1>
			<p class="lg:text-lg">We want to help you get there.</p>
		</div>
		<div class="form">
			{#if submissionStatus === 'submitting'}
				<p>Submitting...</p>
			{:else if submissionStatus === 'failed'}
				<p>
					Submission failed. Please refresh this page and try again. Alternatively, we can be
					reached at <a class="text-rusgreen" href="mailto:info@novajed.com">info@novajed.com</a>.
				</p>
			{:else if submissionStatus === 'success'}
				<p>
					Submission success. Thanks for reaching out to us and we will respond within 48 hours.
				</p>
			{:else}
				<form
					on:submit|preventDefault={submitHandler}
					action="https://api.staticforms.xyz/submit"
					method="post"
					data-name="contact-form"
					aria-label="contact form"
				>
					<input type="hidden" name="accessKey" value={accessKey} />
					<input
						class="outline-none form-field"
						type="text"
						name="name"
						aria-label="name"
						data-name="name"
						placeholder="Name"
						required
						maxlength="256"
						bind:value={name}
					/>
					<input
						class="outline-none form-field"
						type="text"
						name="email"
						aria-label="email"
						data-name="email"
						placeholder="Email"
						required
						maxlength="256"
						bind:value={email}
					/>
					<input
						class="outline-none form-field"
						type="text"
						name="$message"
						aria-label="message"
						data-name="message"
						placeholder="How can we help?"
						maxlength="256"
						required
						bind:value={message}
					/>
					<input
						class="submit-btn text-center bg-rusgreen mt-2 font-bold cursor-pointer"
						type="submit"
						value="Submit"
						data-wait="Submitting..."
					/>
					<input type="text" name="honeypot" style="display: none;" />
				</form>
			{/if}
		</div>
	</div>
</div>

<style>
	.form {
		max-width: 30em;
	}

	.form input {
		min-height: 7em;
		width: 100%;
		padding: 0.5em 0em;
	}

	.form-field {
		border-style: solid;
		border-width: 1px;
		border-color: transparent transparent #adb5bd;
		background-color: transparent;
	}

	.form-field:focus {
		border-color: transparent transparent black;
	}

	.submit-btn {
		min-height: 4em !important;
		width: 90%;
	}
</style>
