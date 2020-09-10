
function callData(){
     let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://codepen.io/aj-zoko/pen/XWdERRZ.css";
    let a = document.createElement("a");
    a.id = "watsapp-button";
    console.log("ssdsd")
    document.head.prepend(link);
    document.body.append(a);
}

callData();
