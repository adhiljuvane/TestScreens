function callData(){
    var phone = "9048559097";
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log('The request success!');
		    phone = xhr.res;
        a.href=`https://wa.me/91${phone}?text=${currentPage}%20I%20would%20like%20to%20know%20more%20about%20this`
    document.body.append(a);
	   } else {
		    console.log('The request failed!');
       phone = "Error"
       a.href=`https://wa.me/91${phone}?text=${currentPage}%20I%20would%20like%20to%20know%20more%20about%20this`
    document.body.append(a);
     }
  	console.log('This always runs...', xhr.data);
  };
  xhr.open('GET', 'https://localhost:8000/getWatsappNumber/zoko-dev.myshopify.com');
  xhr.send();
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://codepen.io/aj-zoko/pen/XWdERRZ.css";
    document.head.prepend(link);
    let a = document.createElement("a");
    a.id = "watsapp-button";
    a.href=`https://wa.me/91${phone}?text=Hellloooo`;
		currentPage = location.href;
	a.href=`https://wa.me/91${phone}?text=${currentPage}%20I%20would%20like%20to%20know%20more%20about%20this`
    document.body.append(a);
}

callData();
