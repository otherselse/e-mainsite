$(function(){
	//radio点选
	$("body").find(".radio").on("click", ".ui-radio", function () {
		$(this).parents(".radio").find(".ui-radio").removeClass("on");
		$(this).addClass("on")
	})

	//checkbox 多选
	$("body").on("click", ".ui-checkbox", function () {
		$(this).toggleClass("on")
	})

	$("body").on("click", function () {
		$(".search-cont").hide();
	})

	//选择单选
	$(".single").on("click", ".ui-option", function () {
		$(this).addClass("on").siblings("button").removeClass("on");
	})

	//下拉
	$("body").on("click",".searchUp",function(e){
		if($(this).parents(".input-selSearch").find(".search-cont").length>0){
			e.stopPropagation();
			$(".search-cont").hide();
			$(this).parents(".input-selSearch").find(".search-cont").css({"min-width":$(this).outerWidth(true),"left":$(this).offset().left-$(this).parents(".input-selSearch").offset().left})  
			$(this).parents(".input-selSearch").find(".search-cont").show();
		}
		
	})
	$("body").on("click",".search-list",function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parents(".input-selSearch").find(".searchUp").val($(this).text());
		$(this).parents(".input-selSearch").find(".search-cont").hide();
	})

})