import preCode from './import/preCode.js';
$(function(){
	// 初始化执行。。。
	$('.my-pre').map((i, ele) => {
		var $html = $(ele).parent().siblings().html();
		var str = preCode($html);
		$(ele).text(str);
	})
})