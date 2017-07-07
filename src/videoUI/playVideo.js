var playVideo = (mediaStream, idVideo) => {
    var video = document.getElementById(idVideo);
    video.srcObject = mediaStream;
    video.onloadedmetadata = (e) => {
        video.play();
    }
};

module.exports = playVideo;