// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFESeo54VDfRtmiOpoROdGZCYYEWYuJco",
  authDomain: "hamza-iqbals.firebaseapp.com",
  projectId: "hamza-iqbals",
  storageBucket: "hamza-iqbals.firebasestorage.app",
  messagingSenderId: "615368037538",
  appId: "1:615368037538:web:6c9900a0150223483c33fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }
  const docRef = doc(db, "contactForm", email);

  setDoc(docRef, {
    name: name,
    email: email,
    message: message,
    timestamp: new Date(),
  })
    .then(function () {
      alert("Form submitted successfully!");
      document.getElementById("contactForm").reset();
    })

    .catch(function () {
      alert("Error submitting form. Please try again.");
    });
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".headerImage img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".headerContent h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".headerContent h2", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".headerBtn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".aboutImage img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".aboutContent .sectionHeader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".aboutContent p", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});
ScrollReveal().reveal(".aboutBtn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".contactImage img", {
  ...scrollRevealOption,
});
