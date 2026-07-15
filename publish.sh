echo "Enter FTP password: "
lftp -u bensafigan@safigan.com ftp.safigan.com <<EOF
set ssl:verify-certificate no

put index.html
put format.css
put project.css
put README.md

mirror -R scripts scripts

mirror -R meta meta

mirror -R frc2996 frc2996

mirror -R spotigang spotigang

mirror -R ml-demo ml-demo

mirror -R terminalmon terminalmon

quit
EOF
