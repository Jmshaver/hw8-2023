var video;
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector('video')
	video.autoplay = false
	video.loop = false
	document.querySelector('#volume').innerText = video.volume
});

document.querySelector("#play").addEventListener("click", function() {
	video.play()
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= .9
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= (10/9)
	console.log(video.playbackRate)
});
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 < video.duration){
		video.currentTime += 10
	} else {
		video.currentTime = 0
	}
	console.log(video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function(e) {
	video.muted = !video.muted
	if (video.muted){
		e.target.innerText = 'Unmute'
	} else {
		e.target.innerText = 'Mute'
	}
});

document.querySelector("#slider").addEventListener("change", function(e) {
	video.volume = e.target.value / 100
	document.querySelector('#volume').innerText = video.volume
});
document.querySelector("#vintage").addEventListener("click", function() {
	video.className = 'video oldSchool'
});
document.querySelector("#orig").addEventListener("click", function() {
	video.className = 'video'
});

