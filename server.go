package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// Define a struct to represent the JSON object
type MyJSONObject struct {
	Name    string `json:"name"`
	Age     int    `json:"age"`
	Country string `json:"country"`
}

func main() {
	// Define the HTTP endpoint and the corresponding handler
	http.HandleFunc("/getJson", getJSONHandler)
	http.HandleFunc("/receiveData", postDataHandler)

	// Start the HTTP server on port 9000
	fmt.Println("Server listening on port 9000")
	err := http.ListenAndServe(":9000", nil)
	if err != nil {
		panic(err)
	}
}

func postDataHandler(w http.ResponseWriter, r *http.Request) {
	// Ensure the request method is POST
	if r.Method != http.MethodPost {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	// Set the response content type to JSON
	w.Header().Set("Content-Type", "application/json")

	// Add the CORS header to allow requests from any origin
	w.Header().Set("Access-Control-Allow-Origin", "*")

	r.ParseMultipartForm(0)

	// Convert the form data to a JSON object
	responseJSON, err := json.Marshal(r.Form)
	if err != nil {
		http.Error(w, "Error encoding JSON", http.StatusInternalServerError)
		return
	}

	// Write the JSON response to the client
	w.Write(responseJSON)
}

func getJSONHandler(w http.ResponseWriter, r *http.Request) {
	// Create a sample JSON object
	myJSON := MyJSONObject{
		Name:    "John Doe",
		Age:     30,
		Country: "USA",
	}

	// Set the response content type to JSON
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	// Marshal the JSON object to JSON format
	responseJSON, err := json.Marshal(myJSON)
	if err != nil {
		http.Error(w, "Error encoding JSON", http.StatusInternalServerError)
		return
	}

	// Write the JSON response to the client
	w.Write(responseJSON)
}
