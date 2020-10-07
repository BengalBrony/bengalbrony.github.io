const http = require('http');
const fs = require('fs');
const { exec } = require('child_process');

http.createServer(function (req, res) {
    let body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = body.join('').toString();
    });

    fs.writeFileSync("E:\\Webhook File\\webhook.log", body);
    exec(". C:\\Users\\Ameera.Khan\\Documents\\GitHub\\tableau-migration-scripts\\tcmt_runner_script.ps1");
    res.write(JSON.stringify({ message: 'Webhook request received!' }));
    res.end();
}).listen(8000);