## 多脚本间变量传递
#### source
当前脚本调用另一个脚本变量
```powershell
$ cat test1.sh
#!/bin/bash
a=Hello World
echo "test1:$a"
```

```powershell
$ cat test2.sh
#!/bin/bash
/root/test1.sh
echo " test2:$a"
```

```powershell
[root@centos ~]# sh test2.sh
test1:Hello World
test2:
```

从结果可以看出test1.sh没有把变量a的值传递给test2.sh

我们把test2.sh改成：

```powershell
#!/bin/bash
source /root/test1.sh
echo "test2:$a"
```
```powershell
[root@centos ~]# sh test2.sh
test1:Hello World
test2:Hello World
```
#### export
当前脚本（第二者脚本）中执行第三者脚本用到第一者脚本中的变量

```powershell
$ cat test3.sh
#!/bin/bash
echo "test3:$a"
```

把test2.sh改成：

```powershell
#!/bin/bash
source /root/test1.sh
echo "test2:$a"
/root/test3.sh
```


执行test2.sh：

```powershell
[root@shenji ~]# sh test2.sh
test1:Hello World
test2:Hello World
test3:
```
将test1.sh改成：

```powershell
#!/bin/bash
export aaa=Hello World
echo "test1:$a"
```

执行test2.sh后有如下结果：

```powershell
$ sh test2.sh
test1:Hello World
test2:Hello World
test3:Hello World
```
