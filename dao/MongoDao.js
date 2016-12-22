var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/demo1';

module.exports = {
	insertData: function (req, res, next) {
		MongoClient.connect(DB_CONN_STR, function(err, db) {
			console.log("connect success!");
			var collection = db.collection('tb1');
			var data = [
				{
					"name" : "zk",
					"psw" : "1234"
				},
				{
					"name" : "zq",
					"psw" : "1234",
					"status" : ["P", "A"]
				}
			];
			collection.insert(data, function(err, result) {
				if(err) {
					console.log("Error:" + err);
					res.json("Error:" + err);
					return;
				}
				console.log(result);
				res.json(result);
				db.close();
				
			});
		});
	},
	selectData: function (req, res, next) {
		MongoClient.connect(DB_CONN_STR, function(err, db) {
			console.log("connect success!");
			var collection = db.collection('tb1');
			var whereStr = {"name" : "zk"};
			collection.find(whereStr).toArray(function(err, result) {
				if(err) {
					console.log("Error:" + err);
					res.json("Error:" + err);
					return;
				}
				console.log(result);
				res.json(result);
				db.close();
			});
		});
	},
	updateData: function (req, res, next) {
		MongoClient.connect(DB_CONN_STR, function(err, db) {
			console.log("connect success!");
			var collection = db.collection('tb1');
			var whereStr = {"name" : "zk"};
			var updateStr = {"age" : 100};
			collection.update(whereStr, updateStr, function(err, result){
				if(err){
					console.log("Error:" + err);
					res.json("Error:" + err);
					return;
				}
				console.log(result);
				res.json(result);
				db.close();

			});
		});
	},
	delData: function (req, res, next) {
		MongoClient.connect(DB_CONN_STR, function(err, db) {
			console.log("connect success!");
			var collection = db.collection('tb1');
			var whereStr = {"name" : "zq"};
			collection.remove(whereStr, function(err, result){
				if(err){
					console.log("Error:" + err);
					res.json("Error:" + err);
					return;
				}
				console.log(result);
				res.json(result);
				db.close();
			});
		});

	},
	invokeProcData: function (req, res, next) {
		MongoClient.connect(DB_CONN_STR, function(err, db) {
			console.log("connect success!");
			db.eval("get_tb1_count()", function(err, result) {
				if(err){
					console.log("Error:" + err);
					res.json("Error:" + err);
					return;
				}
				console.log(result);
				res.json(result);
				db.close();
			});
		});
	}
}