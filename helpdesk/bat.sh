#!/bin/sh

# echo 'test'

# BUCKET_NAME=testbucket
# OBJECT_NAME=testworkflow-2.0.1.jar
# TARGET_LOCATION=/opt/test/testworkflow-2.0.1.jar
# OBJECT_NAME=Helpdesk_interview_data_set.gz
# TARGET_LOCATION=../post.json
# JSON_STRING=$( jq -n \
#                 #   --arg bn "$BUCKET_NAME" \
#                   --arg on "$OBJECT_NAME" \
#                   --arg tl "$TARGET_LOCATION" \
#                 #   '{bucketname: $bn, objectname: $on, targetlocation: $tl}' )
#                   '{objectname: $on, targetlocation: $tl}' )
# echo $JSON_STRING 

# base64 -d xxx.txt |gunzip -|iconv -f utf-8 -t gbk >aaa.txt
# base64 解压，然后gunzip解压gzip内容，然后utf8转码成gbk格式，将内容放入aaa.txt文件。

# gzip -dc Helpdesk_interview_data_set.gz | grep 'error' | less > post.json
# STRS=$(zcat Helpdesk_interview_data_set.gz)
line=$(cat test.log)

# echo $STRS
dt=$(echo $line | awk '{print ($1" "$2" " $3)}')
ser_nm=$(echo $line | awk '{print ($4)}')
error_msg=$(echo $line | awk '{print ($5$6$7$8$9$10)}')

echo "\{date\":\"$dt\"','"\"server\":\"$ser_nm\",\"error\":\"$error_msg\""}"

# echo '{"hostname":"test","domainname":"example.com"}' | python -c 'import json,sys;obj=json.load(sys.stdin);print obj[0]["hostname"]'

array=($(cat source.txt))
printf "{\n"
printf '\t"data":[\n'
for ((i=0;i<${#array[@]};i++))
do
        printf '\t\t{\n'
        num=$(echo $((${#array[@]}-1)))
        if [ "$i" == ${num} ];
        then
                printf "\t\t\t\"{#DISK_NAME}\":\"${array[$i]}\"}\n"
        else
                printf "\t\t\t\"{#DISK_NAME}\":\"${array[$i]}\"},\n"
        fi
done
printf "\t]\n"
printf "}\n"

# array=($(cat source.txt))
# s="{\"data\":["
# for ((i=0;i<${#array[@]};i++))
# do
#     num=$(echo $((${#array[@]}-1)))
#     # echo ${array[i]} >> post.json
#     # s=$s"{\"test\":\"${array[i]}\"}"
#     s0=${array[i]}
#     # echo $s0 >> post.json
#     s=$s"{\"test\":"
#     s=$s"\"${s0}\"}"
#     if [ "$i" != ${num} ];
#     then
#     s=$s","
#     fi

#         # s=$s"{"
#         # num=$(echo $((${#array[@]}-1)))
#         # if [ "$i" == ${num} ];
#         # then
#         #         s=$s"\"test\":\"${array[$i]}\"}"
#         # else
#         #         s=$s"\"test\":\"${array[$i]}\"},"
#         # fi
# done
# s=$s"]}"

# array=($(cat source.txt))
# echo "{" >> post.json
# echo '"data":[' >> post.json
# temp=""
# for ((i=0;i<${#array[@]};i++))
# do
#     echo '{' >> post.json
#     num=$(echo $((${#array[@]}-1)))
#     # echo "\"{#DISK_NAME}\":\"${array[$i]}\"}" >> post.json
#     sub="\"test\":\""${array[$i]}\""}"
#     # printf $sub
#     if [ "$i" != ${num} ];
#     then
#         sub=$sub","
#         # echo "," >> post.json
#         # sub="\"{#DISK_NAME}\":\"${array[$i]}\"}"
#     # else
#         # sub="\"{#DISK_NAME}\":\"${array[$i]}\"},"
#     fi
#     temp=$temp$sub
#     # echo $sub >> post.json
# done
# echo $temp >> post.json
# echo "]" >> post.json
# echo "}" >> post.json


x='test'
# x=`expr $x + 1`
# x=$(( $x + 1 ))
x=$x" asdf"
x=$x"2343456798"

echo $x
echo $s

exit 0