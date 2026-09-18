# wiki.vdbx.io

One-page GitHub Pages site that forwards every `wiki.vdbx.io` URL to the same path on [vdbx.io](https://vdbx.io), where the wiki lives now. Namecheap's own URL redirect only answers over plain HTTP, and every link out there is HTTPS, so this repo exists to hold the certificate.

`404.html` does the work: any path on a Pages site that has no file lands on it, and the script forwards the browser with the path, query, and hash intact. `index.html` covers the root.
