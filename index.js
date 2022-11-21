function showDesc(event){
    const id=String(event.target.id);
    const idHidden=id+"-hidden";
    let point=document.getElementById(id)
    point.classList.toggle("point-open");
    let ele=document.getElementById(idHidden);
    ele.classList.toggle("point-desc-visible");
}
function showFAQDesc(event){
    showDesc(event);
}
function changeNavColor(){
        document.getElementById("header").style.background="rgba(40, 58, 90, 0.9)";
}
function showMenuAndChangeIcon(event){
    document.querySelector(".nav-items").style.display="block";
    event.target.style.display="none";
    document.querySelector(".menu-hide").style.display="block";
}
function hideMenuAndChangeIcon(event){
    document.querySelector(".nav-items").style.display="none";
    event.target.style.display="none";
    document.querySelector(".fa-bars").style.display="block";
}
function hideMenuAndChangeIcon(){
    if(window.screen.width<=992){
    document.querySelector(".nav-items").style.display="none";
    document.querySelector(".fa-times").style.display="none";
    document.querySelector(".fa-bars").style.display="block";
    let dropdown=document.querySelector(".nav-dropdown");
    dropdown.style.width="30%";
    dropdown.style.margin="auto";
    }
}
function changeCardTitleColor(event){
    let title=getTitle(event);
    title.style.color="#47b2e4";
}
function changeBackToNormal(event){
    let title=getTitle(event);
    title.style.color="#37517e";
}
function getTitle(event){
    const id=String(event.target.id);
    const titleID=id+"-title";
    let title=document.getElementById(titleID);
    return title;
}
function showOptions(event){
    const id=String(event.target.firstElementChild.id);
    let dropdown=document.getElementById(id);
    dropdown.firstElementChild.style.display="block";
}
function hideOptions(event){
    const id=String(event.target.firstElementChild.id);
    let dropdown=document.getElementById(id);
    dropdown.firstElementChild.style.display="none";
}
function scrollToTop(){
    window.scrollTo(top);
}