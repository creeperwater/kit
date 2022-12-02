console.log('Personal website: https://klps.top \nGithub address: https://github.com/creeperwater \nFocus on Twitter: https://twitter.com/624h2o \n%c Forward Forever ','background-color:#1772b4;color:#fff;font-size:20px;');
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
  };
  win.atr=function(input,name,value=false){
    if(value){
      input.setAttribute(name,value);
    }else{
      return input.getAttribute(name);
    }
  };
  win.get=function(url){
    return new Promise(function(resolve,reject){
      let get = new XMLHttpRequest();
      get.onload=function(){
        if(this.status==200){
          resolve(this.responseText);
        }else{
          reject(this.responseText);
        }
      };
      get.open('GET',url);
      get.send();
    });
  };
  win.loc=function(name,value=false){
    if(value){
      localStorage.setItem(name,value);
    }else{
      return localStorage.getItem(name);
    }
  };
  win.$.show=function(key){
    $(key,false).forEach(ele=> {
      ele.style.display=null;
    });
  };
  win.$.hide=function(key){
    $(key,false).forEach(ele=> {
      ele.style.display='none';
    });
  };
})(window);