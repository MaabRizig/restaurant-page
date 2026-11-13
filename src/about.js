let content = document.querySelector(".content");

function loadAbout(){
    let aboutContent = document.createElement("div");
    aboutContent.classList.add("about-content");

    let header = document.createElement("h1");
    header.textContent = "Yummy Restaurant Story";

    let p1 = document.createElement("p");
    p1.textContent = "Yummy Restaurant is a meeting point between American and Italian cuisine, bringing together the best flavors from both worlds with our own special mix of spices and ingredients.";

    let p2 = document.createElement("p");
    p2.textContent = "Our menu includes appetizers, main courses, and desserts inspired by both countries, giving you a variety of delicious options to enjoy.";

    let p3 = document.createElement("p");
    p3.textContent = "Have an idea, suggestion, or issue? Contact us here.";

    aboutContent.append(header,p1,p2,p3);
    content.appendChild(aboutContent);
}


export {loadAbout};
