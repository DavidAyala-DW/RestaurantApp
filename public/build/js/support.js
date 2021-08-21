import {createAlert, readReservations} from "./app.js";

export const icons={
    sun: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="68" height="68" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <circle cx="12" cy="12" r="4" />
    <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
  </svg>`,

    moon:`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="68" height="68" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
  </svg>`
}
export const menu={
    meat:`

        <div class="food">
            
            <img src="/build/img/PNGPIX-COM-Food-Plate-PNG-Transparent-Image.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2 f-2">$5</p>
        </div>

        <div class="food">
            <img src="/build/img/136327-barbecue-chicken-roasted-free-download-image.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2 f-2">$5</p>
        </div>


        <div class="food">
            <img src="/build/img/4-2-food-png.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2 f-2">$5</p>
        </div>


        <div class="food">
            <img src="/build/img/PNGPIX-COM-Food-Plate-PNG-Transparent-Image-1.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2 f-2">$5</p>
        </div>


        <div class="food">
            <img src="/build/img/169254-fried-pic-free-clipart-hd.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2 f-2">$5</p>
        </div>


        <div class="food">
            <img src="/build/img/2-2-food-png-hd.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2 f-2">$5</p>
        </div>
    
    `,
    pasta:`

        <div class="food">
            
            <img src="/build/img/kisspng-spaghetti-alla-puttanesca-pasta-italian-cuisine-pe-5aef2fbe8f0e50.177712581525624766586.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2 f-2">$5</p>
        </div>

        <div class="food">
            <img src="/build/img/kisspng-lasagne-pasta-bolognese-sauce-spaghetti-recipe-pasta-italian-5b132ccd7d7371.5674962015279833095139.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2 f-2">$5</p>
        </div>


        <div class="food">
            <img src="/build/img/kisspng-baotou-ningxia-g7-beijingu2013xdcrxfcmqi-expresswa-pasta-stew-face-5a905cba2b77f3.9123339915194103621781.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2 f-2">$5</p>
        </div>


        <div class="food">
            <img src="/build/img/kisspng-bolognese-sauce-pizza-pasta-lasagne-buffalo-wing-spagetti-pasta-5ade9a97ae5096.715418231524538007714.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2 f-2">$5</p>
        </div>


        <div class="food">
            <img src="/build/img/kisspng-spaghetti-alla-puttanesca-pasta-italian-cuisine-pe-5aef2fbe8f0e50.177712581525624766586.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2 f-2">$5</p>
        </div>


        <div class="food">
            <img src="/build/img/kisspng-pasta-salad-italian-cuisine-tuna-salad-fusilli-salad-5abc1685e07215.3033002815222759739193.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2 f-2">$5</p>
        </div>
    
    `,
    seafood :`
           <div class="food">
            
            <img src="/build/img/PNGPIX-COM-Food-Plate-PNG-Transparent-Image.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2 f-2">$5</p>
        </div>

        <div class="food">
            <img src="/build/img/136327-barbecue-chicken-roasted-free-download-image.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2 f-2">$5</p>
        </div>


        <div class="food">
            <img src="/build/img/4-2-food-png.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2 f-2">$5</p>
        </div>


        <div class="food">
            <img src="/build/img/PNGPIX-COM-Food-Plate-PNG-Transparent-Image-1.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2 f-2">$5</p>
        </div>


        <div class="food">
            <img src="/build/img/169254-fried-pic-free-clipart-hd.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2 f-2">$5</p>
        </div>


        <div class="food">
            <img src="/build/img/2-2-food-png-hd.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2 f-2">$5</p>
        </div>
    
    `,
    pasta:`

        <div class="food">
            
            <img src="/build/img/kisspng-spaghetti-alla-puttanesca-pasta-italian-cuisine-pe-5aef2fbe8f0e50.177712581525624766586.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2 f-2">$5</p>
        </div>

        <div class="food">
            <img src="/build/img/kisspng-lasagne-pasta-bolognese-sauce-spaghetti-recipe-pasta-italian-5b132ccd7d7371.5674962015279833095139.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2 f-2">$5</p>
        </div>


        <div class="food">
            <img src="/build/img/kisspng-baotou-ningxia-g7-beijingu2013xdcrxfcmqi-expresswa-pasta-stew-face-5a905cba2b77f3.9123339915194103621781.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2 f-2">$5</p>
        </div>


        <div class="food">
            <img src="/build/img/kisspng-bolognese-sauce-pizza-pasta-lasagne-buffalo-wing-spagetti-pasta-5ade9a97ae5096.715418231524538007714.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2 f-2">$5</p>
        </div>


        <div class="food">
            <img src="/build/img/kisspng-spaghetti-alla-puttanesca-pasta-italian-cuisine-pe-5aef2fbe8f0e50.177712581525624766586.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2 f-2">$5</p>
        </div>


        <div class="food">
            <img src="/build/img/kisspng-pasta-salad-italian-cuisine-tuna-salad-fusilli-salad-5abc1685e07215.3033002815222759739193.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2 f-2">$5</p>
        </div>
    
    `,
    seafood : `

        <div class="food">
                    
            <img src="/build/img/kisspng-pescado-frito-ceviche-fried-fish-dish-egyptian-5ac58e27aab555.5367134115228964236992.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2  f-2">$5</p>
        </div>

        <div class="food">
            <img src="/build/img/kisspng-lasagne-pasta-bolognese-sauce-spaghetti-recipe-pasta-italian-5b132ccd7d7371.5674962015279833095139.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2  f-2">$5</p>
        </div>


        <div class="food">
            <img src="/build/img/kisspng-spaghetti-spinach-salad-shrimp-and-prawn-as-food-5b11918ba7a8d5.5272275715278780276868.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2  f-2">$5</p>
        </div>


        <div class="food">
            <img src="/build/img/kisspng-hamburger-street-food-seafood-fast-food-delicious-food-5a75083cceaf41.2676743415176192608466.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2  f-2">$5</p>
        </div>


        <div class="food">
            <img src="/build/img/kisspng-hamburger-street-food-seafood-fast-food-delicious-food-5a75083cceaf41.2676743415176192608466.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2  f-2">$5</p>
        </div>


        <div class="food">
            <img src="/build/img/kisspng-hamburger-street-food-seafood-fast-food-delicious-food-5a75083cceaf41.2676743415176192608466.webp" alt="new_image">
            <p class="f-2 mb-2">Name of Food</p>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p class="f-bold price mt-2  f-2">$5</p>
        </div>
    
    `
}
export const bar={
    
    hidden :`
        <div class="container-bar">
            <a class="f-2"  href="/home">Logo</a>
            <div class="icons h-3 ">

                <div class="h-3 ds" id="sun-moon-menu"></div>

                <svg id="more" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-grid ds" width="68" height="68" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                            <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                            <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                            <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                </svg>

            </div>

        </div>
    `,

    visible : `

        <div class="show-menu container">

            <div class="icons">

                <div class="icon">
                    <a href="/home">
                    <img src="../../build/img/home.svg" alt="logo">
                    </a>
                    <p class="f-lgith text-center">Home</p>
                </div>

                <div class="icon">
                    <a href="/aboutUs">
                    <img src="../../build/img/aboutUs.svg" alt="logo">
                    </a>
                    <p class="f-lgith text-center">About Us</p>
                </div>

                <div class="icon">
                    <a href="/menu">
                    <img src="../../build/img/menu.svg" alt="logo">
                    </a>
                    <p class="f-lgith text-center">Menu</p>
                </div>



                <div class="icon">
                    <a href="/gallery">
                    <img src="../../build/img/gallery.svg" alt="logo">
                    </a>
                    <p class="f-lgith text-center">Gallery</p>
                </div>

                <div class="icon">
                    <a href="/reservation">
                    <img src="../../build/img/reserve.svg" alt="logo">
                    </a>
                    <p class="f-lgith text-center">Reservation</p>
                </div>

                <div class="icon">
                    <a href="/contactUs">
                    <img src="../../build/img/contactUs.svg" alt="logo">
                    </a>
                    <p class="f-lgith text-center">Contact Us</p>
                 </div>

            </div>


            <p id="close" class="f-2 f-bold text-end mr-3">X</p>

        </div>

    `
}

export const alert=(div,bg)=>{

    const error=document.createElement("DIV");
    error.classList.add("error","flex");

    const img=document.createElement("IMG");
    img.src=`/build/img/${bg}.webp`;
    img.alt="image"

    const p=document.createElement("P");
    p.textContent="Name of Menu";
    p.classList.add("f-2");

    const description=document.createElement("P");
    description.textContent="Description of Food";
    description.classList.add("text-center")

    const price=document.createElement("P");
    price.textContent="$5";
    price.classList.add("f-bold","price","f-2");

    const ok=document.createElement("p");
    ok.classList.add("ok","f-bold","f-3","f-white","pointer");
    ok.textContent="ok";

    error.appendChild(img);
    error.appendChild(p);
    error.appendChild(description);
    error.appendChild(price);
    error.appendChild(ok);


    div.appendChild(error);

}

export const alertError=(div,text,state=false)=>{


    const error=document.createElement("DIV");

    error.classList.add("error","flex");

    const p=document.createElement("P");

    if(state){
        p.textContent="All is ok"
    }else{
        p.textContent="An Error Ocurred !"
    }

    // !state ?  p.textContent="An Error Ocurred !" : p.textContent="All is ok";

    p.classList.add("f-white","f-3","text-center","f-bold");

    const DIV=document.createElement("DIV");
    DIV.classList.add("flex","gap-2","ai-center");

    const p2=document.createElement("P");
    p2.textContent=text;
    p2.classList.add("f-light","f-2");

    const img=document.createElement("IMG");
    img.classList.add("hw-5");

    if(state){
        img.src="/build/img/ok.svg";
    }else{
        img.src="/build/img/error.svg";
    }

    // !state ?  img.src="/build/img/error.svg" : img.src="/build/img/ok.svg" ;

    DIV.appendChild(p2);
    DIV.appendChild(img);

    const p3=document.createElement("P");
    p3.textContent="Ok";
    p3.classList.add("f-white","text-center","button-p","f-bold","ok","pointer");

    error.appendChild(p);
    error.appendChild(DIV);
    error.appendChild(p3);

    div.appendChild(error);

}

export const spinner=(div)=>{
    const error=document.createElement("DIV");

    error.classList.add("spinner_form");
    error.innerHTML=`<div class="sk-chase hw-8">
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    </div>`;

    div.appendChild(error);
    div.classList.remove("o-0");
}

export const formCard=(div,id)=>{

    const error=document.createElement("DIV");
    error.classList.add("error","flex","gap-2");

    const p1=document.createElement("P");
    p1.textContent="Delete Reservation";
    p1.classList.add("f-3","f-white","f-bold");
    
    const p2=document.createElement("P");
    p2.textContent="Delete the Online Booking?"
    p2.classList.add("f-light","f-start","f-2");

    const div2=document.createElement("DIV");
    div2.classList.add("flex","jc-center","gap-2","ai-center");

    const form=document.createElement("FORM");
    form.method="post";

    const input=document.createElement("INPUT");
    input.type="hidden";
    input.value=id;
    input.name="idDelete";

    const input2=document.createElement("INPUT");
    input2.type="submit";
    input2.classList.add("inputReset","button-red","f-2","pointer")
    input2.value="Delete";

    form.appendChild(input);
    form.appendChild(input2);

    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        createAlert("spinner","spinner");
        const data=new FormData(form);
        fetch("../../API/delete",{
            method: "POST",
            body: data
        })
        .then(result => result.json())
        .then(result=>{

            const error=document.querySelector(".container-error");
            error? error.remove():null;

            const confirm=document.querySelector(".container-error");
            confirm? confirm.remove():null;

            if(result!==""){
                readReservations();
            }else{
                createAlert(result,"email");
            }
        })
    })


    const p3=document.createElement("P");
    p3.classList.add("f-light","ok","f-2","button-cancel","pointer");
    p3.textContent="Cancel";

    div2.appendChild(p3);
    div2.appendChild(form);

    error.appendChild(p1);
    error.appendChild(p2);
    error.appendChild(div2);

    div.appendChild(error);

}

export const cardUser = (div,obj) =>{

    const error=document.createElement("DIV");
    error.classList.add("error","flex");

    const {fullName,numberPhone,mail}= obj
    
    const header=document.createElement("DIV");
    header.classList.add("flex","ai-center","jc-between","w-100");

    const p1=document.createElement("P");
    p1.textContent="Info User";
    p1.classList.add("f-3","f-bold","text-start");

    const close=document.createElement("P");
    close.textContent="X";
    close.classList.add("f-2","f-bold","ok","pointer");

    header.appendChild(p1);
    header.appendChild(close);

    const containerName=document.createElement("DIV");
    containerName.classList.add("flex","gap-2","w-100","ai-cemter");

    const imgName=document.createElement("IMG");
    imgName.classList.add("hw-3","ds");
    imgName.src="../../build/img/id.svg";
    imgName.alt="svg";

    const p2=document.createElement("P");
    p2.textContent=`${fullName}`;
    p2.classList.add("f-2");

    containerName.appendChild(imgName);
    containerName.appendChild(p2);

    const containerPhone=document.createElement("DIV");
    containerPhone.classList.add("flex","gap-2","w-100","ai-cemter");

    const imgPhone=document.createElement("IMG");
    imgPhone.classList.add("hw-3","ds");
    imgPhone.src="../../build/img/phone.svg";
    imgPhone.alt="svg";

    const p3=document.createElement("P");
    p3.textContent=`${numberPhone}`;
    p3.classList.add("f-2");

    containerPhone.appendChild(imgPhone);
    containerPhone.appendChild(p3);

    const containerMail=document.createElement("DIV");
    containerMail.classList.add("flex","gap-2","w-100","ai-cemter");

    const imgMail=document.createElement("IMG");
    imgMail.classList.add("hw-3","ds");
    imgMail.src="../../build/img/mail.svg";
    imgMail.alt="svg";

    const p4=document.createElement("P");
    p4.textContent=`${mail}`;
    p4.classList.add("f-2");

    containerMail.appendChild(imgMail);
    containerMail.appendChild(p4);

    const button=document.createElement("P");
    button.textContent="Close";
    button.classList.add("button-p","ok","f-bold","f-2","pointer");

    error.appendChild(header)
    error.appendChild(containerName)
    error.appendChild(containerPhone)
    error.appendChild(containerMail)
    error.appendChild(button);



    div.appendChild(error);
}

export const reservationHTML=(obj)=>{

    const {id,date,people,state,time,created,idUser} = obj;

    let state2;
    state=="0"? state2="pending ..." : state2="fulfilled";
    let cssClass;
    state=="0"? cssClass="" : cssClass="f-green";

    const div = document.createElement("DIV");
    div.classList.add("card-reservation","container","p-2","mb-2");

    const html=`
    
    <div class="p-1 flex fd-column ">

        <div class="flex jc-between ai-center mb-2">
            <p class="f-bold f-3">Info</p>
            <div class="ds hw-3 ">
                <img class="hw-3 ds fi-1 pointer options"  src="/build/img/dots.svg" alt="svg">
                <div class="containerOptions flex fd-column gap-2 hidden" >
                    <div class=" flex deleteContainer gap-2 jc-between ai-center">
                        <p>Delete</p>
                        <img class="hw-3 pointer deleteReservation" src="/build/img/delete.svg" alt="svg">
                    </div>
                </div>
            </div>
        </div>

        <div class="infoCard">
            <p class="f-justify">Created: ${created}</p>
        </div>

        <div class="infoCard" >
            <img class="hw-3 ds fi-1" src="/build/img/aboutUs.svg" alt="svg">
            <p> ${people} People</p>
        </div>

        <div class="infoCard" >
            <img class="hw-3 fi-1 ds " src="/build/img/calendar.svg" alt="svg">
            <p> ${date} </p>
        </div>

        <div class="infoCard">
            <img class="hw-3 ds fi-1" src="/build/img/clock.svg" alt="svg">
            <p> ${time} </p>
        </div>

        <div class="infoCard">
            <img class="hw-3 ds" src="/build/img/time-left (1).svg" alt="svg">
            <p class="${cssClass}">${state2}</p>
        </div>
        
    </div>
    
    `;

    div.innerHTML=html;

    
    if(idUser!=undefined){

        const html=`
                <p>Info User</p>
                <img class="hw-3 pointer showInfoUser" src="/build/img/info.svg" alt="svg">
        `;
        const containerOptions=div.querySelector(".containerOptions");
        const infoContainer=document.createElement("DIV");
        infoContainer.classList.add("flex","gap-2","ai-center")
        infoContainer.innerHTML=html;

        const deleteContainer=containerOptions.querySelector(".deleteContainer");

        containerOptions.insertBefore(infoContainer,deleteContainer);

        containerOptions.classList.add("infoAdded");

    }

    const options=div.querySelector(".options");

    const containerOptions=div.querySelector(".containerOptions");

    options.addEventListener("click",()=>{
        containerOptions.classList.remove("hidden");
    });

    const deleteReservation=div.querySelector(".deleteReservation");
    deleteReservation.addEventListener("click",()=>{
        createAlert(id,"form");
    });

    const ShowInfoUser=div.querySelector(".showInfoUser");
    if(ShowInfoUser){
        ShowInfoUser.addEventListener("click",()=>{
            fetch(`../../API/getInfoUser?id=${idUser}`)
            .then(result=>result)
            .then(result=>result.json())
            .then(result=>{

                if(result=="user doesnt exist"){
                    createAlert("User Dont Found","email");
                }
                if(result.fullName){
                    createAlert(result,"user");
                }

            })
        })
    }

    document.addEventListener("click",(e)=>{
        if(e.target!=options && e.target.parentElement!=options ){
            containerOptions.classList.add("hidden");
        }
    });


    return div;
}
