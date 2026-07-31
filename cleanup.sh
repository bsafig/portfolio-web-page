#!/usr/bin/env bash
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
