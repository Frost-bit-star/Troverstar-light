document.addEventListener('deviceready', function () {
  const statusEl = document.getElementById('status');
  const checkConnectionAndRedirect = () => {
    const conn = navigator.connection.type;

    if (conn === 'none' || conn === 'unknown') {
      statusEl.innerText = "Waiting for internet connection...";
      setTimeout(checkConnectionAndRedirect, 10000); // retry after 10s
    } else {
      statusEl.innerText = "Internet found. Loading Trover...";
      setTimeout(() => {
        navigator.splashscreen.hide();
        window.location.replace("https://trover.42web.io/app.php");
      }, 1000);
    }
  };

  checkConnectionAndRedirect();
});