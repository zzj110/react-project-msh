import Mock from 'mockjs' // 引入mockjs


Mock.mock('http://localhost:3009/auth/admin', 'get', require('./login/admin')) 

Mock.mock('http://localhost:3009/auth/visitor', 'get', require('./login/visitor')) 

