# kit.js

Play dom, and more.

[中](README.md) | [En](README.en.md)

## 为什么选择kit.js?

- 比Jquery更加简洁迅速
- 函数式调用，节省内存
- 贴近原生js，便于扩展
- 作者自用，保持迭代和更新

## 如何使用kit.js?

### $(`name:string`,`type:bool`)

`$()`可以从dom中迅速选取需要的元素。`name`字段是必填的，为元素的CSS选择器名称。`type`字段是可选的，默认为`true`，意义为`$()`函数如果只选中一个对象就会返回这个对象而非对象列表。开发者一般在使用`forEach()`而不清楚元素数量时关闭它。

### atr(`dom:object`,`name:string`,`value:string`)

`atr()`可以获取某个元素的自定义属性。`dom`字段需要传入操作的对象，开发者一般结合`$()`使用。`name`字段需要传入属性名称。`value`是可选参数，有值时函数将新建或更新一个属性，没有值则返回当前属性值。

### get(`url:string`)

`get()`用于进行网络请求获取文本文件，会返回一个Promise对象。使用`then()`捕获成功事件并在异步线程中继续下一步操作。使用`catch()`捕获异常并进一步处理。

## 最佳实例

```html
<ul class="bar">
  <li to="#main"></li>
  <li to="#user"></li>
</ul>
<section id="main"></section>
<section id="user"></section>
<script src="kit.js"></script>
```

网页的一部分，展示了如何调用

```javascript
$('.bar>li').forEach(ele => {
  ele.onclick=function(){
    $('article>section').forEach(ele2=>{
      ele2.style.display='none';//隐藏所有页面
    });
    $(atr(this,'to')).style=null;//菜单指向的页面取消不显示
  }
});
```

这段脚本通过点击菜单切换页面显示

```javascript
get('data.json').then(res=>{
  $('#user').innerText=JSON.parse(res).name;
}).catch(rea=>{
  alert(rea);
})
```

这段脚本读取用户数据并注入