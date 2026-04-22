import express from 'express';
import path from 'path';

const app = express();

// Resolve correct path in production (dist folder)
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(publicPath, 'about.html'));
});

export default app;

// ✅ Start server only when run directly
if (require.main === module) {
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}
