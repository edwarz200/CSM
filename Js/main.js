navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
}).then(
    function(stream) {
        var player = document.getElementById('player');
        player.srcObject = stream;
        player.classList.remove('oculto')
        console.log(stream)
        let video = document.getElementById('video');
        video.srcObject = stream;
        video.classList.remove('oculto');
        var load = document.getElementById('load');
        load.classList.add('oculto');
    },
).catch(function(error) {
    console.log(error)
});