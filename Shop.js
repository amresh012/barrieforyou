
const container=document.querySelectorAll(".container");
const card=document.querySelectorAll(".card");
const images=document.querySelectorAll(".image img");
const title=document.querySelectorAll(".info h2");
const purchase=document.querySelectorAll(".purchase");

container[0].addEventListener("mousemove",(e)=>{
  let xAxis=(window.innerWidth/4-e.pageX)/15;
  let yAxis=(window.innerHeight/4-e.pageY)/15;
  card[0].style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});
container[1].addEventListener("mousemove",(e)=>{
  let xAxis=((window.innerWidth*(3/4))-e.pageX)/15;
  let yAxis=((window.innerHeight/4)-e.pageY)/15;
  card[1].style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});

container[2].addEventListener("mousemove",(e)=>{
  let xAxis=((window.innerWidth/4)-e.pageX)/15;
  let yAxis=((window.innerHeight*2-(3/4))-e.pageY)/15;
  card[2].style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});

container[3].addEventListener("mousemove",(e)=>{
  let xAxis=((window.innerWidth*(3/4))-e.pageX)/15;
  let yAxis=((window.innerHeight*2-(3/4))-e.pageY)/15;
  card[3].style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});

for(let i=0;i<4;i++)
{
  container[i].addEventListener("mouseenter",(e)=>{
  card[i].style.transition="none";
  title[i].style.transform="translateZ(100px)";
  purchase[i].style.transform="translateZ(100px)";
  images[i].style.transform="translateZ(100px) rotateZ(-30deg)";


  });

  container[i].addEventListener("mouseleave",(e)=>{
  card[i].style.transform=`rotateY(0deg) rotateX(0deg)`;
  card[i].style.transition="transform 0.5s ease";
  title[i].style.transform="translateZ(0px)";
  purchase[i].style.transform="translateZ(0px)";
  images[i].style.transform="translateZ(0px) rotateZ(0deg)";
  });
}
//fire
