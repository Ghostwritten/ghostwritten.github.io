---
layout: post
read_time: true
show_date: true
title: shell $字符
date: '2020-03-12 13:30:00'
description: 元组使用小括号，元素不能修改，使用逗号隔开。
img: posts/girl/1_Portrait382-1280x640.jpg
tags: [shell]
author: 幽灵代笔
toc: true
comments: true
mathjax: yes
---

## 1. $常用参数
```
$# 是传给脚本的参数个数
$0 是脚本本身的名字
$1 是传递给该shell脚本的第一个参数
$2 是传递给该shell脚本的第二个参数
$@ 是传给脚本的所有参数的列表
$* 是以一个单字符串显示所有向脚本传递的参数，与位置变量不同，参数可超过9个
$$ 是脚本运行的当前进程ID号
$? 是显示最后命令的退出状态，0表示没有错误，其他表示有错误
```

**************************************
## 2. die函数
在linux shell中执行命令后加上die命令，执行过程中如果出错会报出相应的原因与行号。如cat /usr/home/test.log || die $?，如果文件不存在，则会报出相应的错误。
[root@dockermake ~]# cat test1.sh

```
#!/bin/bash

warn () {
  echo "$@" >&2
}


die () {
  status="$1"
  shift
  warn "$@"
  exit "$status"
}

cat /usr/home/test.log || die $?
[root@dockermake ~]# bash test1.sh 
cat: /usr/home/test.log: No such file or directory
```

## 3. ${ }替换
```
file=/dir1/dir2/dir3/my.file.txt
```

可以用${ }分别替换得到不同的值：
复制代码代码如下:

```
${file#*/}：删掉第一个 / 及其左边的字符串：dir1/dir2/dir3/my.file.txt
${file##*/}：删掉最后一个 /  及其左边的字符串：my.file.txt
${file#*.}：删掉第一个 .  及其左边的字符串：file.txt
${file##*.}：删掉最后一个 .  及其左边的字符串：txt
```

```
${file%/*}：删掉最后一个  /  及其右边的字符串：/dir1/dir2/dir3
${file%%/*}：删掉第一个 /  及其右边的字符串：(空值)
${file%.*}：删掉最后一个  .  及其右边的字符串：/dir1/dir2/dir3/my.file
${file%%.*}：删掉第一个  .   及其右边的字符串：/dir1/dir2/dir3/my
```

记忆的方法为：
复制代码代码如下:

 - #是 去掉左边（键盘上#在 $ 的左边）
 - %是去掉右边（键盘上% 在$ 的右边）
 - 单一符号是最小匹配；两个符号是最大匹配
 - ${file:0:5}：提取最左边的 5 个字节：/dir1
 - ${file:5:5}：提取第 5 个字节右边的连续5个字节：/dir2

也可以对变量值里的**字符串作替换**：
复制代码代码如下:

```
${file/dir/path}：将第一个dir 替换为path：/path1/dir2/dir3/my.file.txt
${file//dir/path}：将全部dir 替换为 path：/path1/path2/path3/my.file.txt
```

利用 ${ } 还可针对不同的变数状态赋值(沒设定、空值、非空值)：

```
${file-my.file.txt} ：假如 $file 沒有设定，則使用 my.file.txt 作传回值。(空值及非空值時不作处理) 
${file:-my.file.txt} ：假如 $file 沒有設定或為空值，則使用 my.file.txt 作傳回值。 (非空值時不作处理)
${file+my.file.txt} ：假如 $file 設為空值或非空值，均使用 my.file.txt 作傳回值。(沒設定時不作处理)
${file:+my.file.txt} ：若 $file 為非空值，則使用 my.file.txt 作傳回值。 (沒設定及空值時不作处理)
${file=my.file.txt} ：若 $file 沒設定，則使用 my.file.txt 作傳回值，同時將 $file 賦值為 my.file.txt 。 (空值及非空值時不作处理)
${file:=my.file.txt} ：若 $file 沒設定或為空值，則使用 my.file.txt 作傳回值，同時將 $file 賦值為my.file.txt 。 (非空值時不作处理)
${file?my.file.txt} ：若 $file 沒設定，則將 my.file.txt 輸出至 STDERR。 (空值及非空值時不作处理)

${file:?my.file.txt} ：若 $file 没设定或为空值，则将 my.file.txt 输出至 STDERR。 (非空值時不作处理)
```

```
${#var} 可计算出变量值的长度：
${#file} 可得到 27 ，因为/dir1/dir2/dir3/my.file.txt 是27个字节
```

```
$ cat test2.sh
#!/bin/bash

file=/dir1/dir2/dir3/my.file.txt
echo ${file#*/}
echo ${file##*/} 
echo ${file#*.}
echo ${file##*.}

echo ${file%/*}
echo ${file%%/*}
echo ${file%.*}
echo ${file%%.*}
echo ${file/dir/path}
echo ${file//dir/path}
echo ${file-my.file.txt}
echo ${file:-my.file.txt}
echo ${file+my.file.txt} 
echo ${file:+my.file.txt} 
echo ${file=my.file.txt}
echo ${file:=my.file.txt}
echo ${file?my.file.txt} 
echo ${file:?my.file.txt} 
echo ${#file} 
```
```
[root@dockermake ~]# bash test2.sh 
dir1/dir2/dir3/my.file.txt
my.file.txt
file.txt
txt
/dir1/dir2/dir3

/dir1/dir2/dir3/my.file
/dir1/dir2/dir3/my
/path1/dir2/dir3/my.file.txt
/path1/path2/path3/my.file.txt
/dir1/dir2/dir3/my.file.txt
/dir1/dir2/dir3/my.file.txt
my.file.txt
my.file.txt
/dir1/dir2/dir3/my.file.txt
/dir1/dir2/dir3/my.file.txt
/dir1/dir2/dir3/my.file.txt
/dir1/dir2/dir3/my.file.txt
27
```
