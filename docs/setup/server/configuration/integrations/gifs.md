# Gifs

As of the rewrite (and as of Tenor shutting down), Spacebar no longer includes a default API key for GIFs,
as to avoid abuse and hitting rate limits on the provider's end.
To get GIF pickers working, you will need to obtain an API key for the providers you want to use.
We've also taken the time to move the GIF configuration into a place and format that makes a little more sense.

## Klipy

To set up Klipy, you can obtain an API key [here](https://partner.klipy.com/api-keys).
Keep in mind that a "Testing" Klipy API key has a rate limit of 100 requests per hour - Spacebar caches trending gifs
and categories requests to aid keep the request rate down.

Once you have obtained this API key, you can configure and enable Klipy support in your Spacebar instance's
configuration file as such:
```json5
{
  "integrations": {
    "gifs": {
      "klipy": {
        "enabled": true,
        // You can pick either one of these 2:
        "apiKey": "abcdef",                               // Inline
        "apiKeyPath": "/run/secrets/spacebar/klipyApiKey" // Read from file (single-line plaintext)
      }
    }
  }
}
```

## For client authors

You can get the list of known/enabled GIF providers via the `GET ${instance.baseUrl}/_spacebar/api/v1/integrations/gif`
endpoint. This will yield a response as such:

```json5
{
  "providers": {
    // Provider ID
    "klipy": {
      // Whether it is available, not accounting for rate limits
      "available": true
    }
  }
}
```