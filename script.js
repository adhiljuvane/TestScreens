document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://codepen.io/aj-zoko/pen/XWdERRZ.css";
    let a = document.createElement("a");
    a.id = "watsapp-button";

    document.head.prepend(link);
    document.body.append(a);
  }
};