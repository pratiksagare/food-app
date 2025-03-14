export const GET = async (req) => {
    try {
        // Fetch data.json from the public folder
        const response = await fetch("http://localhost:3000/data.json");

        // Check if fetch was successful
        if (!response.ok) {
            throw new Error('Failed to fetch data.json');
        }
        const data = await response.json();

        // Return the JSON response
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        })
    } catch (error) {
        console.error('Error in getAllRestoData API:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};
