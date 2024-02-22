read X

read Y

read Z

if [ $X == $Y ] && [ $Y == $Z ]; then
    echo "EQUILATERAL"
fi

if [ $X != $Y ] && [ $Y != $Z ] && [ $Z != $X ]; then
    echo "SCALENE"
fi

if [ $X == $Y ] || [ $Y == $Z ] || [ $Z == $X ]; then
    echo "ISOSCELES"
fi