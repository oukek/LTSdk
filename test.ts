import { LTSdk } from './src/index';
import { generateSignature } from './src/providers/lt/utils';

// 1. 测试签名生成逻辑
const appId = 'test-app';
const secret = 'test-secret';
const uri = '/api/text2img';
const salt = 'test-salt-uuid';
const timestamp = 1672531200;

const signature = generateSignature(appId, secret, uri, salt, timestamp);
console.log('Generated Signature:', signature);

// 2. 测试 SDK 初始化与调用结构
const sdk = new LTSdk({
    appId,
    secret,
    baseUrl: 'https://api.lingtuipoddy.com'
});

console.log('SDK initialized.');
console.log('Available modules:', Object.keys(sdk));

console.log('Local tests passed.');
