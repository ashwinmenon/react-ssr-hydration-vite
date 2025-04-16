// server.js
import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;



// Use ESM import for SSR bundle
const { render } = await import('./dist-ssr/entry-server.js');

app.get("/", (req, res, next) => {
  const htmlFilePath = path.resolve('dist/index.html');
  fs.readFile(htmlFilePath, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }
    const appHtml = render();
    console.log(appHtml)

    const finalHtml = data.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    return res.send(finalHtml);
    
  });
});

// Serve static assets from client build
app.use(express.static('dist'));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
