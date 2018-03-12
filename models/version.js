const AV = require('./index')


const T = 'VERSION'

exports.getQueryInstance = function () {
  return new AV.Query(T)
}
exports.InstanceClass = AV.Object.extend(T)
exports.relevanceInstance = function (val) {
  return AV.Object.createWithoutData(T, val)
}
