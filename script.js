const inputbox=document.querySelector('.input-box');
const searchbtn=document.getElementById('searchBtn');
const b1=document.querySelector('.b1');
const b2=document.querySelector('.b2');
const f=document.querySelector('.f');
const full=document.querySelector('.full');
const gst=document.querySelector('.gst-body');
searchbtn.addEventListener(("click"),()=>{
    gst.style.display="flex";
 full.style.display="inline-block";
b1.innerText=cgst();
b2.innerText=cgst();

let sum=cgst()+cgst();
f.innerText=sum;
    
});

function cgst() {
    
    let int=inputbox.value;
    let gst=0.025*int;
    return gst;
}