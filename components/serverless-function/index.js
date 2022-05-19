import { useState, useEffect } from "react";


const ServerlessFunction = () => {
    const [response, setResponse] = useState("");

    const runServerlessFunction = (e) => {
        fetch("/api/hello")
        .then(response => response.json())
        .then(data => setResponse(data));
    };

    useEffect(() => {
        if (!response) return;
        
        console.log(response);
    }, [response]);

    return (
        <button type="button" onClick={runServerlessFunction}>Run Serverless Function</button>
    );
};

export default ServerlessFunction;