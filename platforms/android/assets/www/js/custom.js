var media;

document.addEventListener("deviceready", onDeviceReady, false);		
function onDeviceReady() {
	var onSuccess = function() {
	};
	media = new Media("/android_asset/www/sound/neko.mp3", onSuccess);
	$(".listening").css("display","none");
	$(".received").css("display","block");
};

$(document).on("pageinit", "#home", function(e){
	$(this).on("click" , "#playSound" , function(e){
		media.play();
	});
});

