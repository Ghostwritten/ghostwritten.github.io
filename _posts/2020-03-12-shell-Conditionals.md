---
layout: post
read_time: true
show_date: true
title: shell 条件判断
date: '2020-03-12 17:25:00'
description: 元组使用小括号，元素不能修改，使用逗号隔开。
img: posts/girl/1_Portrait382-1280x640.jpg
tags: [shell]
author: 幽灵代笔
toc: true
comments: true
mathjax: yes

---

## 1. 判断
### 1.1 if

```
if else
if
if 语句语法格式：

if condition
then
    command1 
    command2
    ...
    commandN 
fi
```

写成一行（适用于终端命令提示符）：

```
if [ $(ps -ef | grep -c "ssh") -gt 1 ]; then echo "true"; fi
```

末尾的fi就是if倒过来拼写，后面还会遇到类似的。

```
if else
if else 语法格式：

if condition
then
    command1 
    command2
    ...
    commandN
else
    command
fi
```

if else-if else 语法格式：

```
if condition1
then
    command1
elif condition2 
then 
    command2
else
    commandN
fi
```

以下实例判断两个变量是否相等：

```
a=10
b=20
if [ $a == $b ]
then
   echo "a 等于 b"
elif [ $a -gt $b ]
then
   echo "a 大于 b"
elif [ $a -lt $b ]
then
   echo "a 小于 b"
else
   echo "没有符合的条件"
fi
输出结果：

a 小于 b
```

if else语句经常与test命令结合使用，如下所示：

```
num1=$[2*3]
num2=$[1+5]
if test $[num1] -eq $[num2]
then
    echo '两个数字相等!'
else
    echo '两个数字不相等!'
fi
输出结果：

两个数字相等!
```
### 1.2 case

```
name=`basename $0 .sh`
case $1 in
 s|start)
        echo "start..."
        ;;
 stop)
        echo "stop ..."
        ;;
 reload)
        echo "reload..."
        ;;
 *)
        echo "Usage: $name [start|stop|reload]"
        exit 1
        ;;
esac
exit 0
```

## 2. 循环

### 2.1 while循环

```
#!/bin/bash

#基础

i=1

while [ $i -le 5 ]

do 
	echo $i
	let i++
done
sh while.sh
1
2
3
4
5
```



```
i=10
while [ $i -ne 0 ]
do
	i=`expr $i - 1`
	echo $i
#	sleep 1
done

sh while2.sh
9
8
7
6
5
4
3
2
1
0
```

```
#!/bin/bash
#计算1+2+...+100的值

i=1
sum=0
while (( i<101 ))
do
    (( sum=sum+i ))
    (( i++ ))
done

echo "The total value is $sum"
[root@localhost control]# bash while.sh
The total value is 5050

```




```
while true
do
    uptime
    sleep 1
done

sh while.sh

10:20:54 up 4 min,  1 user,  load average: 0.05, 0.19, 0.12
10:20:56 up 4 min,  1 user,  load average: 0.05, 0.19, 0.12
10:20:57 up 4 min,  1 user,  load average: 0.05, 0.19, 0.12
10:20:58 up 4 min,  1 user,  load average: 0.05, 0.19, 0.12
```

### 2.2 for循环
for循环一般格式为：

```
for var in item1 item2 ... itemN
do
    command1
    command2
    ...
    commandN
done
```

写成一行：

```
for var in item1 item2 ... itemN; do command1; command2… done;
```

in列表可以包含替换、字符串和文件名。

in列表是可选的，如果不用它，for循环使用命令行的位置参数。

例如，顺序输出当前列表中的数字：

```
#!/bin/bash
 
for varible1 in {1..5}
#for varible1 in 1 2 3 4 5
do
     echo "Hello, Welcome $varible1 times "
done
```

计算1～100内所有的奇数之和

```
#!/bin/bash
sum=0
 
for i in {1..100..2}
do
    let "sum+=i"
done
    
echo "sum=$sum"
```
```
[root@localhost control]# bash while1.sh 
sum=2500
```

通过i的按步数2不断递增，计算sum值为2500。同样可以使用seq命令实现按2递增来计算1～100内的所有奇数之和，for i in $(seq 1 2 100)，seq表示起始数为1，跳跃的步数为2，结束条件值为100。

```
#!/bin/bash
sum=0
 
for i in $(seq 1 2 100)
do
    let "sum+=i"
done
    
echo "sum=$sum"
```
```
[root@localhost control]# bash while2.sh 
sum=2500
```
查看当前目录下文件以及文件夹

```
#!/bin/bash
 
for file in $( ls )
#for file in *
do
   echo "file: $file"
done
```
for循环列表参数

```
#!/bin/bash
echo "number of arguments is $#"
echo "What you input is: "
for argument
do
    echo "$argument"
done
```

```
#!/bin/bash
for((integer = 1; integer <= 5; integer++))
do
    echo "$integer"
done
```
