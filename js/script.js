document.getElementById("calcular").addEventListener("click", calcular)

function calcular() {
         var c1=document.getElementById("c1").value;
         var c2=document.getElementById("c2").value;
         var res = Math.pow(c1, 2) + Math.pow(c2, 2); 
         alert(res); 
   document.calcform.res.value = res;
}