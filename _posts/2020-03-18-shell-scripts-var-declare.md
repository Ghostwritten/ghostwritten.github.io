---
layout: post
read_time: true
show_date: true
title: shell 多脚本间变量传递
date: '2020-03-18 12:30:00'
description: 
img: posts/girl/1_Portrait382-1280x640.jpg
tags: [shell]
author: 幽灵代笔
toc: true
comments: true
mathjax: yes

---

#### 1. source
当前脚本调用另一个脚本变量
```
$ cat test1.sh
#!/bin/bash
a=Hello World
echo "test1:$a"
```

```
$ cat test2.sh
#!/bin/bash
/root/test1.sh
echo " test2:$a"
```

```
[root@centos ~]# sh test2.sh
test1:Hello World
test2:
```

从结果可以看出test1.sh没有把变量a的值传递给test2.sh

我们把test2.sh改成：

```
#!/bin/bash
source /root/test1.sh
echo "test2:$a"
```
```
[root@centos ~]# sh test2.sh
test1:Hello World
test2:Hello World
```
#### 2. export
当前脚本（第二者脚本）中执行第三者脚本用到第一者脚本中的变量

```
$ cat test3.sh
#!/bin/bash
echo "test3:$a"
```

把test2.sh改成：

```
#!/bin/bash
source /root/test1.sh
echo "test2:$a"
/root/test3.sh
```


执行test2.sh：

```
[root@shenji ~]# sh test2.sh
test1:Hello World
test2:Hello World
test3:
```
将test1.sh改成：

```
#!/bin/bash
export aaa=Hello World
echo "test1:$a"
```

执行test2.sh后有如下结果：

```
$ sh test2.sh
test1:Hello World
test2:Hello World
test3:Hello World
```
