let va = document.querySelector(".sss"),
dll = document.querySelector(".f");

dll.onlongClick=function (){
    console.log("enter")
}

document.onclick=function (a){


va.style.cssText = "color:rgb(0,0,0)"

va.focus(va)
 
    
let ene = va.value.charAt(va.value.length -1); va.focus();

if(a.path[0].className == "calc"){
        
va.value += a.path[0].textContent;
        
        
        
}else if(a.path[0].className == "calc ele"){

if(!isNaN(ene) && va.value != ""){

va.value += a.path[0].innerHTML

}else if(ene != "" && ene != a.path[0].textContent) {

    console.log("aa")

va.value = va.value.replaceAll(ene,a.path[0].textContent)

}

}else if(a.path[0].className == "calc del all"){

va.value = ''

}else if(a.path[0].className == "calc val"){

if( !isNaN(ene)){

 let vwll = va.value.replaceAll('×','*').replaceAll("÷","/");
va.value = eval(vwll);
va.style.cssText="color:rgb(0,255,0)"

}
        


}else if(a.path[0].className == "del f"){


va.value = va.value.slice(0, va.value.length - 1);

}

}