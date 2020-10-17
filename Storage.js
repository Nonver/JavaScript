//localStorage  sessionStorage缓存的区别
//localStorage 缓存可以一直存在，除非自己清除
//sessionStorage 有生命周期，浏览器或窗口关闭缓存就不存在了
//获取浏览器的DOM
//querySelector获取#id的元素
var Name = document.querySelector('#Name')
var Name = document.querySelector('#NameR')
var Password = document.querySelector('#Password')
//querySelectorAll获取所有class是button的元素，或是标签
var btnStorage = document.querySelectorAll('button')
//给变量绑定click事件  setItem添加缓存 set 添加
btnStorage[0].addEventListener('click',function(e){
	localStorage.setItem(Name.value,Password.value)
})
//removeItem移除缓存，条件为key就移除 remove删除
btnStorage[1].addEventListener('click',function(e){
	localStorage.removeItem(NameR.value)
})
//clear清空缓存，不需要任何参数，全部清空
btnStorage[2].addEventListener('click',function(e){
	localStorage.clear()
})