const AV = require('leancloud-storage')

const APP_ID = 'yyEo1rXcrmIw0cI9oCVSVWHY-gzGzoHsz'
const APP_KEY = '1z8LX5oC2wxPQ3xGVPrzy61M'
const MASTER_KEY = 'crk8U7bnrXCer1Bvmyv6mTQq'

AV.init({
  appId: APP_ID,
  appKey: APP_KEY,
  masterKey: MASTER_KEY
})
AV.Cloud.useMasterKey()

module.exports = AV
