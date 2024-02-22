#!/bin/bash

echo "Enter Y/N"
read X

if [ "$X" == "Y" ] || [ "$X" == "y" ]; then
    echo "YES"
else
    echo "NO"

fi

