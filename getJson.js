var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var Httpreq = new XMLHttpRequest(); // a new request
Httpreq.open("GET","http://fast-ekst-test4.ad.forskningsradet.no:8090/SearchService/search/json?querystring=&view=stats&dist=pbaarhvdaktbelopcalcnav&counttype=sum&chart=bar&lang=no&sortby=+pbaarstart+pbaarslutt&navigators=pbprogramaktivitettax,S,%5EProgrammer,S,Program/aktivitet,S,Programmer,C,pbkilde,S,FORISS,S,kilde,S,FORISS&lang=no",false);
Httpreq.send(null);
var jsonResponse = Httpreq.responseText;
//console.log(jsonResponse);
var jsonObject = JSON.parse(jsonResponse);
//console.log(jsonObject);
console.log(jsonObject.resultSegments.main);

