//essa e a LOWDB, umas das DBs que instalei em seu bot!
const low = require("lowdb")
const fsync = require("lowdb/adapters/FileSync")
const adap = new fsync('DATABASE/image/Randon-images.json')
const db = low(adap)
exports.db = db

exports.addyiffy = async function(member){
	this.db.get('all').push(member).write()
}