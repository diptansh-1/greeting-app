import { useState } from "react";
import axios from "axios";
import "./App.css"; // Import CSS file

function App() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const fetchGreeting = async () => {
        if (!name) {
            setMessage("Name is required.");
            return;
        }
        try {
            const response = await axios.get(`https://greetings-api-1djc.onrender.com/api/greet?name=${name}`);
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.error || "Error fetching greeting.");
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h2 style={{color:"#097058"}}>Greeting App</h2>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Enter your name" 
                />
                <button onClick={fetchGreeting}>Get Greeting</button>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default App;
