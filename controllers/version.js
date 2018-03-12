const Version = require('../models/version')

exports.getVersion = async (ctx, next) => {
  const versionQ = Version.getQueryInstance()
  versionQ.descending('createdAt')
  versionQ.limit(1)
  versionQ.include('version')
  let versionObj = await versionQ.find().then(v => {
    return v
  })
  let versions = await Promise.all(versionObj.map(v => {
    return v.get('version')
  })).then(vs => vs)

  ctx.body = {
    version: versions[0]
  }
}

exports.newVersion = async (ctx, next) => {
  const newVersion = ctx.request.body
  const versionIns = new Version.InstanceClass()
  versionIns.set('version', newVersion.version)
  versionIns.save()
}
