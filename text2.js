var saleOffice={};   //定义售楼处

saleOffice.clientList=[];   //定义缓存列表

saleOffice.listen=function(fn){       //增加订阅者
	this.clientList.push(fn);    //订阅的消息添加进缓存列表
};

saleOffice.trigger=function(){
	for(var i=0,fn;fn=this.clientList[i++];){
		fn.apply(this,arguments)
	}
};

saleOffice.listen(function(price,squareMeter){  //小明订阅消息
	console.log('价格='+price);
	console.log('大小='+squareMeter);
});

saleOffice.listen(function(price,squareMeter){  //小红订阅消息
	console.log('价格='+price);
	console.log('大小='+squareMeter);
});

var value1=0,value2=0,value3=0;
for(var i=0;i