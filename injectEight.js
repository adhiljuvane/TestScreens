function callData(){
     let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://codepen.io/aj-zoko/pen/XWdERRZ.css";
    document.head.prepend(link);
    let a = document.createElement("a");
    a.id = "watsapp-button";
    a.href="https://wa.me/919048559096?text=Hellloooo";
{%- if request.page_type == 'product' -%}    
  a.href="href='https://wa.me/919048559096?text=Info%20Variant%20{{product.selected_or_first_available_variant.id}}";
{%- else -%}    
  a.href="https://wa.me/919048559096?text=General";
 {%- endif -%}
  setInterval(function()
	{
    	if (currentPage != location.href)
    	{
        	currentPage = location.href;
            var pos = currentPage.indexOf('variant')+8;
          	var variant_id = currentPage.slice(pos)
          	a.href = 'https://wa.me/919048559096?text=Info%20Variant%20'+variant_id;
    	}
	}, 500);
    document.body.append(a);

}

callData();
