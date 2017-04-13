// ==UserScript==
// @name         京东自营
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://list.jd.com/list.html*
// @match        *://search.jd.com/Search*
// @match        *://search.jd.com/search*
// @grant        none
// ==/UserScript==
function sx_list()
{
    $("#plist li.gl-item").each(function(){
        a=$(this);
        a.hide();
        var obj=$(this).find(".gl-i-wrap").attr("jdzy_shop_id");
        if(obj > 1000000000) a.show();
    });
}


function sx_search()
{
    $("#J_goodsList li.gl-item").each(function(){
        a=$(this);
        a.hide();
        var obj=$(this).find(".gl-i-wrap .p-img div").attr("data-venid");
        //alert(obj);
       	if(obj > 1000000000) a.show();
      });
}
sx_url=document.location.host;
if(sx_url=="list.jd.com") sx_list();
if(sx_url=="search.jd.com")
{
  sx_search();
   $(window).scroll(function () {
    sx_search();
   });
}
