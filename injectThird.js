function callData(){
     let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://codepen.io/aj-zoko/pen/XWdERRZ.css";
    document.head.prepend(link);
    let a = document.createElement("a");
    a.id = "watsapp-button";
    document.body.append(a);
  {%- if request.page_type == 'product' -%}
    document.getElementById('watsapp-button').href="href='https://wa.me/919048559096?text=Info%20Variant%20{{product.selected_or_first_available_variant.id}}"
  {%- else -%}
    document.getElementById('watsapp-button').href="https://wa.me/919048559096?text=General"
  {%- endif -%}
  setInterval(function()
	{
    	if (currentPage != location.href)
    	{
        	currentPage = location.href;
            var pos = currentPage.indexOf('variant')+8;
          	var variant_id = currentPage.slice(pos)
          	document.getElementById('watsapp-button').href = 'https://wa.me/919048559096?text=Info%20Variant%20'+variant_id;
    	}
	}, 500);
}

callData();
