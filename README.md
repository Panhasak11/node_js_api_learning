## Node.js Setup

### 1. Check Node is installed

```bash
node -v
npm -v
```

Node 18 or newer is recommended.

### 2. Initialize the project

```bash
npm init -y
```

This creates a `package.json` file.

### 3. Create an entry file

```bash
touch index.js
```

Add a start script in `package.json`:

```json
"scripts": {
  "start": "node index.js"
}
```

## Express Setup

### 1. Install

```bash
npm install express
```

### 2. Create a basic server

In `index.js`:

```javascript
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 3. Run it

```bash
npm start
```

## Prisma Setup

### 1. Install

```bash
npm install prisma --save-dev
npm install @prisma/client
```

### 2. Initialize

```bash
npx prisma init
```

Creates `prisma/schema.prisma` and a `.env` file.

### 3. Set the datasource

Edit `prisma/schema.prisma`:

```prisma
datasource db {
  provider = "postgresql" // or "mysql"
  url      = env("DATABASE_URL")
}
```

Set the connection string in `.env`:

```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

### 4. Define a model

```prisma
model Product {
  id        Int      @id @default(autoincrement())
  name      String
  price     Float
  createdAt DateTime @default(now())
}
```

### 5. Migrate

```bash
npx prisma migrate dev --name init
```
