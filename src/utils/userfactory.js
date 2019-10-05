import User from '../model/user.js'

export default function() {
  this.getUser=function(username) {
    let user = new User(username)
    user.getProfile()
    return user
  }
  this.defaultUser=function() {
    let user = new User()
    user.update({
      username: 'DefaultUser',
      email: 'someone@example.com',
      mobilephone: '10086100861',
      password: '',
      avatar: null
    })
    return user
  }
  this.currentUser=null
  this.getCurrentUser=function() {
    if(!this.currentUser){
      let usercache=localStorage.getItem('usercache')
      let user=JSON.parse(usercache)
      this.currentUser=user
    }
    return this.currentUser
  }
  this.updateCurrentUser=function(user) {
    this.user.update(user)
  }
  this.setUserCache=function(user) {
    let userstr=JSON.stringify(user)
    console.log(`set user cache: ${userstr}`)
    localStorage.setItem('usercache',userstr)
    let registeredUser=new User()
    registeredUser.update(user)
    this.currentUser=registeredUser
  }
  this.clearUserCache= function() {
    localStorage.removeItem('usercache')
  }
}
