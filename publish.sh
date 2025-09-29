echo "Enter FTP password: "
lftp -u bensafigan@safigan.com ftp.safigan.com <<EOF
set ssl:verify-certificate no

put index.html
put format.css
put README.md

mirror -R scripts scripts

mirror -R meta meta

mirror -R frc2996 frc2996

quit
EOF
