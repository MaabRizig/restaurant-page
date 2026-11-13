import menuData from "./menuData.json" with {type:'json'};

// const MENU_FOLDER_PATH = "./img/menu";

let imgReq = import.meta.webpackContext("./img/menu",
    {
        recursive:false,
        regExp: /\.(png|svg|jpg|jpeg|gif)$/,
        mode: "sync",
    }
);


let content = document.querySelector(".content");

function loadMenu(){
    let menuList = document.createElement("ul");

    Object.values(menuData).forEach((dish)=>{
        let li = document.createElement('li');
        
        let dishText = document.createElement("div");
        let dishTitle = document.createElement("h2");
        dishTitle.textContent = dish.title;
        let dishContent = document.createElement("p");
        dishContent.textContent = dish.desc;

        dishText.append(dishTitle,dishContent);

        let imgPath = imgReq(`./${dish.imgName}`);    // import the image
        let dishImg = document.createElement("div");
        dishImg.classList.add("dish-img");
        dishImg.style.setProperty("--img-url",`url(${imgPath})`);

        //append dishText and dishImg
        li.append(dishText,dishImg);

        //append the list item
        menuList.appendChild(li);

    });
    content.appendChild(menuList);
}


export {loadMenu};