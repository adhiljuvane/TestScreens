function callData(){
  var urlParams = new URLSearchParams(window.location.search);
  const shop = urlParams.get('shop');
  var phone = "Error";
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
   if (xhr.status >= 200 && xhr.status < 300) {
      console.log('The request success!', xhr.response);
		  phone = xhr.response;
      phone = phone.replace(/['"]+/g, '');
      console.log(phone);
      a.href=`https://wa.me/91${phone}?text=${currentPage}%20I%20would%20like%20to%20know%20more%20about%20this`;
		  currentPage = location.href;
	 } else {
		  console.log('The request failed!');
      phone = "Error";
      a.href=`https://wa.me/91${phone}?text=${currentPage}%20I%20would%20like%20to%20know%20more%20about%20this`
   }
 };
 xhr.open('GET', `https://13916c2d620b.ngrok.io/getWatsappNumber/${shop}`);
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
