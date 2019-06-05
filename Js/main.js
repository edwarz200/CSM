navigator.mediaDevices.getUserMedia({
    video: true
}).then(function(stream) {
    console.log(stream)

    let video = document.getElementById('video');
    video.srcObject = stream;
}).catch(function(error) {
    console.log(error)
});