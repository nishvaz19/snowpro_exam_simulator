function runSQL() {
    const sqlInput = document.getElementById("sql").value.trim().toUpperCase();
    const resultDiv = document.getElementById("result");

    // 1. Visual feedback: Show 'processing' state
    resultDiv.innerHTML = "<p class='loading'>Executing on Snowflake Warehouse...</p>";
    resultDiv.className = "processing";

    // 2. Simulate network/compute latency (500ms)
    setTimeout(() => {
        let output = "";
        let statusClass = "success";

        // 3. More robust keyword detection using Regex
        if (/^\s*SELECT/.test(sqlInput)) {
            output = "<strong>Success:</strong> 15 rows returned from remote storage.";
        } else if (/^\s*CREATE/.test(sqlInput)) {
            output = "<strong>Success:</strong> Table created successfully in schema PUBLIC.";
        } else if (/^\s*DROP/.test(sqlInput)) {
            output = "<strong>Warning:</strong> Table dropped. Metadata retained in Time Travel.";
            statusClass = "warning";
        } else if (sqlInput === "") {
            output = "Error: Worksheet is empty.";
            statusClass = "error";
        } else {
            output = "Simulation Error: Command not recognized in this sandbox.";
            statusClass = "error";
        }

        // 4. Update UI with formatted results
        resultDiv.innerHTML = output;
        resultDiv.className = statusClass;
    }, 600);
}
