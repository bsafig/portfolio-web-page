#!/usr/bin/env bash
set -e

npm install
npm run build

echo "Enter FTP password: "
lftp -u bensafigan@safigan.com ftp.safigan.com <<EOF
set ssl:verify-certificate no

mirror -R dist .

quit
EOF
