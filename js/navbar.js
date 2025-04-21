fetch('../components/navbar.html')
      .then(res => res.text())
      .then(html => {
        document.getElementById('navbar-content').innerHTML = html;
      })
      .catch(err => console.error("Failed to load navbar:", err));