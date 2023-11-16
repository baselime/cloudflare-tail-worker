# Cloudflare Tail Worker for Baselime

This Cloudflare worker is designed to seamlessly transmit Cloudflare logs to Baselime.

## Setup

Before deploying the Cloudflare Tail Worker, ensure you have the following:

- **BASELIME_API_KEY**: Your Baselime API key.
- **CF_WORKER_NAME**: The name of the Cloudflare Worker you want to get logs for 

## Deployment

1. **Set Environment Variables**: Add the required environment variables to your deployment environment.
2. **Build Project**: Run `npm run build` to build the cloudflare worker
3. **Deploy Worker**: Programatically deploy the worker from `dist/index.js`.
4. **Initiate Log Transmission**: Set up the worker to tail the desired worker 
