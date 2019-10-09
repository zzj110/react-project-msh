
import { get } from './tools';
import * as config from './config';
import '@/mock/index'

// 管理员权限获取
export const admin = () => get({url: config.MOCK_AUTH_ADMIN});

// 访问权限获取
export const guest = () => get({url: config.MOCK_AUTH_VISITOR});