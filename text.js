
function quickSort(array){
    function sort(prev, numsize){
        var nonius = prev;//0
        var j = numsize -1;//8
        var flag = array[prev];//array[0]
        if ((numsize - prev) > 1) {
            while(nonius < j){
                for(; nonius < j; j--){
                    if (array[j] < flag) {
                        array[nonius++] = array[j];　//a[i] = a[j]; i += 1;
                        break;
                    };
                }
                for( ; nonius < j; nonius++){
                    if (array[nonius] > flag){
                        array[j--] = array[nonius];
                        break;
                    }
                }
            }
            array[nonius] = flag;
            sort(0, nonius);
            sort(nonius + 1, numsize);
        }
    }
    sort(0, array.length);
    return array;
}
var a = [5,6,8,4,2,1,9];
quickSort(a)

---
title: 计算机网络体系结构
date: 2016-03-27 23:43:56
tags:
	- 计算机网络
---
# **OSI的体系结构：**

- 物理层
- 数据链路层
- 网络层
- 运输层
- 会话层
- 表示层
- 应用层

# **TCP/IP的体系结构**

- 物理层
- 网际层IP
- 运输层(TCP)
- 应用层(HTTP,FTP)

# **课本中的五层结构**

- 物理层
- 数据链路层
- 网络层
- 运输层
- 应用层


HTTPS和HTTP的区别：HTTPS就是在运输层(TCP)和应用层(HTTP)之间加了一层安全协议，这个协议叫做SSL(非对称加密算法)。



/*函数parseQuery用于解析url查询参数。
语法如下：
	var obj = parseQuery(query)
	query是被解析的查询参数，函数返回解析后的对象。
使用范例如下：
	var jerry = parseQuery("name=jerry&age=1");
	jerry; 	返回值：{name: " jerry ", age: "1"}
	var tom = parseQuery("name= tom &age=12&gender&");
	tom; 	返回值：{name: "tom", age: "12", gender: ""}
请写出函数parseQuery的实现代码。*/

var str='name=tom&age=12&gender&';

function parseQuery(query){
	var arr=query.split('&');
	var obj={};
	for(var i=0;i<arr.length;i++){ if(arr[i]!="=""){" var="" arr1="arr[i].split('=');" property="arr1[0],value=arr1[1];" if(value="=undefined){" value="" ;="" }="" obj[property]="value;" return="" obj;="" parsequery(str)="" *js语言精粹笔记*="" function.prototype.method="function(name,func){" this.prototype[name]="func;" this;="" string.prototype.method="function" (name,="" func)="" {="" };="" string.method('deentityify',="" function="" ()="" 字符实体表。映射字符实体的名字到对应的字符。="" entity="{" quot:="" '"',="" lt:="" '<',="" gt:="" '="">'
    };
    // 返回deentityify方法
    return function () {
    // 这才是deentityify方法。它调用字符串的replace的方法，
    // 查找‘&’开头和‘;’结束的子字符串。如果这些字符可以在字符实体表中找到，
    // 那么就将该字符实体替换为映射表中的值。
        return this.replace(/&([^&;]+);/g,
            function (a, b){
                var r = entity[b];
                return typeof r === 'string' ? r : a;
                //console.log(entity[b]);
                console.log(a);
                console.log(b);            }
        );
    };
}());   // 注意这里，匿名函数已被调用


/*
replace() 方法的参数 replacement 可以是函数而不是字符串。
在这种情况下，每个匹配都调用该函数，它返回的字符串将作为替换文本使用。
该函数的第一个参数是匹配模式的字符串。
接下来的参数是与模式中的子表达式匹配的字符串，可以有 0 个或多个这样的参数。
接下来的参数是一个整数，声明了匹配在 stringObject 中出现的位置。
最后一个参数是 stringObject 本身。
*/


'&lt;&quot;&gt;'.deentityify();
/*笔记结束*/

'&lt;&quot;&gt;'.replace(/&([^&;]+);/g,' ')

name = 'aaa bbb ccc';
uw=name.replace(/\b\w+\b/g, function(word){
	console.log(word)
	return word.substring(0,1).toUpperCase()+word.substring(1);}
);

/*斐波那契数列*/

var fibonacci=function(n){
	return n < 2 ? n : fibonacci(n-1)+fibonacci(n-2);
}


function getElementsByClassName(element, names) {
      if (element.getElementsByClassName) { //特性侦测
          return element.getElementsByClassName(names)[0]
          //优先使用W3C规范
      } else {
          var elements = element.getElementsByTagName('*');//获取所有后代元素
          //选择包含类名的元素
          var result = [];
          var element,
              classNameStr,
              flag;
          names = names.split(' ');//将字符串分割为字符串数组，方便下面循环判断
          for (var i = 0; element = elements[i]; i++) {
              classNameStr = ' ' + element.className + ' ';//返回所有后代元素的字符串
              flag = true;
              for (var j = 0, name; name = names[j]; j++) {
                  if (classNameStr.indexOf(' ' + name + '') == -1) {//索引所有后代元素的字符串是否含有name
                      flag = false;
                      break;
                  }
              }
              if (flag) {
                  result.push(element);
              }
          }
          return result[0];
      }
}



/*函数getCookies()解析document.cookie,并返回一个对象， 
该对象的属性名为cookie的name，属性值为cookie的value。
请写出该函数的实现代码*/

function getCookies(){
	var cookie={};
	var all=document.cookie;
	if(all===''){
		return cookie;
	}
	var list=all.split('; ');
	console.log(list[0])
	for(var i=0;i<list.length;i++){ var="" item="list[i];" name="list[i].split('=')[0].toString();" value="list[i].split('=')[1].toString();" cookie[name]="value;" }="" return="" cookie;="" function="" getcookies(){="" cookie="{};" all="document.cookie;" if(all="==''){" list="all.split(';" ');="" console.log(list[0])="" for(var="" i="0;i<list.length;i++){" p="item.indexOf('=');" +="" 1);="" *函数fadeout(element)实现了元素的淡出效果（即透明度从1变到0），="" 动画时间为1秒钟。="" 用定时器setinterval实现动画，写出函数fadeout的实现代码：*="" fadeout(element){="" 设置元素透明度,透明度值按ie规则计,即0~100="" setopacity(ele,v){="" ev.filters="" ?="" ev.style.filter="alpha(opacity=" v="" ')'="" :="" ev.style.opacity="v" 100;="" val="100;" setopacity(element,100);="" 设置初始透明度为100="" step="function(){" val-="1;" if(val="">=0){
			setOpacity(element,val);
		}else if(val<0){ 10="" clearinterval(intervalid);="" 清除定时器，并且将元素设置为display：none="" element.style.display="none" ;="" }="" var="" intervalid="setInterval(step,10);" 每10毫秒执行一次，动画时间为1秒，即需要执行100次="" *="" str="formatDate(date," pattern);="" 其中pattern的全格式为"yyyy-mm-dd="" hh:mm:ss"="" 使用范例如下：="" date="new" date(2001,="" 8,="" 11,="" 26,="" 8);="" formatdate(date,="" "yyyy");="" 返回值：="" "2001"="" "yyyy-mm-dd");="" "2001-09-11"="" "yyyy-mm-dd="" hh");="" "2001-09-11="" 08"="" hh:mm:ss");="" 08:26:08"="" 请写出函数formatdate的实现代码。="" function="" formatdate(data,pattern){="" len="pattern,length;" switch(len)="" {="" case="" 4:="" return="" date.getfullyear();="" break;="" 1:="" format(date){="" date.getfullyear()+'-'="" +padding(data.getmonth()+1)+'-'="" +padding(date.getdate())+'="" '="" +padding(date.gethours())+':'="" +padding(date.getminutes())+':'="" +padding(date.getseconds());="" };="" padding(num){="" num="" <="" ?="" '0'="" +="" :="" ''="" num;="" arr="[1,2,4,6,7,9,19,20,30,40,45,47];" search(arr,num){="" array.prototype.myindexof="function(num){" for(var="" i="0,j;i<this.length;i++){" j="this[i];" if(num="=j){" i;="" -1;="" arr.myindexof(45)="" search(arr,45);="" array.prototype.indexof="function" (e)="" for="" (var="" j;="" i++)="" if="" (j.indexof(e)="" !="-1)" 　　="" 　　return="" *function="" clone(param){="" if(typeof(param)="" ){="" param;="" else="" if(param="" instanceof="" array){="" arr[i]="param[i]" arr;="" 'object'){="" obj="{};" o="" in="" param){="" obj[o]="param[o];" obj;="" }*="" *var="" t="type(1)" typeof="" number(1))="" string("abc"))="" object.prototype.tostring.call="" date)="" object.prototype.tostring.call(param).slice(8,-1).tolowercase();="" type(param){="" if(object.prototype.tostring.call(param).slice(8,-1)="==" 'null'){="" 'null';="" number){="" 'number';="" }else="" string){="" 'string';="" date){="" 'date';="" regexp){="" 'regexp';="" 'array';="" }else{="" <script="" type="text/javascript">
function search(arr, dst) {
    var first = 0,
        last = arr.length - 1,
        middle = Math.floor((first + last)/2);
    while(arr[middle] != dst && first < last){
        if (dst < arr[middle]) {
                    last  = middle - 1;
        } else {
                    first = middle + 1;
        }
        middle = Math.floor((first + last)/2);
    }
    return middle;
    }
var arr = [1, 2, 4, 6, 7, 9, 19,20, 30, 40, 45, 47];
    alert(search(arr, 47));















function type(param){
	if(param instanceof Array || param instanceof Date){
		return Object.prototype.toString.call(param).slice(8,-1);
	}else{
		return typeof param;
	}
}

/*if(typeof Object.beget !== 'function'){
	Object.create=function(o){
		var F=function(){};
		F.prototype=o;
		return new F();
	}
}*/
























9多选(4分)
下列关于js描述正确的有
得分/总分

A.
js中可以使用prototype实现原型继承
 1.33 /4.00

B.
函数的apply和call方法可以指定函数执行中的this
 1.33 /4.00

C.
在对象构造器中，可以使用this创建对象的属性
 1.33 /4.00

D.
js中不能给未定义的变量赋值
10判断(1分)
Js函数运行在它们被定义的作用域里
得分/总分

A.√ 1.00 /1.00  对

B.×
11判断(1分)
使用new Function()创建的函数代码中的this是全局对象
得分/总分

A.√

B.× 0.00 /1.00
12判断(1分)
Js中所有函数都可以当成构造器
得分/总分

A.× 1.00 /1.00

B.√
13判断(1分)
catch语句可以临时改变js变量作用域
得分/总分

A.√ 1.00 /1.00

B.×
14判断(1分)
Js使用动态作用域
得分/总分

A.√

B.× 1.00 /1.00
15判断(1分)
Js有块级作用域
得分/总分

A.√

B.×




var a = 6;
function test() {
    var a = 7;
    function again() {
        var a = 8;
        alert(a);
    }
    again();
    alert(a);
}
test();
alert(a);   6


var obj = {}, count = 0;
function logArray(value, index, array) {
	count++;
	obj[count] = value;
}
[1, 2, , 4].forEach(logArray);


/*
如何实现浏览器兼容版的element.children
element.children能够获取元素的元素子节点，
但是低版本的ie不支持，如何在低版本的ie上兼容类似的功能。

*/

function getElementChild(element){
	if(!element.children){

		var arr=[];
		var nodeList=element.childNodes;
		for(var i=0;i</0){></list.length;i++){></arr.length;i++){>