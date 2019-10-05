export default function(...args) {
  this._domain = args[0] || 'https://ecnuer996.cn'
  this._api = args[1] || '/MeetHere/api'
  this._getURL = function(url) {
    return this._domain + this._api + url
  }
  this.request = function(url, ...args) {
    let requestURL = this._getURL(url)
    console.log(`requesting ${requestURL}`)
    let request = require('request')
    if (url !== '') {
      request(requestURL, args)
    }
  }
}
