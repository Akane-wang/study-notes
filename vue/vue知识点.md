# vue基础(形成自己的知识体系)

## 安装

### 兼容性

- vue不支持IE8以下版本（为什么？）
因为Vue使用了IE8无法模拟的ECMAScript 5 特性Object.defineProperty去实现响应原理。
  - Object.defineProperty？
    vue使用Object.defineProperty实现了数据劫持。
