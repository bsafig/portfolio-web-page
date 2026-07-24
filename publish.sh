#!/usr/bin/env bash
# Build the React site and publish it to the web root over FTP.
#
# The site is now a Vite + React single-page app, so we build first and then
# mirror the generated dist/ folder — its contents (index.html, hashed JS/CSS
# bundles, .htaccess, meta/, and frc2996/carousel-content/) land at the web
# root exactly as before.
set -e

# Build static output into dist/ (installs deps first if needed).
npm install
npm run build

echo "Enter FTP password: "
lftp -u bensafigan@safigan.com ftp.safigan.com <<EOF
set ssl:verify-certificate no

# Upload the contents of local dist/ into the remote web root.
# Add --delete below if you want stale files pruned from the server.
mirror -R dist .

quit
EOF
