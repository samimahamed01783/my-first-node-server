const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // __dirname নিশ্চিত করে যে ফাইলটি সঠিক ফোল্ডার থেকে পড়া হচ্ছে
    const filePath = path.join(__dirname, 'index.html');

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error: index.html ফাইলটি খুঁজে পাওয়া যায়নি!');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }
    });
});

// Render-এর জন্য PORT সেটআপ (এটি পরিবর্তন করবেন না)
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});