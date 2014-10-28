var media;

document.addEventListener("deviceready", onDeviceReady, false);		
function onDeviceReady() {
	//バックボタン押下時
	$(document).on("backbutton", function() {
		alert("backbuttonが押された");
	});
	//メニューボタン押下時
	$(document).on("menubutton", function() {
		alert("menubuttonが押された");
	});
	//検索ボタン押下時
	$(document).on("searchbutton", function() {
		alert("searchbuttonが押された");
	});
	var onSuccess = function() {
	};
	var onError = function(e) {
		alert("");
	};
	alert(location.pathname);
	media = new Media("/android_asset/www/sound/neko.mp3", onSuccess, onError);
	$(".listening").css("display","none");
	$(".received").css("display","block");
};

$(document).on("pageinit", "#home", function(e){
	$(this).on("click" , "#playSound" , function(e){
		media.play();
	});
});

