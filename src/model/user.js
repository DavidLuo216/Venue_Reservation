import Backend from '../utils/backend.js'

let backend = new Backend()

export default function(...args) {
  this.username = args[0] || ''
  this.password = args[1] || ''
  this.email = args[2] || ''
  this.mobilephone = args[3] || ''
  this.avatar = args[4] || null

  this.getProfile = function() {
    backend.request('')
    let defaultUser = {
      username: 'DefaultUser',
      email: 'someone@example.com',
      mobilephone: '10086100861',
      password: '',
      avatar: null
    }
    this.update({
      username: this.username || defaultUser.username,
      password: this.password || defaultUser.password,
      email: this.email || defaultUser.email,
      mobilephone: this.mobilephone || defaultUser.mobilephone,
      avatar: this.avatar || defaultUser.avatar
    })
  }
  this.update = function(user) {
    this.username = user.username || ''
    this.password = user.password || ''
    this.email = user.email || ''
    this.mobilephone = user.mobilephone || ''
    this.avatar = user.avatar || null
  }
}
