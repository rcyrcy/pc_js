var nav=document.getElementsByClassName("nav");
var lsec=document.getElementsByClassName("left_section");
for(var lni=0;lni<nav.length;lni++){
    nav[lni].index=lni;
    nav[lni].onclick=function(){
        for(var lnk=0;lnk<nav.length;lnk++){
            nav[lnk].style.color="#000";
            nav[2].style.color="#666";
            nav[lnk].style.borderBottom="0";
            lsec[lnk].style.display="none";
        }
        this.style.color="#ef4238";
        this.style.borderBottom="2px solid #ef4238";
        lsec[this.index].style.display="block";
    }
}
nav[2].onclick=null;
var duanp=document.getElementById("duanping_list");
var xduanp=document.getElementById("xieduanping");
var but=document.getElementById("pinglun_but");

but.onclick=function(){
    duanp.innerHTML+=`
    <li>
        <p class="duanping_user">
            <img src="../img/user11.jpg">
            <em>自由生命的追击者</em>
            <i class="iconfont icon-good-filling zan" id="zan">0</i>
        </p>
        <p class="duanping_txt">
            ${xduanp.value}
        </p>
    </li>
    `
    xduanp.value="";
}
duanp.onclick=function(ev){
    if(ev.target.id==="zan"){
        var zan=parseInt(ev.target.innerText)+1;
        console.log(zan)
        ev.target.innerHTML=`${zan}`;
    }
}