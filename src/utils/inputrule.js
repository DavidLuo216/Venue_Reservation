/*  
    handle input data.
    all functions return '' when the data is correct, otherwise the error message string.
*/
export default function() {
  this.elFormValidator = function(value, validator, callback) {
    let result = validator.call(this, value)
    if (result === '') {
      callback()
    } else {
      callback(result)
    }
  }

  this.usernameValidator = function(username) {
    if (username === '') {
      return '请输入用户名'
    } else {
      let firstchar = username[0]
      if (!Number.isNaN(Number.parseInt(firstchar))) {
        return '用户名不可以数字开头'
      } else {
        return ''
      }
    }
  }
  this.passwordValidator = function(password) {
    if (password === '') {
      return '请输入密码'
    } else if (password.length < 6) {
      return '密码至少6位'
    } else {
      return ''
    }
  }
  this.mobileRex = new RegExp('^(\\+\\d{2})?\\d{11}$')
  this.mobilephoneValidator = function(mobilePhone) {
    if (mobilePhone === '') {
      return '请输入手机号'
    } else if (!this.mobileRex.test(mobilePhone)) {
      return '手机号格式不正确'
    } else {
      return ''
    }
  }
  this.telephoneRex = new RegExp('^(\\d{3,4})?\\d{8}$')
  this.telephoneValidator = function(telephone) {
    if (telephone === '') {
      return '请输入固定电话'
    } else if (!this.telephoneRex.test(telephone)) {
      return '固定电话的格式不正确'
    } else {
      return ''
    }
  }
  this.emailRex = new RegExp('^\\w+@(\\w)+(\\.(\\w)+)+$')
  this.emailValidator = function(email) {
    if (email === '') {
      return '请输入邮箱'
    } else if (!this.emailRex.test(email)) {
      return '邮箱格式不正确'
    } else {
      return ''
    }
  }
}
