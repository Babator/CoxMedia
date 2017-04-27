;(function () {
    function onBabatorReady(callback) {
        if (Babator && Babator.isReady) {
            callback();
        } else {
            window.addEventListener('babator-ready', function babatorReadyListener() {
                window.removeEventListener('babator-ready', babatorReadyListener);
                callback();
            });
        }
    }

    onBabatorReady(function () {

        Babator.telemetry.on('videoRequest', function (_, data) {
            console.log('-----------| VIDEO REQUEST |', data);
        });

        Babator.telemetry.on('videoPlayerLoad', function (_, data) {
            console.log('-----------| PLAYER LOAD |', data);
        });

        Babator.telemetry.on('videoStart', function (_, data) {
            console.log('-----------| VIDEO START |', data);
        });

        Babator.telemetry.on('videoAdStart', function (_, data) {
            console.log('-----------| AD START |', data);
        });

        Babator.telemetry.on('videoAdComplete', function (_, data) {
            console.log('-----------| VIDEO AD COMPLETE |', data);
        });

        Babator.telemetry.on('videoContentPlay', function (_, data) {
            console.log('-----------| VIDEO CONTENT PLAY |', data);
        });

        Babator.telemetry.on('videoPause', function (_, data) {
            console.log('-----------| VIDEO PAUSE |', data);
        });

        Babator.telemetry.on('videoView25Checkpoint', function (_, data) {
            console.log('-----------| VIDEO QUARTER 2 |', data);
        });

        Babator.telemetry.on('videoView50Checkpoint', function (_, data) {
            console.log('-----------| VIDEO QUARTER 3 |', data);
        });

        Babator.telemetry.on('videoView75Checkpoint', function (_, data) {
            console.log('-----------| VIDEO QUARTER 4 |', data);
        });

        Babator.telemetry.on('videoComplete', function (_, data) {
            console.log('-----------| VIDEO COMPLETE |', data);
        });

    });

})();
