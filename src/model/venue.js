export default function(...args) {
  this.id = this.name = this.address = this.introduction = this.phone = this.price = this.beginTime = this.endTime = null
  this.update = function(venue) {
    if (venue) {
      this.id = venue.id || this.id || 0
      this.name = venue.name || this.name || ''
      this.address = venue.address || this.name || ''
      this.introduction = venue.introduction || this.address || ''
      this.phone = venue.phone || this.phone || ''
      this.price = venue.price || this.price || ''
      this.beginTime = venue.beginTime || this.beginTime || ''
      this.endTime = venue.endTime || this.endTime || ''
    }
  }
  this._default = {
    id: 1145141919,
    name: '某场馆',
    address: '上海市 普陀区 中山北路3663号',
    introduction: '求实创造，为人师表。',
    phone: '4008823823',
    price: '$998',
    beginTime: '6:00',
    endTime: '21:00'
  }
  if (args.length == 0) {
    this.update(this._default)
  } else if (args.length == 1) {
    this.update(args[0])
  } else {
    this.update({
      id: args[0],
      name: args[1],
      address: args[2],
      introduction: args[3],
      phone: args[4],
      price: args[5],
      beginTime: args[6],
      endTime: args[7]
    })
  }
}
