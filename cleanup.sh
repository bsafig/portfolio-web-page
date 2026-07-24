#!/usr/bin/env bash
# One-off cleanup of files left on the server by the OLD static-site deploy.
#
# The pre-React publish.sh uploaded loose HTML/CSS/JS and a directory per
# project. The new publish.sh mirrors dist/ without --delete, so it overwrites
# index.html and re-uploads meta/ + frc2996/carousel-content/, but it does NOT
# remove the old leftovers. This script deletes exactly those stale artifacts.
#
# SAFE TO KEEP: the current React build relies on these remaining on the server,
# so this script never touches them:
#   index.html, assets/, .htaccess, meta/, frc2996/carousel-content/
#
# Run this once after the first React deploy. It is idempotent — missing files
# are ignored (rm -f), so re-running it is harmless.
set -e

echo "This removes stale files from the OLD static-site deploy off the server."
echo "The current React build (index.html, assets/, .htaccess, meta/, frc2996/carousel-content/) is left untouched."
echo "Enter FTP password: "
lftp -u bensafigan@safigan.com ftp.safigan.com <<EOF
set ssl:verify-certificate no

# Old root-level files (superseded by the React build / bundled CSS)
rm -f format.css
rm -f project.css
rm -f README.md

# Old vanilla-JS behavior scripts (now bundled into assets/)
rm -r -f scripts

# Old per-project HTML pages (now client-side routes under /projects/*)
rm -r -f spotigang
rm -r -f ml-demo
rm -r -f terminalmon
rm -r -f vouch_ex
rm -r -f vouch_monitor

# FRC page: drop the old standalone page + its CSS, but KEEP carousel-content/
rm -f frc2996/frc.html
rm -f frc2996/frc_format.css

quit
EOF

echo "Cleanup complete."
