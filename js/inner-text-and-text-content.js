var firstitem = document.getElementById('one');
var showtextcontent = firstitem.textContent;
var showinnertext = firstitem.innertext;
var msg = ' <p>textcontent : '+ showtextcontent + '</p>';
    msg += ' <p>innertext:  ' + showinnertext + '</p>';
var el = document.getElementById('scripresults');
    el.innerHTML = msg; 
firstitem.textContent='sourdough bread';