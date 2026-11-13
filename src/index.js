import "./style.css";
import { initHomePage } from "./home.js";
import { loadMenu } from "./menu.js";
import {loadAbout} from "./about.js";

let navEle = document.querySelector(".nav-btns");
let content = document.querySelector(".content");

navEle.addEventListener("click",(e)=>{
    let target = e.target;
    if(target.tagName.toLowerCase() === "button"){
        content.textContent = "";
        switch(target.dataset.val){
            case "home":
                initHomePage();
            break;
            case "menu":
                loadMenu();
            break;
            case "about":
                loadAbout();
            break;
        }
    }
});

initHomePage();



