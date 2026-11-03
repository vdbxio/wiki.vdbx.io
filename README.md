# wiki.vdbx.io

One-page GitHub Pages site that forwards every `wiki.vdbx.io` URL to the same path on [vdbx.io](https://vdbx.io), where the wiki lives now. Namecheap's own URL redirect only answers over plain HTTP, and every link out there is HTTPS, so this repo exists to hold the certificate.

`404.html` does the work: any path on a Pages site that has no file lands on it, and the script forwards the browser with the path, query, and hash intact. `index.html` covers the root.

GitHub Pages answers the 404 page with HTTP status 404, which link checkers (Crowd Supply's included) report as an error even though browsers forward fine. So every known old path also gets a copy of the page at `<path>/index.html`, which answers 200. `paths.txt` lists them (vdbx.io's redirect keys plus its page paths); after editing it, run `node stubs.mjs` and commit the result.
