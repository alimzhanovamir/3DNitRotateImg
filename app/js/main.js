var s = Snap("#svg");
var cx = 130;
var cy = 130;
var r  = 130;
function circlePath(cx, cy, r){
    return 'M '+cx+' '+cy+' m -'+r+', 0 a '+r+','+r+' 0 1,0 '+(r*2)+',0 a '+r+','+r+' 0 1,0 -'+(r*2)+',0';
}

// function animateLoop(){
// 	$("#outline").css("stroke-dasharray", $(".path")[0].getTotalLength());
// 		$(".path").css("stroke-dashoffset", $(".path")[0].getTotalLength());
// 		$(".path").animate({
// 		strokeDashoffset: 0
// 	}, 10000);
// }
// animateLoop();