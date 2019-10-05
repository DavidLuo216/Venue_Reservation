import Backend from '../utils/backend.js'

let backend = new Backend()

export default function(...args) {
  this.username = this.password = this.email = this.mobilephone = this.avatar = null
  this.update = function(user) {
    console.log(`using ${JSON.stringify(user)} to update`)
    if (user) {
      this.username = user.username || this.username || ''
      this.password = user.password || this.password || ''
      this.email = user.email || this.email || ''
      this.mobilephone = user.mobilephone || this.mobilephone || ''
      this.avatar = user.avatar || this.avatar || null
    }
    console.log(JSON.stringify(this))
  }
  this._default = {
    username: 'DefaultUser',
    email: 'someone@example.com',
    mobilephone: '10086100861',
    password: '123456',
    avatar: null
  }
  this.getProfile = function() {
    backend.request('')
    let user = JSON.parse(JSON.stringify(this))
    this.update(this._default)
    this.update(user)
  }

  if (args.length == 0) {
    this.update(this._default)
  } else if (args.length == 1) {
    this.update(args[0])
  } else {
    this.update({
      username: args[0],
      password: args[1],
      email: args[2],
      mobilephone: args[3],
      avatar: args[4]
    })
  }
}
