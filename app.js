if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js "icons')
            .then(registration => {
                console.log('Service worker registred with scope:', registration,scope);
            })
            .catch(error => {console.log('Service Worker registration failed:', error);
            });
        });
    }