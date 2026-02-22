const express = require('express');
const path = require('path');
const app = express();

// হোম পেজে আমাদের index.html ফাইলটি দেখাবে
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// একটি নতুন API রুট (টেস্ট করার জন্য)
app.get('/api', (req, res) => {
    res.json({ message: "Express is working perfectly!", status: "Success" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
});