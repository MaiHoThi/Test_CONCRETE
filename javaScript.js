var images = ["./image/nt1.jpg", "./image/nt2.jpg", "./image/nt3.jpg", "./image/nt4.jpg"];
var i = 0;
setInterval(function() {
    document.getElementById("ima").src = images[i++];
    if (i == images.length) i = 0;
}, 2000);

var code=0;
code++;
var array=[
{
	code:code++,
	Image:"nt1.jpg",
	Name:"LIVING ROOM",
	descript:"Luxury living room",
	Name_category:"living"
},
{
	code:code++,
	Image:"nt1.jpg",
	Name:"LIVING ROOM",
	descript:"Luxury living room",
	Name_category:"living"
},
{
	code:code++,
	Image:"nt1.jpg",
	Name:"LIVING ROOM",
	descript:"Luxury living room",
	Name_category:"living"
},
{
	code:code++,
	Image:"nt2.jpg",
	Name:"DINNING ROOM",
	descript:"Luxury dinning room",
	Name_category:"living"
},
{
    code:code++,
	Image:"nt2.jpg",
	Name:"DINNING ROOM",
	descript:"Luxury dinning room",
	Name_category:"dinning"
},
{code:code++,
	Image:"nt2.jpg",
	Name:"DINNING ROOM",
	descript:"Luxury dinning room",
	Name_category:"dinning"
},
]
function loadroom() {
	// body...
	array.forEach(function(element){
		if (element.Name_category=="living") {
		var livingroom=document.getElementById("living");
		livingroom.innerHTML +='<div class="col-3" id="id"><div class="card"><img src="./image/'+element.Image+'"id="img" alt="image"><h5 id="title">'+element.Name+'</h5><span id="des">'+element.descript+'</span></div></div>'
	
		}else{
            var diiningroom=document.getElementById("dinning");
			diiningroom.innerHTML +='  <div class="col-3" id="id"><div class="card"><img src="./image/'+element.Image+'"id="img" alt="image"><h5 id="title">'+element.Name+'</h5><p><span id="des">'+element.descript+'</span></p></div></div>'

        }
    });
}