const EdgeFunction = () => {

    const runEdgeFunction = (e) => {
        window.location = "/check";
    };

    return (
        <button type="button" onClick={runEdgeFunction}>Run Edge Function</button>
    );
};

export default EdgeFunction;