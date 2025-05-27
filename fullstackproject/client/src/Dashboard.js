import React from 'react';

function Dashboard() {
    // In a real app, fetch user info from context or API
    const user = { name: "User", email: "user@example.com" };

    return (
        <div className="container mt-5">
            <h2>Welcome, {user.name}!</h2>
            <p>Email: {user.email}</p>
            <div className="alert alert-success mt-4">
                This is your dashboard. Only logged-in users can see this page.
            </div>
            {/* ...add more user-specific content here... */}
        </div>
    );
}

export default Dashboard;
