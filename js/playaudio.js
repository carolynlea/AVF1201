function playAudio(src) {
    // Create Media object from src
    my_media = new Media(src, onSuccess2, onError2);
    // Play audio
    my_media.play();
    // Update my_media position every second
    if (mediaTimer == null) {
        mediaTimer = setInterval(function() {
            // get my_media position
            my_media.getCurrentPosition(
                // success callback
                function(position) {
                if (position > -1) {
                setAudioPosition((position/1000) + " sec");
                }
                },
                // error callback
                function(e) {
                    console.log("Error getting pos=" + e);
                    setAudioPosition("Error: " + e);
                    }
                    );
                                 }, 1000);
    }
}
function pauseAudio() {
    if (my_media) {
        my_media.pause();
    }
}
function stopAudio() {
    if (my_media) {
        my_media.stop();
    }
    clearInterval(mediaTimer);
    mediaTimer = null;
}
function onSuccess2() {
    console.log("playAudio():Audio Success");
}
function onError2(error) {
    alert('code: ' + error.code + '\n' +
          'message: ' + error.message + '\n');
}
function setAudioPosition(position) {
    document.getElementById('audio_position').innerHTML = position;
}