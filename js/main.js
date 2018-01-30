var s = Snap("#svg");

function circlePath(cx, cy, r){
	var cx = 134;
	var cy = 134;
	var r  = 110;
    return 'M '+cx+' '+cy+' m -'+r+', 0 a '+r+','+r+' 0 1,0 '+(r*2)+',0 a '+r+','+r+' 0 1,0 -'+(r*2)+',0';
}
var total = circlePath();
s.path(total).attr({
	fill: 'none',
	stroke:'#0ff',
	strokeWidth:5
})



// function animateLoop(){
// 	$("#outline").css("stroke-dasharray", $(".path")[0].getTotalLength());
// 		$(".path").css("stroke-dashoffset", $(".path")[0].getTotalLength());
// 		$(".path").animate({
// 		strokeDashoffset: 0
// 	}, 10000);
// }
// animateLoop();