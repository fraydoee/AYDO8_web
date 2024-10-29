// const myHeading = document.querySelector("h1"); /* you select the content */
// myHeading.textContent = "Hello world!";         /* re-assign  the content by accesing properties */


// document.querySelector("html").addEventListener("click", function () {
//     alert("Ouch! Stop poking me!");
//   });
  

// document.querySelector("html").addEventListener("click", () => {
//     alert("Ouch! Stop poking me!");
//   });



// const myImage = document.querySelector("img");

// myImage.onclick = () => {
//   const mySrc = myImage.getAttribute("src");
//   if (mySrc === "images/EXLA24.jpg") {
//     myImage.setAttribute("src", "images/EXLA24_blue.jpg");
//   } else {
//     myImage.setAttribute("src", "images/EXLA24.jpg");
//   }
// };



// ~~~~~~~~~ Welcome msg section ~~~~~~~~~~~

// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");


// function setUserName() {
//     // this then opens the dialogue box where you have to answer the prompt (your name)
//     const myName = prompt("Please enter your name.");  
//     if (!myName) {
//         setUserName();
//     } else {
//         // locatStorage is an API that allows you to store data in the browser and retrieve it later
//         // use localStorage's setItem() functiuon to create anf store a data item called 'name'
//         // settings its value to myName variable which contains the user's entry for the name
//         localStorage.setItem("name", myName);
//         myHeading.textContent = `Welcome, ${myName}!`;
//     }
// }
  

  
// if (!localStorage.getItem("name")) {  // check whether name data exists
//     setUserName();
// } else {
//     const storedName = localStorage.getItem("name");
//     myHeading.textContent = `Welcome, ${storedName}!`;
// }

// myButton.onclick = () => {
//     setUserName();
// };