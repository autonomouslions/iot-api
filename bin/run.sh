set -x
on="false"
while true
do 
sleep 1
DIST=$(python dist.py)

distance=($DIST + 1)
echo $distance
echo "pim"
echo $on
b=11


if [ "$distance" -lt 11 ]
then
	 if [ "$on" == "false" ]
	 then 
	 on="true"
 
	 echo "Dist lower then 10"
	 LED=$(python led.py)
	 REQ=$(curl localhost:3001/park)
	 echo $REQ
fi

else 
	if  [ "$on" == "true"  ]
	then
	on="false"
	LED=$(python ledoff.py)
	REQ=$(curl localhost:3001/unpark)
	fi
fi
done
