function statisticsInsert(){
	if( !GLOBAL.menuId ){
		return;
	}
	$.ajax({
		url : GLOBAL.APP_PATH + '/statistics' + GLOBAL.API_PATH + '/insert'
		, type : 'post'
		, data : {
			menuId : GLOBAL.menuId
			
		}
	});
}		
jQuery(function($){
	//통계자동
	statisticsInsert();
	
});		



function fnNvl(val, rval) {
	if ((val == null) || (val == 'undefined') || !val || (val == 'null')) {
		return rval;
	} else {
		return val;
	}
}
function getNowDate(){
	var date = new Date(); 
	var year = date.getFullYear(); 
	var month = new String(date.getMonth()+1); 
	var day = new String(date.getDate()); 

	// 한자리수일 경우 0을 채워준다. 
	if(month.length == 1){ 
	  month = "0" + month; 
	} 
	if(day.length == 1){ 
	  day = "0" + day; 
	} 
	
	return year + "-" + month + "-" + day;

}

function hideModal(){
	$('#modal_popup').hide();
	$(".sbp-bg").hide();
	$(".sub-pobup.style1").hide();
	$(".sub-pobup.style2").hide();
	$(".sub-pobup.style3").hide();
}

function refundInfo(){
    $("#ticketReserve").removeClass("on");
    $("#refundInfo").addClass("on");
    
    $("#ticketReserve_sub").attr("class", "ctl-sub");
    $("#refundInfo_sub").attr("class", "ctl-sub on");
}