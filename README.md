# nodejs-https-proxy
Establish an https connection through this simple proxy server.

## Key and cert files
Https connection requires a private key and a certificate, either issued by a CA (Certified Authority) or a self-signed one.

To generate key and self-signed certificate, run the following in the same directory as your proxy.js:

```
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```