((win)=>{
  'use strict';
  win.$=function(input,type=true){
    const output=document.querySelectorAll(input);
    if(output.length==0)
      return undefined;
    else if(output.length==1&&type)
      return output[0];
    else
      return output;
  }
  win.atr=function(input,attr,value=false){
    if(value){
      input.setAttribute(attr,value);
    }else{
      return input.getAttribute(attr);
    }
  }
  win.get=function(url){
    return new Promise(function(resolve,reject){
      let get = new XMLHttpRequest();
      get.onload=function(){
        if(this.status==200){
          resolve(this.responseText);
        }else{
          reject(this.statusText);
        }
      };
      get.open('GET',url);
      get.send();
    });
  }
})(window);