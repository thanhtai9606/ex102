var playVideo = require('./playVideo');
var openStream=()=>{
     const config ={ audio:false, video:true}
            navigator.mediaDevices.getUserMedia(config)
            .then(mediaSteam=>{
                playVideo(mediaSteam,"yourVideo");
            }).catch(err=>{
                console.log(err);
            })
};

module.exports = openStream;