(async () => {
	try {
		console.log('Posting commit status to GitHub...');

		const { GITHUB_TOKEN, GITHUB_SHA } = process.env;

		if (!GITHUB_TOKEN || !GITHUB_SHA) {
			throw new Error(
				'GITHUB_TOKEN and GITHUB_SHA environment variables must be present',
			);
		}

		const { Octokit } = require('@octokit/rest');

		const octokit = new Octokit({
			auth: `token ${GITHUB_TOKEN}`,
		});

		await octokit.repos.createCommitStatus({
			owner: 'autoguru-au',
			repo: 'overdrive',
			sha: GITHUB_SHA,
			state: 'success',
			context: 'Preview Site',
			target_url: `https://overdrive--${GITHUB_SHA}.surge.sh`,
			description:
				'The preview for this PR has been successfully deployed',
		});

		console.log('Successfully posted commit status to GitHub');
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
})();
