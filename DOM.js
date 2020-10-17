//DOM操作

//document的querySelector方法


//querySelector获取标签ID为Password的元素;
//.是class选择器  #为id选择器 很多css的选择器方法在这里都可以适用;例如 p,class;#id .class;
var Password = document.querySelector('#Password')
//querySelectorAll获取class为button或者标签名为button的全部元素;
//多个一样的就相当于为数组，通过下标取出来可以，字符串拼接不可;
var btnStorage = document.querySelectorAll('button')