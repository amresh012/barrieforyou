
var headline=document.querySelector(".image h2");
const image=document.querySelector(".image");
var brandName=document.querySelector(".brandname");
var about=document.querySelector(".about");
var shop=document.querySelector(".shop");
var contact=document.querySelector(".contact");
var slider=document.querySelector(".slider");

const tl = new TimelineMax();

tl.fromTo(image,1,{height:"0%"},{height:"80%",ease:Power2.easeInOut})
  .fromTo(image,1.2,{width:"100%"},{width:"80%",ease:Power2.easeInOut})
  .fromTo(slider,1.2,{x:"-100%"},{x:"0%",ease:Power2.easeInOut},"-=0.8")
  .fromTo(brandName,0.5,{x:"30px",opacity:"0"},{x:"0",opacity:"1"},"-=0.5")
  .fromTo(about,0.5,{x:"30px",opacity:"0"},{x:"0",opacity:"1"},"-=0.4")
  .fromTo(shop,0.5,{x:"30px",opacity:"0"},{x:"0",opacity:"1"},"-=0.4")
  .fromTo(contact,0.5,{x:"30px",opacity:"0"},{x:"0",opacity:"1"},"-=0.4")
  .fromTo(headline,0.5,{x:"30px",opacity:"0"},{x:"0",opacity:"1"},"-=1");
