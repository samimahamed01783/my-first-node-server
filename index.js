const express = require('express');
const path = require('path');
const app = express();

// ফর্ম ডাটা পড়ার জন্য প্রয়োজনীয় মিডলওয়্যার
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// হোম পেজ লোড করা
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// কন্টাক্ট ফর্মের ডাটা রিসিভ করার রুট
app.post('/submit', (req, res) => {
    const { userName, userEmail } = req.body;
    if (!userName || !userEmail) {
        return res.status(400).send('Name and Email are required!');
    }
    res.send(`<h1>ধন্যবাদ ${userName}!</h1><p>আপনার ইমেইল (${userEmail}) সফলভাবে পাওয়া গেছে।</p>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});