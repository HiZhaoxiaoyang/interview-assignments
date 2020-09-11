#! /bin/bash

echo "test"
gzip -dc DevOps_interview_data_set.gz | grep 'device' | less > devOpsDataSet.json
gzip -dc DevOps_interview_data_set.gz | grep 'process' | less >> devOpsDataSet.json
gzip -dc DevOps_interview_data_set.gz | grep 'Could not' | less >> devOpsDataSet.json

cat log | while read line
do
    case "$line" in
    [1-9][0-9]*)
    echo $line;;
    esac
done

echo $timeInterval
if [ "$timeInterval" != "" ];then
	startDate=`date -d "${timeInterval} days ago" +%Y-%m-%d`
else
	#startDate=`date -d "100 days ago" +%Y-%m-%d`
	startDate="2020-05-13"
fi
endDate=`date -d "now" +%Y-%m-%d`
#最后一行的时间
lastLineDate=`tail -n 1 $file |awk -F '[ ]' '{print $2}'`
endDate="${endDate} ${lastLineDate}"
#echo $endDate
#截取要分析的时间段的日志
sed -n "/${startDate}/,/${endDate}/p" $file >> devOpsDataSet.json
