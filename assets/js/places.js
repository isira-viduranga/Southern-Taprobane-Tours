window.addEventListener('load', function() {
    setTimeout(function() {
        window.scrollTo({
            top: window.innerHeight / 2.5,
            behavior: 'smooth'
        });

        setTimeout(function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 1250);
    }, 1000);
});

window.addEventListener('load', function() {
    // Get the video element
    var videoElement = document.getElementById('responsive-video');

    // Define sources for different screen sizes
    var defaultVideoSrc = 'assets/video/SL_Places_Main.mp4'; // Default video for larger screens
    var phoneVideoSrc = 'assets/video/SL2.mp4'; // Video for phones

    // Function to set the video source based on screen width
    function setVideoSource() {
        if (window.innerWidth <= 568) {
            // For small screens, use the phone video
            videoElement.src = phoneVideoSrc;
        } else {
            // For larger screens, use the default video
            videoElement.src = defaultVideoSrc;
        }
    }

    // Set the video source on page load
    setVideoSource();

    // Optionally, update the video source on window resize
    window.addEventListener('resize', setVideoSource);
});
