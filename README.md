 Cloudflare Tail worker that sends data to Baselime.

 This worker sends Cloudflare logs to Baselime for analysis. To use this worker, you'll need to set the following environment variables:

 - BASELIME_API_KEY: Your Baselime API key.
 - BASELIME_PROJECT_ID: The ID of the Baselime project you want to send logs to.

 Once you've set these environment variables, deploy this worker to your Cloudflare account and it will start sending logs to Baselime.
# FILEPATH
"""
This function takes in a list of integers and returns the sum of all even numbers in the list.
If the list is empty or contains no even numbers, the function returns 0.
"""
