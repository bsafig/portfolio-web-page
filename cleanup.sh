#!/usr/bin/env bash
# Remove files left on the server by the old static-site deploy.
#
# The React publish.sh overwrites the current files but does not prune the
# pre-React leftovers (loose CSS, scripts/, and the old per-project HTML dirs).
# This deletes exactly those, keeping everything the React build needs:
# index.html, assets/, .htaccess, meta/, and frc2996/carousel-content/.
# Idempotent — run once after the first React deploy.
set -e

echo "Enter FTP password: "
lftp -u bensafigan@safigan.com ftp.safigan.com <<EOF
set ssl:verify-certificate no

rm -f format.css
rm -f project.css
rm -f README.md

rm -r -f scripts

rm -r -f spotigang
rm -r -f ml-demo
rm -r -f terminalmon
rm -r -f vouch_ex
rm -r -f vouch_monitor

rm -f frc2996/frc.html
rm -f frc2996/frc_format.css

quit
EOF
