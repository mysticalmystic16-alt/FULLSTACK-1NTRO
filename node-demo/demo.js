const fs = require('fs');

const message = `
🌟 Welcome to Node.js File System Demo! 🌟
Timestamp: ${new Date().toLocaleString()}
Your custom message goes here!
Line 1 ✅
Line 2 ✅
Line 3 ✅
`;

fs.writeFile('message.txt', message.trim(), (err) => {
    if (err) throw err;
    console.log('🎉 File updated with new content!');
});