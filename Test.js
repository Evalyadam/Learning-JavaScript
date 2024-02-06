// Declare the cookie variable as false
let cookie = false;

function MyFunction() {
  // Get the element with ID 'ILoveJavascript' and set its innerHTML to 'Yay! I made myself cookies!'
  document.getElementById("ILoveJavascript").innerHTML = 'Yay! I made myself cookies!';
  
  // Show an alert asking if the user wants to give cookies to the paragraph
  window.alert("Would you like the paragraph to make cookies?");
  
  // Log a message to the console
  console.log("User made cookies for parahraph! what a nice guy!");
  
  // Set the cookie variable to true
  cookie = true;
}

function TakeAwayCookies() {
  // Show an alert asking if the user wants to take away the cookies
  window.alert("Do you want to proceed?");
  
  // Log a message to the console
  console.log("User took cookies, what a mean guy...");
  
  // Get the element with ID 'ILoveJavascript' and set its innerHTML to 'Hey! someone took my cookies!'
  document.getElementById("ILoveJavascript").innerHTML = 'Hey! someone took my cookies!';
  
  // Set the cookie variable to false
  cookie = false;
}

function CheckCookies() {
  // Check if the cookie variable is true
  if (cookie == true) {
    // Show an alert saying that the paragraph has cookies
    window.alert("The paragraph has cookies.");
  } else {
    // Show an alert saying that the paragraph has no cookies
    window.alert("The paragraph has no cookies");
  }
}

// Declare the isphidden variable as true
let isphidden = true;

function Showp() {
  // If the isphidden variable is true
  if (isphidden == true) {
    // Get the element with ID 'ILoveJavascript' and set its style.display to 'block'
    document.getElementById('ILoveJavascript').style.display = 'block';
    // Set the isphidden variable to false
    isphidden = false;
}
}

function Hidep() {
  // If the isphidden variable is false
    if (isphidden == false) {
    // Get the element with ID 'ILoveJavascript' and set its style.display to 'none'
    document.getElementById("ILoveJavascript").style.display = "none";
    // Set the isphidden variable to true
    isphidden = true;
}
}
