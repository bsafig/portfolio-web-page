echo "enter password: "
lftp -u bensafigan@safigan.com ftp.safigan.com <<EOF
set ssl:verify-certificate no

put index.html
put format.css
put README.md

cd scripts
mput scripts/*
cd ..

cd meta
mput meta/*
cd ..

quit
EOF