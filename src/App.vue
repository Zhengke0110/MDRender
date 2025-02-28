<template>
  <div class="app-container">
    <h1>Markdown Renderer with Mermaid Support</h1>
    <div class="editor-preview-container">
      <div class="editor">
        <textarea v-model="markdownContent" placeholder="输入Markdown内容..."></textarea>
      </div>
      <div class="preview">
        <MarkdownRender :content="markdownContent" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MarkdownRender from './components/MarkdownRender';

const markdownContent = ref(`# Mermaid 图表测试集

这个页面包含各种不同类型的 Mermaid 图表，用于测试渲染功能。

## 流程图 (Flowchart)

### 方向：从上到下 (TD)

\`\`\`mermaid
graph TD
    A[开始] --> B{是否已安装?}
    B -->|是| C[运行应用]
    B -->|否| D[安装应用]
    D --> C
    C --> E[结束]
\`\`\`

### 方向：从左到右 (LR)

\`\`\`mermaid
flowchart LR
    id1(开始) --> id2[处理]
    id2 --> id3{条件}
    id3 -->|是| id4[处理A]
    id3 -->|否| id5[处理B]
    id4 --> id6(结束)
    id5 --> id6
\`\`\`

### 复杂流程图

\`\`\`mermaid
flowchart TD
    A[开始] --> B{条件1?}
    B -->|Yes| C[步骤1]
    B -->|No| D[步骤2]
    C --> E{条件2?}
    D --> E
    E -->|Yes| F[步骤3]
    E -->|No| G[步骤4]
    F --> H[结束]
    G --> H
    B -->|Maybe| I[步骤5]
    I --> H
\`\`\`

## 时序图 (Sequence Diagram)

### 基础时序图

\`\`\`mermaid
sequenceDiagram
    participant 客户端
    participant 服务器
    客户端->>服务器: 请求数据
    服务器-->>客户端: 响应数据
\`\`\`

### 高级时序图

\`\`\`mermaid
sequenceDiagram
    actor User
    participant Browser
    participant API
    participant DB
    
    User->>Browser: 输入网址
    Browser->>API: GET /api/data
    API->>DB: 查询数据
    DB-->>API: 返回数据
    API-->>Browser: JSON 响应
    Browser-->>User: 显示数据
    
    Note over Browser,API: 数据加载过程
    
    User->>Browser: 点击提交按钮
    Browser->>API: POST /api/data
    API->>DB: 存储数据
    DB-->>API: 确认
    API-->>Browser: 成功响应
    Browser-->>User: 显示成功消息
\`\`\`

## 类图 (Class Diagram)

\`\`\`mermaid
classDiagram
    class Animal {
        +int age
        +String gender
        +isMammal()
        +mate()
    }
    class Duck {
        +String beakColor
        +swim()
        +quack()
    }
    class Fish {
        -int sizeInFeet
        -canEat()
    }
    class Zebra {
        +bool is_wild
        +run()
    }
    
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
\`\`\`

## 状态图 (State Diagram)

\`\`\`mermaid
stateDiagram-v2
    [*] --> 待处理
    待处理 --> 处理中 : 开始处理
    处理中 --> 已完成 : 处理完毕
    处理中 --> 错误 : 处理失败
    错误 --> 处理中 : 重试
    已完成 --> [*]
    错误 --> [*] : 放弃
\`\`\`

## 实体关系图 (ER Diagram)

\`\`\`mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER {
        string name
        string email
        string address
    }
    ORDER ||--|{ LINE_ITEM : contains
    ORDER {
        int id
        date created_at
        float total_amount
    }
    LINE_ITEM {
        int id
        string product_name
        int quantity
        float price
    }
\`\`\`

## 甘特图 (Gantt Chart)

\`\`\`mermaid
gantt
    title 项目计划
    dateFormat  YYYY-MM-DD
    section 设计阶段
    需求分析           :a1, 2023-01-01, 7d
    概要设计           :a2, after a1, 5d
    详细设计           :a3, after a2, 10d
    section 开发阶段
    编码               :b1, after a3, 15d
    测试               :b2, after b1, 7d
    修复Bug            :b3, after b2, 5d
    section 部署阶段
    部署准备           :c1, after b3, 3d
    系统上线           :c2, after c1, 2d
    验收               :c3, after c2, 3d
\`\`\`

## 饼图 (Pie Chart)

\`\`\`mermaid
pie
    title 项目时间分配
    "设计" : 25
    "开发" : 40
    "测试" : 20
    "部署" : 10
    "文档" : 5
\`\`\`

## Git图 (Git Graph)

\`\`\`mermaid
gitGraph
    commit
    branch dev
    checkout dev
    commit
    commit
    checkout main
    merge dev
    commit
    branch feature
    checkout feature
    commit
    commit
    checkout main
    merge feature
    commit
\`\`\`

## 用户旅程图 (User Journey)

\`\`\`mermaid
journey
    title 用户购买流程体验
    section 访问网站
      找到产品: 5: User
      浏览详情: 3: User
    section 购买流程
      添加到购物车: 4: User
      结账: 2: User
      付款: 3: User
    section 售后
      收到产品: 5: User
      使用产品: 4: User
      客户支持: 1: User
\`\`\`

## C4图 (C4 Diagram)

\`\`\`mermaid
C4Context
    title 系统上下文图
    
    Person(customer, "客户", "使用系统的人")
    System(system, "电商系统", "允许客户浏览商品和下单")
    System_Ext(payment, "支付系统", "处理支付")
    System_Ext(delivery, "配送系统", "处理商品配送")
    
    Rel(customer, system, "使用")
    Rel(system, payment, "调用API")
    Rel(system, delivery, "调用API")
\`\`\`
`);
</script>

<style>
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
}

.editor-preview-container {
  display: flex;
  gap: 20px;
  height: calc(100vh - 150px);
  min-height: 500px;
}

.editor, .preview {
  flex: 1;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: auto;
}

.editor textarea {
  width: 100%;
  height: 100%;
  border: none;
  padding: 16px;
  font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 14px;
  line-height: 1.6;
  resize: none;
  outline: none;
}

.preview {
  padding: 16px;
}
</style>