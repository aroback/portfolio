 //from http://webdesign.about.com/od/dhtml/a/aa101507.htm
 
 function unhide(divID) {
 var item = document.getElementById(divID);
 if (item) {
 item.className=(item.className=='hidden')?'unhidden':'hidden';
 }
 }