
export interface Env {
	BASELIME_API_KEY: string;
	BASELIME_API_URL?: string;
	CF_WORKER_NAME: string;
}

export default {
	async tail(event: TraceItem[], env: Env): Promise<void> {
			const res = await fetch(env.BASELIME_API_URL || "https://cloudflare.baselime.io/v1", {
				method: "POST",
				headers: {
					"content-type": "application/json",
					"x-api-key": env.BASELIME_API_KEY,
					"x-dataset": 'cloudflare-logs',
					"x-service": env.CF_WORKER_NAME
				},
				body: JSON.stringify(event),
			})
	}
		
};
