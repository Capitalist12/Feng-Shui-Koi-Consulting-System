import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import history from 'connect-history-api-fallback';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Use history API fallback
app.use(history());

// Serve static files from the dist directory
app.use(express.static(join(__dirname, 'dist')));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});