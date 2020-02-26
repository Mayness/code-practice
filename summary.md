## 数组、字符串

### 排序
冒泡排序  
选择排序  
快速排序   


### 去重  
Set

### 交集  
/(.)(?=.*\1)/  匹配重复出现的数

### 回文  
通过颠倒顺序再比较两个值是否一样

### 中位数  
左指针 和 右指针

### 动态规划
#### 斐波那契数列
```
fn(n) = fn(n-1) + fn(n-2);
```
### 分治回溯

### 贪心算法

## 链表
删除  
增加

## 二叉树
### 遍历
#### 顺序
先序遍历(中左右)  
![先序遍历](https://upload-images.jianshu.io/upload_images/2838289-4745ead9a13aaa9d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/632/format/webp)

中序遍历(左中右)  
![中序遍历](https://upload-images.jianshu.io/upload_images/2838289-c4b8e6b205daf67e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/646/format/webp)

后序遍历(左右中)  
![后序遍历](https://upload-images.jianshu.io/upload_images/2838289-40ce1a6b62a8dfc2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/634/format/webp)

#### 结构
广度优先遍历：通过队列来实现，记录其每一层的index，循环中是push => shift => push => shift => ...  

深度优先遍历：通过栈来实现。在压栈时，必须确保该节点的左右子树都为空，若不为空就需要将右子树压入栈，再压左子树。等左右子树压入之后，再将根节点压入栈。

#### 搜索
二叉搜索树  
左子节点总是小于或等于根节点，而右节点总是大于等于根节点

#### 堆
堆(Heap)是利用完全二叉树维护的一组数据，主要分为两种：  
最大堆：根节点中的值最大  
最小堆：根节点中的值最小

## 栈
栈(Stack)在计算机科学中是限定仅在表尾进行`插入`或`删除`操作的线性表。`栈`是一种数据结构，它按照`后进先出`的原则存储数据，`先进入`的数据被压入`栈底`，`最后的数据`在`栈顶`，需要读数据的时候从`栈顶`开始`弹出数据`   
栈是只能在`某一端插入`和`删除`的`特殊线性表`

## 函数
柯里化  
AOP  