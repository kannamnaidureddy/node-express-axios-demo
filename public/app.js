async function checkServer() {

    try {

        const response = await fetch("/api/status");

        const data = await response.json();

        document.getElementById("result").innerHTML = `
            <h3>Server Response</h3>
            <p>${data.message}</p>
        `;

    } catch (error) {

        document.getElementById("result").innerHTML = `
            <p>Server connection failed</p>
        `;

    }
}


async function loadUsers() {

    try {

        const response = await fetch("/api/users");

        const result = await response.json();

        let html = "<h3>Users</h3>";

        result.data.forEach(user => {

            html += `
                <p>
                    <strong>${user.name}</strong>
                    - ${user.email}
                </p>
            `;

        });

        document.getElementById("result").innerHTML = html;

    } catch (error) {

        document.getElementById("result").innerHTML = `
            <p>Failed to load users</p>
        `;

    }

}