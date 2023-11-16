# Cloudflare Tail Worker for Baselime

This Cloudflare worker is designed to seamlessly transmit Cloudflare logs to Baselime.

## Setup

Before deploying the Cloudflare Tail Worker, ensure you have the following:

- **BASELIME_API_KEY**: Your Baselime API key.
- **CF_WORKER_NAME**: The name of the Cloudflare Worker to tail

## Deployment

1. **Set Environment Variables**: Add the required environment variables to your deployment environment.
2. **Build Project**: Run `npm run build` to build the cloudflare worker
3. **Deploy Worker**: Programatically [Deploy](https://developers.cloudflare.com/api/operations/worker-script-put-content) `dist/index.js`. 
4. **Start Tailing**: Programatically [Start Tailing](https://developers.cloudflare.com/api/operations/worker-tail-logs-start-tail)
