"use strict";var tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";var player1,player2,firstScriptTag=document.getElementsByTagName("script")[0];function onYouTubeIframeAPIReady(){player1=new YT.Player("player1",{height:window.innerWidth/3.5,width:"900",videoId:"tUu_ekNT_YU",events:{onReady:onPlayerReady,onStateChange:onPlayerStateChange}}),player2=new YT.Player("player2",{height:window.innerWidth/3.5,width:"900",videoId:"tUu_ekNT_YU",events:{onReady:onPlayerReady,onStateChange:onPlayerStateChange}})}function onPlayerReady(e){}firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var done=!1;function onPlayerStateChange(e){e.data!=YT.PlayerState.PLAYING||done||(setTimeout(stopVideo,6e3),done=!0)}function stopVideo(){player.stopVideo()}