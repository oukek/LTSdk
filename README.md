# LTSdk

灵图 (Lingtuipoddy) 开放平台 Node.js SDK。
支持 AIGC 生图、效果合成等全量接口。

## 安装

```bash
npm install ltsdk
```

## 快速开始

```typescript
import { LTSdk } from 'ltsdk';

const client = new LTSdk({
  appId: 'your-app-id',
  secret: 'your-app-secret',
  baseUrl: 'https://api.lingtuipoddy.com' // 请替换为实际 API 地址
});

async function main() {
  try {
    // 1. 提交任务：文生图
    const jobId = await client.aigc.text2img({
      prompt: '一只可爱的赛博朋克风格的猫',
      style: 'anime',
      num: 1
    });
    console.log('任务提交成功, JobId:', jobId);

    // 2. 轮询结果
    const result = await client.job.getResult(jobId);
    console.log('任务状态:', result.status);
    
    if (result.status === 'succeed') {
      console.log('生成结果:', result.urls);
    }

  } catch (error) {
    console.error('调用失败:', error);
  }
}

main();
```

## 模块说明

SDK 根据业务功能划分为以下模块：

### 1. AIGC 模块 (`client.aigc`)

包含所有基础生图、修图能力：

- `text2img`: 文生图
- `text2imgPro`: 文生图进阶
- `img2img`: 图生图
- `seamless`: 无缝拼接图
- `transparent`: 免抠素材生成
- `img2text`: 图生文
- `title`: 商品图提取标题
- `matting`: 智能抠图
- `lineart`: 线稿提取
- `upscale`: 无损放大
- `remove`: 智能擦除
- `vector`: 转矢量图
- `reimage`: 相似图裂变
- `expand`: 扩图
- `detect`: 图案裁剪
- `styleTransfer`: 风格转绘
- `artWord`: 艺术字生成

### 2. 效果合成模块 (`client.synthesis`)

包含电商合成、模特试衣等高级功能：

- `changeBackground`: 商品图换背景
- `model`: AI模特
- `dress`: AI试衣
- `getBackgrounds`: 查询背景列表
- `getFaces`: 查询模特脸列表

### 3. 任务模块 (`client.job`)

- `getResult`: 查询任务结果
- `cancel`: 取消任务

## 开发与贡献

```bash
# 安装依赖
npm install

# 编译
npm run build

# 测试
npm test
```
