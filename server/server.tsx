import express from 'express';
import * as path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(port, () => console.log(`Venus app listening on port ${port}!`));