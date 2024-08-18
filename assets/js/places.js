window.addEventListener('load', function() {
    if (window.innerWidth >= 1440) {
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
    }
});
