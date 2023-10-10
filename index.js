document.getElementById("ra1").addEventListener("click", f1);
document.getElementById("ra2").addEventListener("click", f2);
document.getElementById("ra3").addEventListener("click", f3);
document.getElementById("ra4").addEventListener("click", f4);
document.getElementById("cls").addEventListener("change", cls1);
document.getElementById("se1").addEventListener("click", mysw);
document.getElementById("se2").addEventListener("click", mysw1);
document.getElementById("italic").addEventListener("click", itli1);
document.getElementById("italic1").addEventListener("click", itli2);

function f1(){
    let obj = document.getElementById("text1").value;
    document.getElementById("div2").innerHTML= obj;
    let obj1 = document.getElementById("div2");
    obj1.style.fontFamily="Imprint MT Shadow";


}
function f2(){
    let obj = document.getElementById("text1").value;
    document.getElementById("div2").innerHTML= obj;
    let obj1 = document.getElementById("div2");
    obj1.style.fontFamily="Brush Script MT";

}
function f3(){
    let obj = document.getElementById("text1").value;
    document.getElementById("div2").innerHTML= obj;
    let obj1 = document.getElementById("div2");
    obj1.style.fontFamily="Castellar";


}
function f4(){
    let obj = document.getElementById("text1").value;
    document.getElementById("div2").innerHTML= obj;
    let obj1 = document.getElementById("div2");
    obj1.style.fontFamily="Elephant";


}
function cls1(){
    let obj2 = document.getElementById("div2");
    obj2.style.color=document.getElementById("cls").value;
}
function mysw(){
    let obj3 = document.getElementById("div2");
    obj3.style.textShadow=" 5px 8px 5px black";
}
function mysw1(){
    let obj4 = document.getElementById("div2");
    obj4.style.textShadow="";
}
function itli1(){
    let obj5 = document.getElementById("div2");
    obj5.style.fontStyle="italic"
}
function itli2(){
    let obj5 = document.getElementById("div2");
    obj5.style.fontStyle=""
}