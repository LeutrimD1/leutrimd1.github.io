// document.getElementById("form-1").addEventListener("submit", async function (event) {
//     event.preventDefault(); // Prevent the form from submitting in the traditional way
  
//     // Get the form data
//     const formData = new FormData(event.target);
  
//     // Make a POST request to the server using fetch API
//     let fetchObj = await fetch("http://localhost:9000/getjson");
//     let json = await fetchObj.json();

//     const resultDiv = document.getElementById("result");
//     resultDiv.innerHTML = `<p>${JSON.stringify(json)}</p>`;
    
//   });
document
  .getElementById("form-1")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get the form data
    const formData = new FormData(event.target);

    // Make a POST request to the server using fetch API
    const response = await fetch("http://localhost:9000/receiveData", {
      method: "POST",
      body: formData,
    });

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p>Your form data: <br>${JSON.stringify(await response.json())}</p>`;
  });