import User from './user'
import moment from 'moment'
export default function(...args){
    this.user=args[0]||new User()
    let date=new Date()
    let time=moment(date).format('YYYY-MM-DD HH:mm')
    this.time=args[1]||time
    this.target=args[2]||'某新闻'
    this.content=args[1]||'（这是一条空评论）'
}