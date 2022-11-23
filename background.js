// import { openWindow } from "Scripts/windowMy.js";
console.log("Hola soy el back de la extension");

// console.log(document.location);
// var mio = document.body;
// console.log(mio);


let windowmio;

chrome.tabs.onUpdated.addListener(
    ( tabId, changeInfo, tab )=>{
        console.log( "TabId: " + tabId);
        console.log("changeInfo: ");
        console.log(changeInfo.url);
        console.log("tab: ");
        console.log(tab);
        if(changeInfo.url === undefined || tab.url === undefined)
        {
            console.log(changeInfo.url);
            console.log(tab.url);
            console.log("Esta vacio");
        }
        if(changeInfo.status === "loading" && changeInfo.url !== undefined ){
            chrome.tabs.query(
                {url:tab.url},
                (result) => {
                    windowmio = result.length
                }
            )
            console.log("EL resultado de get es: ");
            console.log(windowmio);
            if(windowmio == 0 || windowmio === undefined){
                console.log("Se crea una ventana");
                chrome.windows.create(
                    {
                        url : tab.url,
                        type: "popup"
                    }
                );
            }else{
                console.log("Detecte unas pestaas");
                return;
            }
            console.log("Continuo sin problema");
            // chrome.windows.getAll()
            //chrome.windows.create(
            //    {
            //        focused:true,
            //        url:changeInfo.url
            //    }
            //)
            if(chrome.tabs.get(tabId)){
                console.log("Ya esta abierto");
            }else{
                console.log("No esta abierto");
            }
            /*chrome.windows.create(
                {
                    url : tab.url,
                    type: "popup"
                }
            );*/
            console.log("Incio")
            console.log(changeInfo.url);
            console.log(tab);
            console.log(tabId);
            console.log("Fin");
        }
    }
)

/*chrome.tabs.onCreated.addListener(
    (tab) => {
        console.log("Hola se creó un tab");
        console.log(tab.url = "Hola.com");
        console.log(tab.url);
        
    }
);*/