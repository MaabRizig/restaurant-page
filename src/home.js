import yummyLogo from "./img/yummy.svg"; 

function initHomePage(){

    let content = document.querySelector(".content");

    //home content div
    let homeContent = document.createElement("div");
    homeContent.classList.add("home-content");

    //Restaurant name
    let restName = document.createElement("h1");
    restName.textContent = "Yummy Restaurant";

    //Restaurant logo
    let restLogo = document.createElement("img");
    restLogo.src = yummyLogo;

    //some exciting text
    let homeText = document.createElement("div");
    let p1 = document.createElement("p");
    p1.textContent = "The best food you can put in your mouth is HERE!";
    let p2 = document.createElement("p");
    p2.textContent = "Enjoy delicious pizzas, burgers, pasta, and much more. Explore our menu, pick your favorite, and enjoy a tasty meal!";
    homeText.append(p1,p2);

    //append home content in one div
    homeContent.append(restName,restLogo,homeText);

    //append homeContent in the DOM
    content.appendChild(homeContent);
    
}

export {initHomePage};
