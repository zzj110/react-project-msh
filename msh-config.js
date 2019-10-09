var proxyTartet = 'http://41.205.56.17:8080'

module.exports = {
    category: 'NINGBO_SCREEN',
    mock: true,
    root:'msh',
    port: 8088,
    screen: 'screen',
    manage: 'manage',
    title:'智能警务实战平台',
    runtime: 'ipst', // ningbo ipst
    proxyTable: {
      '/restful': {
        target: proxyTartet,
        changeOrigin: true
        // pathRewrite: {'/restful': ''}
      }
    }
}
