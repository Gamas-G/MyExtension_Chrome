// import { openWindow } from "Scripts/windowMy.js";
console.log("Hola soy el back de la extension");

// console.log(document.location);
// var mio = document.body;
// console.log(mio);




chrome.tabs.onUpdated.addListener(
    ( tabId, changeInfo, tab )=>{
        if(changeInfo.status === "loading"){
            chrome.windows.getAll()
            /*(chrome.windows.create(
                {
                    focused:true,
                    url:changeInfo.url
                }
            )*/
            if(chrome.tabs.get(tabId)){
                console.log("Ya esta abierto");
            }else{
                console.log("No esta abierto");
            }
            // chrome.tabs.create(
            //     {url:changeInfo.url}
            // );
            console.log("Incio")
            console.log(changeInfo);
            console.log(tab);
            console.log(tabId);
            console.log("Fin");
        }
    }
)