const firebaseConfig = {
    apiKey: "AIzaSyDk5oJe3s4VI5FuaxzpDrpXGrB0Sqoyuqs",
    authDomain: "allureelectronic-4f650.firebaseapp.com",
    projectId: "allureelectronic-4f650",
    storageBucket: "allureelectronic-4f650.firebasestorage.app",
    messagingSenderId: "421386373945",
    appId: "1:421386373945:web:ec5d1bd87d650d29fdf6e8",
    measurementId: "G-PKNY3VN43B"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.getAuth(app);
  
  // Function to check if user is logged in
  function checkAuth() {
    // Restricted Pages
    const restrictedPages = ['urunekle.html', 'urunduzenle.html'];
    const currentPage = window.location.pathname.split('/').pop();
  
    // Firebase Authentication Listener
    firebase.onAuthStateChanged(auth, (user) => {
      if (!user) {
        // If user is not logged in and trying to access restricted pages, redirect to admin.html
        if (restrictedPages.includes(currentPage)) {
          window.location.href = 'admin.html';
        }
      } else {
        // User is logged in, allow access
        console.log('User is logged in:', user.email);
      }
    });
  }
  
  // Call checkAuth function on page load
  checkAuth();
  