import {icons , menu, bar , alert, alertError, spinner ,reservationHTML, formCard , cardUser} from "./support.js";

function swipper(){
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
    });
}

if ("loading" in HTMLImageElement.prototype) {
  const img=document.querySelectorAll("IMG");
  img.forEach(child=>child.setAttribute("loading","lazy"));
}

function insertIcons(){

  const sun_moon_menu=document.getElementById("sun-moon-menu");
  const sun_moon_iconu=document.getElementById("icon-sun-moon");
  const body=document.querySelector("body");
  let state;

  body.classList.contains("darkmode") ? state="sun" : null;
  !body.classList.contains("darkmode") ? state="moon" : null;


  isInPage(sun_moon_iconu)? sun_moon_iconu.innerHTML =icons[state] : null;
  isInPage(sun_moon_menu)? sun_moon_menu.innerHTML =icons[state] : null;

}

function darkmode(){

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    insertIcons();
    const body=document.querySelector("body");
    body.classList.add("darkmode");

    document.onclick=(e)=>{
 
      if(containNode(e.target,"sun-moon-menu") || containNode(e.target,"icon-sun-moon")){
        
        if(body.classList.contains("darkmode")){

          body.classList.remove("darkmode");

          insertIcons();

        }else{
          body.classList.add("darkmode");
          insertIcons();
        }

      }

    }

  }else{
    insertIcons();
  }

}

const meatFood = document.getElementById("meat");
isInPage(meatFood)? meatFood.onclick=Menu : null;


const pastaFood = document.getElementById("pasta");
isInPage(pastaFood) ? pastaFood.onclick=Menu : null;


const seafoodFood = document.getElementById("seafood");
isInPage(seafoodFood) ? seafoodFood.onclick=Menu : null;

const allMenu=document.querySelector(".allMenu")

function Menu(e){

  clear_html(allMenu);

  meatFood.classList.remove("select-food");
  pastaFood.classList.remove("select-food");
  seafoodFood.classList.remove("select-food");

  e.target.classList.add("select-food");

  allMenu.innerHTML=menu[e.target.id];

}

function open_menu(){
  insertIcons();
  const menu= document.querySelector(".menu-bar");

  menu.onclick=(e)=>{

    if(containNode(e.target,"close")){

      menu.classList.remove("h-25");

      insertBar("hidden");
      insertIcons();
    }
    if(containNode(e.target,"more")){
      menu.classList.add("h-25");
      insertBar("visible");
    }
  }

}

function insertBar(state){
  const menu= document.querySelector(".menu-bar");
  clear_html(menu);
  menu.innerHTML= bar[state];
  open_menu();
}

function fixedBar(){
  const bar=document.querySelector('.nav-bar');
  const history=document.querySelector('.history')

  if(filename()=="home"){

    const observer=new IntersectionObserver((entries)=>{

    
      if(entries[0].isIntersecting==true){
          bar.classList.remove('fixed-bar');
      }
      else{
          bar.classList.add('fixed-bar');
      }

    })
  
    observer.observe(history);

  }


}

function show_more(){

    const show_menu=document.getElementById("show-more-menu");
    if(isInPage(show_menu)){

      show_menu.addEventListener("click",()=>{
        const show_less=document.querySelector(".show_less");
        if(isInPage(show_less)){
          show_less.classList.remove("show_less");
          const confirm=document.querySelector(".show_less");
          !confirm? show_menu.remove() : null;
        }
      })

    }

}


function show_alert_menu(){

  const allPlates=document.querySelector(".allPlates");
  if(isInPage(allPlates)){
    allPlates.addEventListener("click",(e)=>{

      e.preventDefault();
      let element;
      e.target.tagName=="P" ? element=e.target.parentElement : element=e.target;
  
      if(element.parentElement.classList.contains("show_alert")){
        const data=element.parentElement.dataset.background;
        createAlert(data,"menu");
      }
  
    });
  }
  
}

function validationForm(){

  const form=document.getElementById("formContact");
  isInPage(form) ? form.onsubmit=eventForm:null;

  const mail=document.getElementById("email");
  isInPage(mail)? mail.addEventListener("blur",blurEvent):null;
  isInPage(mail)? mail.addEventListener("input",inputEvent):null;

  const fakeMessage=document.querySelector(".fakeMessage");
  isInPage(fakeMessage) ? fakeMessage.addEventListener("input",addMessage):null;
}

function addMessage(e){
  const message=document.getElementById("message");
  message.value=e.target.innerText;
}

function blurEvent(e){

  const er=/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

  if(e.target.value!=""){

    if(!er.test(e.target.value)){
      e.target.classList.add("border-red");
      const error=document.querySelector(".error-mail");
      if(!error){
        const p=document.createElement("P");
        p.textContent="Insert an Email Valid";
        p.classList.add("f-red","error-mail");
        e.target.parentElement.insertBefore(p,e.target.nextSibling);
      }
    
    }else{
      const error=document.querySelector(".error-mail");
      isInPage(error)? error.remove() : null;
      e.target.classList.remove("border-red");
    }

  }

}
function inputEvent(e){
  if(e.target.value!==""){
    const er=/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
    if(er.test(e.target.value)){
      const errorMail=document.querySelector(".error-mail");
      e.target.classList.remove("border-red");
      errorMail? errorMail.remove(): null;

    }
  }
}

function eventForm(e){

  e.preventDefault();

  const name=document.getElementById("name").value;
  const mail=document.getElementById("email").value;
  const message=document.getElementById("message").value;
  const er=/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

  if(name=="" || mail=="" || message=="" ){
    createAlert("All Fields are Required","email");
  }else{

   if(!er.test(mail)){
    createAlert("Email Invalid","email");
      return;
   }
   sendEmail(e.target);
  }

}

export function createAlert(bg,type,state=false){

  const body=document.querySelector("body");

  const div=document.createElement("DIV");
  div.classList.add("container-error","o-0");

  type=="menu"? alert(div,bg) : null;
  type=="email"? alertError(div,bg,state) : null;
  type=="spinner"? spinner(div) : null;
  type=="form"? formCard(div,bg) : null;
  type=="user"? cardUser(div,bg) : null;

  setTimeout(() => {
    div.classList.remove("o-0");
    div.classList.add("o-1");
  }, 100);

  div.addEventListener("click",(e)=>{
    if(e.target.classList.contains("ok")){
        div.classList.add("o-0");
        div.classList.remove("o-1");
        setTimeout(() => {
            div.remove();
        }, 100);
    }
  })

  body.appendChild(div);

  document.addEventListener("click",(e)=>{
      const error=document.querySelector(".error");
      if(e.target==div && e.target.contains(error)){
          div.classList.add("o-0");
          div.classList.remove("o-1");
          setTimeout(() => {
              div.remove();
          }, 100);
      }
  })

}

function sendEmail(form){

  createAlert("spinner","spinner");
  const data = new FormData(form);


  fetch('../../API/sendEmail', {
    method: 'POST',
    body: data
 })

  .then(result=>result.json()) 
  .then(result=>{

    if(result!=="An error has been Occurred"){

      const error=document.querySelector(".container-error");
      error? error.remove():null;
      form.reset();
      const fakeMessage=document.querySelector(".fakeMessage");
      fakeMessage? fakeMessage.textContent="" : null;
      createAlert("Message Has Beend Send Successfully","email",true);

    }else{
      const error=document.querySelector(".container-error");
      error? error.remove():null;
      createAlert("Connection Failed","email");
    }
  })
  .catch(()=>{
    const error=document.querySelector(".container-error");
    error? error.remove():null;
    createAlert("Connection Failed","email")
  });

}
function animationHtml(){
  const nodes=document.querySelectorAll(".animated");
  const top=document.documentElement.scrollTop;
  
  if(isInPage(nodes[0])){
    nodes.forEach(child=>{
      if((child.offsetTop - 500 )<top){
        child.classList.add("o-1");
      }
    })
  }
  
}

function validationSignUp(){
  const form=document.querySelector(".formSignUp");
  form? form.addEventListener("submit",signUp) : null;
}

function signUp(e){

  e.preventDefault();

  const name=document.querySelector(".fullName").value;
  const phone=document.querySelector(".phone").value;
  const mail=document.querySelector(".mail").value;
  const password=document.querySelector(".password").value;
  const confirmPassword=document.querySelector(".password-2").value;

  const er=/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

  if(name=="" || phone=="" || mail=="" || password=="" || confirmPassword==""){
    createAlert("All Fields are Required","email");
    return;
  }else{
    if(!er.test(mail)){
      createAlert("Email Invalid","email");
      return;
    }
    if(password!=confirmPassword){
      createAlert("The passwords does not Match","email");
      return;
    }
  }

  createAccount(e.target);

}

function createAccount(form){

  createAlert("spinner","spinner");

  const data=new FormData(form);

   fetch("../../signUp",{
    method:"POST",
    body:data
  })

  .then(result=>result)
  .then(result=>result.json())
  .then(result=>{
    if(result.length==0){
      window.location.href="../../reservation";
    }else{
      const error=document.querySelector(".container-error");
      error? error.remove():null;
      createAlert(Object.values(result)[0],"email");
    }
  })

}

function validationSignIn(){

  const form=document.querySelector(".formSignIn");
  form? form.addEventListener("submit",signIn) : null;

}

function signIn(e){

  e.preventDefault();
  const mail=document.querySelector(".mail").value;
  const password=document.querySelector(".password").value;
  const er=/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
  if(mail=="" || password==""){
    createAlert("All fields are Required","email");
    return;
  }else{
    if(!er.test(mail)){
      createAlert("Email Invalid","email");
      return;
    }
  }
  login(e.target);
}

function login(form){

  createAlert("spinner","spinner");

  const data=new FormData(form);
  fetch("../../signIn",{
    method:"POST",
    body:data
  })
  .then(result=>result.json())
  .then(result=>{
    if(result.length==0){
      window.location.href="../../reservation";
    }else{
      const error=document.querySelector(".container-error");
      error? error.remove():null;
      createAlert(Object.values(result)[0],"email");
    }
  })
}

function getInfoUser(){

  if(filename()=="reservation"){
    
    fetch("../../getInfoUser")
    .then(result => result)
    .then(result=>result.json())
    .then(result=>{
      if(filename()=="reservation"){
        const div=document.querySelector(".infoUser");
        const {fullName}=result;
        const p=document.createElement("P");
        p.textContent=`Hello "${fullName}" what would you like to do today ?`;
        p.classList.add("f-white","f-3","mb-2");
        div.appendChild(p);
      }
    })
  }

}

export function readReservations(callback = ()=>{}){

  if(filename()=="reservation"){
    fetch("../../API/read")
    .then(result => result)
    .then(result=>result.json())
    .then(result=>{
      
      if(result.length==0){
        countReservation(result.length);
        const reservations=document.querySelector(".reservations");
        clear_html(reservations);
        const p=document.createElement("P");
        p.textContent="In this moment dou you no have any reservation"
        p.classList.add("text-center","f-2","mt-5","mb-2");
        const img=document.createElement("IMG");
        img.src="../../build/img/box.svg";
        img.classList.add("hw-5","invert-wb-svg","ds","m-5a","mb-5")
        reservations.appendChild(p);
        reservations.appendChild(img);

      }else{

        let array=result;
        const reservations=document.querySelector(".reservations");
        clear_html(reservations);

        const show_more=document.createElement("P");

        show_more.textContent="Show More ... ";
        show_more.classList.add("f-2","f-bold","text-center","pointer");

        show_more.addEventListener("click",()=>{

          for (let i = 0; i < 3; i++) {
            const show_less=document.querySelector(".show_less");
            if(isInPage(show_less)){
              show_less.classList.remove("show_less");
              const confirm=document.querySelector(".show_less");
              !confirm? show_more.remove() : null;
            }
          }
        })

        reservations.appendChild(show_more);

        const newArray=callback(array);
        newArray !==undefined? array=newArray:null;

        countReservation(array.length);

        for (let i= 0; i< array.length; i++) {

          const element = array[i];

          const div=reservationHTML(element);

          i>2 ? div.classList.add("show_less") : null;

          reservations.insertBefore(div,show_more);

        }

        const show_less=document.querySelector(".show_less");
        show_less ? null : show_more.remove();

      }

    })
  }

}

function countReservation(result){

  const container=document.querySelector(".countReservations");
  container? container.textContent=`Reserved (${result})` : null;
}



function showNewReservation(){
  const newReservation=document.querySelector(".newReservation");
  const addReservation=document.querySelector(".addReservation");
  if(addReservation){
    addReservation.onclick=(e)=>{
      e.preventDefault();

      if(!newReservation.classList.contains("b-0")){
        newReservation.classList.add("b-0")
        newReservation.onclick=(e)=>{
          if(e.target.classList.contains("close")){
            newReservation.classList.remove("b-0")
          }
        }
      }

    }
  }
}

function createReservation(){
  const form=document.querySelector(".formReservation");
  form? form.addEventListener("submit",reservationEvent) : null;
}

function reservationEvent(e){
  e.preventDefault();

  const date=document.querySelector(".date").value;
  const time=document.querySelector(".time").value;
  const phone=document.querySelector(".phone").value;

  if(date=="" || time=="" || phone==""){

    createAlert("All fields Are required","email");

    return;

  }else{

    addReservation(e.target);

  }

}

function addReservation(form){

  createAlert("spinner","spinner");

  const data=new FormData(form);
  fetch("../../API/create",{
    method:"POST",
    body:data
  })
  .then(result=>result.json())
  .then(result=>{

    if(result.length==0){

      const error=document.querySelector(".container-error");
      error? error.remove():null;
      form.reset();
      const newReservation=document.querySelector(".newReservation");
      newReservation.classList.remove("b-0");
      createAlert("Successfull Reservation","email",true);
      readReservations();
      

    }else{

      const error=document.querySelector(".container-error");
      error? error.remove():null;
      createAlert(result,"email");
    }
  })

}

function showFilters(){

  const filters = document.querySelector(".filters");
  if(filters){
    const options = document.querySelector(".showFilters");
    const AllOptions=["all","pending","resolve","today"];
    const functions={
      "all" : allFilter,
      "pending" : pendingFilter,
      "resolve": resolveFilter,
      "today" : todayFilter
    }

    filters.addEventListener("click",()=>{

      if(options.classList.contains("hidden")){
        options.classList.remove("hidden");
      }

    });

    document.addEventListener("click",(e)=>{
      if(e.target!=filters && e.target.parentElement!=options && e.target!=options ){
          options.classList.add("hidden");
      }
    });

    options.addEventListener("click",(e)=>{

      if(!e.target.classList.contains("text-star")){

        const data = e.target.dataset.type;
        e.target.classList.add("f-blue");
        readReservations(functions[data]);
        const restOptions=AllOptions.filter(child=>child!=data);
        restOptions.forEach(child=>{
          const element = options.querySelector(`.${child}`);
          element.classList.remove("f-blue");
        })

      }

    });
  }

}

function allFilter(array){
  return array;
}
function pendingFilter(array){
  array=array.filter(child=>child.state=="0");
  return array;
}
function resolveFilter(array){
  array=array.filter(child=>child.state=="1");
  return array;
}
function todayFilter(array){
  const today=moment().format("MMMM Do YYYY");     
  array=array.filter(child=>moment(child.date).format("MMMM Do YYYY")==today)
  return array;
}

function setMinDate(){
  const date=document.querySelector(".date");
  if(date){
    const today=moment().format("YYYY-MM-DD");
    date.min=today;
  }
}

function clear_html(node){
  while(node.firstChild){
    node.removeChild(node.firstChild);
  };
};

function isInPage(node) { //Funcion que nos identificara si existe un nodo o no para poder hacer las evaluaciones correspondientes
  return (node === document.body) ? false : document.body.contains(node);
};

function containNode(node,find){

  if(node.id==find ) return true;

  if(isInPage(node.parentElement)){
    if(node.parentElement.id==find) return true;
  }else{
    return
  }

  if(isInPage(node.parentElement.parentElement)){
    if(node.parentElement.parentElement.id==find) return true;
  }else{
    return
  }


  if(isInPage(node.parentElement.parentElement.parentElement)){
    if(node.parentElement.parentElement.parentElement.id==find) return true;
  }else{
    return
  }

  if(isInPage(node.parentElement.parentElement.parentElement.parentElement)){
    if(node.parentElement.parentElement.parentElement.parentElement.id==find) return true;
  }else{
    return
  }
  
  node.childNodes.forEach(child => {
    if(child.id==find) return true;
  });

  return false;

}

function blockReservations(){
  const links=document.querySelectorAll(".linkReservation");

  window.addEventListener("offline",()=>{
    if(links.length!=0){
      links.forEach(child=>{
        child.href="/error"
      })
    }
  })

  window.addEventListener("online",()=>{
    if(links.length!=0){
      links.forEach(child=>{
        child.href="/reservation"
      })
    }
  })

}

function filename(){// Nombre de la hoja html/php que se obtiene en el url
  var rutaAbsoluta = self.location.href;
  var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
  var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
  return rutaRelativa;
}

darkmode();
swipper();
insertBar("hidden");
open_menu();
fixedBar();
show_more();
show_alert_menu();
validationForm();
validationSignUp();
validationSignIn();
getInfoUser();
readReservations();
showNewReservation();
createReservation();
countReservation();
showFilters();
setMinDate();
blockReservations();
window.addEventListener("scroll",animationHtml);
