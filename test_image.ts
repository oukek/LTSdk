import { LTSdk } from './src/index';
import * as fs from 'fs';
import * as path from 'path';

/**
 * 简单加载 .env 文件中的环境变量
 */
function loadEnv() {
    const envPath = path.resolve(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf-8');
        envContent.split('\n').forEach(line => {
            const part = line.trim();
            // 忽略注释和空行
            if (part && !part.startsWith('#')) {
                const index = part.indexOf('=');
                if (index > 0) {
                    const key = part.substring(0, index).trim();
                    const value = part.substring(index + 1).trim();
                    // 去掉可能的引号
                    const cleanValue = value.replace(/^['"]|['"]$/g, '');
                    process.env[key] = cleanValue;
                }
            }
        });
        console.log('.env loaded');
    } else {
        console.warn('.env file not found');
    }
}

async function runTest() {
    loadEnv();

    const appId = process.env.appId;
    const secret = process.env.secret;
    const baseUrl = process.env.baseUrl;

    if (!appId || !secret) {
        console.error('错误: .env 文件中未找到 appId 或 secret');
        process.exit(1);
    }

    // 初始化 SDK
    const sdk = new LTSdk({
        appId,
        secret,
        baseUrl: baseUrl || 'https://api.lingvisions.com'
    });

    const prompt = '一只小猫（动漫），在海边奔跑。';
    console.log(`--- 正在提交文生图任务 ---`);
    console.log(`提示词: ${prompt}`);

    try {
        // 1. 调用文生图接口
        const jobId = await sdk.aigc.text2img({
            prompt: prompt,
            ar: '1:1',
            style: 'anime' // 根据文案要求，这里明确指定动漫风格
        });

        console.log(`任务提交成功! Job ID: ${jobId}`);
        console.log('--- 开始轮询任务结果 ---');

        // 2. 循环调用查询结果
        let status = 'waiting';
        let result = null;
        let retryCount = 0;
        const maxRetries = 60; // 最多等待 2 分钟 (2s * 60)

        while (retryCount < maxRetries) {
            result = await sdk.job.getResult(jobId);
            status = result.status;

            process.stdout.write(`\r当前状态: ${status} ${'.'.repeat((retryCount % 3) + 1)}    `);

            if (status === 'succeed') {
                console.log('\n\n--- 任务执行成功! ---');
                console.log('结果详情:');
                console.log(JSON.stringify(result, null, 2));
                break;
            } else if (status === 'failed') {
                console.log('\n\n--- 任务执行失败 ---');
                console.log('失败原因:', result.message);
                break;
            } else if (status === 'canceled') {
                console.log('\n\n--- 任务已被取消 ---');
                break;
            }

            // 继续等待
            await new Promise(resolve => setTimeout(resolve, 2000));
            retryCount++;
        }

        if (retryCount >= maxRetries) {
            console.log('\n\n--- 轮询超时 ---');
        }

    } catch (error: any) {
        console.error('\n调用接口发生异常:', error.message);
    }
}

runTest();
