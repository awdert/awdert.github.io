$('.table>li').eq(0).click(function(){
	$('.box>.text').html("<p>1、丰富缤纷的个性主题任您下载，每日更新让手机每天都有好心情</p><p>2、众多特色小部件，如天气、省电、快捷开关、手电筒、一键清理，桌面使用快速操作，更方便、更快捷；更有小部件全屏可视化预览图模式，所见即所得，拖动即可添加至桌面</p><p>3、酷炫的桌面切换特效，如风火轮、球体、圆柱、钟摆，在屏幕滑动中淋漓尽致感受流畅的操作体验</p><p>4、整合众多常用功能形成“我的手机”模块，找壁纸、换铃声、管应用、省电量统统可以在此搞定，让你没有找不到的功能，是最贴心的手机管家</p><p>5、支持上下滑、捏紧、展开等多样手势，快速激活快捷条、菜单、屏幕预览等各式功能，享受智能掌控的快感</p><p>6、自定义文件夹，可通过重叠应用图标新建文件夹，并支持在文件夹中批量添加应用，实现应用分类管理，整理应用更加方便</p><p>7、长按桌面即可添加应用、文件夹和小部件，更换壁纸、主题和特效，所见即所得的直观操作带来更加简便的使用体验</p>");
});
$('.table>li').eq(1).click(function(){
	$('.box>.text').html("<p>点击桌面主屏幕的“我的 主题”图标，进入91桌面主题商城。在这里你可以下载、购买和应用</p>");
});
$('.table>li').eq(2).click(function(){
	$('.box>.text').html("<p>点击菜单—桌面设置—将91桌面设为默认桌面，或者点击HOME键时选择。</p>");
});
$('.table>li').eq(3).click(function(){
	$('.box>.text').html("<p>上下滑动调出快捷方式： 手指在屏幕上向下滑动时，可以弹出快捷开关和快捷设置两个应用选项，你可以选择定闹钟、模式选择等功能，快速进行一些手机基本设置。往上滑动屏幕则会弹出菜单栏，非常方便。</p>");
});
$('.table>li').eq(4).click(function(){
	$('.box>.text').html("<p>91桌面桌面设置-个性化设置中，加入了字体颜色、大小自定义设置的功能~让你随心修改各式各样的字体和大小，匹配主题风格。</p>");
});
$('.table>li').eq(5).click(function(){
	$('.box>.text').html("<p>主页：zm.91.com</p><p>客服热线：0591-38129191</p><p>客服新浪微博：@91手机软件客服</p><p>官方微博：@91桌面</p><p>在线咨询：点击进行在线咨询</p>");
});
for(let i=0;i<$('.table>li').length;i++){
	$('.table>li').eq(i).click(function(){
		$('.table>li').eq(i).css('color','#3C79E6')
		$('.table>li').eq(i).siblings().css('color','#333333')
	});	
}

