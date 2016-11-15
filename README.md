# 前言

公司做一套产品的时候，会形成一套独特的设计风格，交互风格，那么我们可以把这些几乎各个项目公用的js+css提取成一个：业务核心库（暂时这么叫吧，不知道专业术语叫成什么样）。
本项目只是提供一个demo，命名为coreui(为什么加ui呢？因为要说明里面是有css设计的)

# 工程目录结构

可参考：https://github.com/zmrdlb/projectdemo；

核心库没那么复杂那么多的东西，所以有些目录没有；

同样，这次假定coreui是PC端的业务核心库，所以引用的js代码库是：https://github.com/zmrdlb/widgetpc.git

# 部分目录说明

## 1.html

css/page/global.css里全局样式的静态页面demo，放在html/common里面（其实可以不用放在common里的，习惯了）

## 2. js

- ui : 全局ui组件，比如一版alert提示框

## 3. section

核心库组件使用demo

## ps:

不用担心css命名冲突问题，因为css命名空间为：.coreui-g-*

> 具体使用方式，请见：https://github.com/zmrdlb/myproject-addcoreui

