document.addEventListener("DOMContentLoaded", ()=>{
    const loginForm = document.getElementById("loginForm");
    const scheduleForm = document.getElementById("scheduleForm");
    const stopScheduleButton = document.getElementById("stop-schedule");
    let loggedInUsername = null;
    let loggedInPassword = null;
    loginForm.addEventListener("submit", async (event)=>{
        event.preventDefault();
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        };
        try {
            const response = await fetch("/login", requestOptions);
            if (response.ok) {
                alert("Logged in successfully");
                loggedInUsername = username;
                loggedInPassword = password;
                loginForm.style.display = "none"; // Hide login form
                scheduleForm.style.display = "block"; // Show scheduler form
                stopScheduleButton.style.display = "block"; // Show stop schedule button
            } else alert("Error logging in");
        } catch (error) {
            console.error("Error logging in:", error);
            alert("Error logging in");
        }
    });
    scheduleForm.addEventListener("submit", async (event)=>{
        event.preventDefault();
        const message = document.getElementById("message").value;
        const time = document.getElementById("time").value;
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: loggedInUsername,
                password: loggedInPassword,
                message,
                time
            })
        };
        try {
            const response = await fetch("/schedule", requestOptions);
            if (response.ok) alert("Scheduled successfully");
            else alert("Error scheduling the post");
        } catch (error) {
            console.error("Error scheduling the post:", error);
            alert("Error scheduling the post");
        }
    });
    stopScheduleButton.addEventListener("click", async ()=>{
        try {
            const response = await fetch("/stop-schedule", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: loggedInUsername
                })
            });
            if (response.status === 200) alert("Schedule stopped successfully!");
            else alert("Failed to stop schedule. No active schedule found for this user.");
        } catch (error) {
            console.error("Error stopping the schedule:", error);
            alert("Failed to stop schedule. Please try again later.");
        }
    });
});

//# sourceMappingURL=index.eadf20ad.js.map
