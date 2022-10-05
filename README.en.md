# kit.js

Play dom, and more.

[中](README.md) | [En](README.en.md)

## Why choose kit.js?

- Quicker and smaller than Jquery
- Call function, save memory
- Close to native JS, easy to expand
- Built for my self, keep iteration and update

## How to use kit.js?

### $(`name:string`,`type:bool`)

`$()` can select needy dom from the dom tree. `name`is CSS selector name of the element. It's mandatory.`type` is optional. Default `true`.It means if `$()` function only choose one dom then return this dom instead of the dom list. For example ,when using `forEach()` and not sure how many element will input, we turn it off.

### atr(`dom:object`,`name:string`,`value:string`)

`atr()` gets the custom attributes of an element. The `dom` field needs to be input with the object of the operation, which developers usually use in conjunction with `$()`. The `name` field requires the name of the property to be passed in. `value` is an optional parameter. If there is a value, the function creates or updates an attribute. If there is no value, the current attribute value will be returned.

### get(`url:string`)

`get()` is used to make a network request for a text file and returns a Promise object. Use `then()` to capture the success event and proceed to the next step in the asynchronous thread. Use `catch()` to catch the exception and handle it further.

## Examples

```html
<ul class="bar">
  <li to="#main"></li>
  <li to="#user"></li>
</ul>
<section id="main"></section>
<section id="user"></section>
<script src="kit.js"></script>
```

Part of the page that shows how to call.

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

This script switches pages by clicking the menu.

```javascript
get('data.json').then(res=>{
  $('#user').innerText=JSON.parse(res).name;
}).catch(rea=>{
  alert(rea);
})
```

This script reads user data and injects it to HTML.