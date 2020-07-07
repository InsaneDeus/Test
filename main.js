let menuButton = document.getElementsByClassName("menu-button");
let headerMenuList = document.getElementsByClassName("header-menu-list");

let category = document.getElementsByClassName("category");
let articleContainer = document.getElementsByClassName("article-container");

let articleCard = document.getElementsByClassName("article-card");
let articleLinkContainer = document.getElementsByClassName("article-link-container");

let mainButton = document.getElementsByClassName("main-button");
let articleContainerActive = document.getElementsByClassName("article-container-active");


function buttonCheck(){
    if(articleContainerActive[0].querySelectorAll(".article-hide").length === 0){
        mainButton[0].style.display = "none";
    }
    else{
        mainButton[0].style.display = "flex";
    };
};

buttonCheck();

// Меню

menuButton[0].addEventListener("click", function(){
    if(headerMenuList[0].classList.contains("header-menu-list-hide")){
        headerMenuList[0].classList.remove("header-menu-list-hide");
        menuButton[0].querySelector(".hide").classList.remove("hide");
        menuButton[0].querySelector(".open").classList.add("hide");
    }
    else{
        headerMenuList[0].classList.add("header-menu-list-hide");
        menuButton[0].querySelector(".hide").classList.remove("hide");
        menuButton[0].querySelector(".escape").classList.add("hide");
    };
});


//Табы

for(let i = 0; i < category.length; i++){
    category[i].addEventListener("click", function(){
        for(let j = 0; j < category.length; j++){
            category[j].classList.remove("category-active");
            category[j].querySelector(".category-link").classList.remove("category-link-active");
            articleContainer[j].classList.remove("article-container-active");
        };
        category[i].classList.add("category-active");
        category[i].querySelector(".category-link").classList.add("category-link-active");
        articleContainer[i].classList.add("article-container-active");
        buttonCheck();
    });
};

//Читать

for(let i = 0; i < articleCard.length; i++){
    articleCard[i].addEventListener("mouseover", function(){
        articleLinkContainer[i].style.display = "flex";
    });

    articleCard[i].addEventListener("mouseout", function(){
        articleLinkContainer[i].style.display = "none";
    });
};

//Больше статей

mainButton[0].addEventListener("click", function(){
    let num = 6;

    if(articleContainerActive[0].querySelectorAll(".article-hide").length < 6){
        num = articleContainerActive[0].querySelectorAll(".article-hide").length;
    };
    for(let i = 0; i < num; i++){
        articleContainerActive[0].querySelectorAll(".article-hide")[0].classList.remove("article-hide");
    };
    buttonCheck();
})



