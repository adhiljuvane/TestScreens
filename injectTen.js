function callData(){
     let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://codepen.io/aj-zoko/pen/XWdERRZ.css";
    document.head.prepend(link);
    let a = document.createElement("a");
    a.id = "watsapp-button";
		currentPage = location.href;
    a.href=`https://wa.me/919048559096?text=${currentPage}%20I%20would%20like%20to%20know%20more%20about%20this`;
    setInterval(function()
	   {
    	if (currentPage != location.href)
    	{
        	currentPage = location.href;
            var pos = currentPage.indexOf('variant')+8;
          	var variant_id = currentPage.slice(pos);
          	a.href=`https://wa.me/919048559096?text=${currentPage}%20I%20would%20like%20to%20know%20more%20about%20this`;
    	}
	}, 500);
    document.body.append(a);
}

callData();
