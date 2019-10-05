import User from './user'
import moment from 'moment'
export default function(...args) {
  this.user = this.time = this.target = this.content = null
  this.update = function(comment) {
    (this.user = comment.user || this.user || ''),
      (this.time = comment.time || this.time || ''),
      (this.target = comment.target || this.target || ''),
      (this.content = comment.content || this.content || '')
  }
  this._default = {
    user: new User(),
    time: moment(new Date()).format('YYYY-MM-DD HH-mm'),
    target: '某新闻',
    content:
      '这是第一行\n这是第二行\n这是第三行而且这行非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长'
  }
  if (args.length == 0) {
    this.update(this._default)
  } else if (args.length == 1) {
    this.update(args[0])
  } else {
    this.update({
      user: args[0],
      time: args[1],
      target: args[2],
      content: args[3]
    })
  }
}
