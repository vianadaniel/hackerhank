#!/bin/bash

echo "Enter Y/N"
read X

if [ "$X" == "Y" ] || [ "$X" == "y" ]; then
    echo "YES"
else
    echo "NO"

fi

for ((i = 1; i <= 99; i += 2)); do
    echo $i
done
