function clone(param){
	if(typeof(param) !='object'){
		return param;
	}
	else if(param instanceof Array){
		var arr=[];
		for(var i=0;i