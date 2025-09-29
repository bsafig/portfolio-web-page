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

cd frc2996
mput frc2996/*

cd carousel-content
mput carousel-content/*
cd ..

cd ..

quit
EOF