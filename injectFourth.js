function callData(){
     let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://codepen.io/aj-zoko/pen/XWdERRZ.css";
    document.head.prepend(link);
    let a = document.createElement("a");
    a.id = "watsapp-button";
    a.href="https://wa.me/919048559096?text=Hellloooo";
    document.body.append(a);

}

callData();
