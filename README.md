# BSM - Bike Servicing Management

[Live link](https://bsms.up.railway.app/)

## Summery

The BSM API provides a comprehensive backend solution for bike service centers with these key features:

- Complete CRUD operations for customers, bikes, and service records
- Specialized endpoints for service workflow management
- Robust data validation and error handling
- Detailed service history tracking and reporting
- Real-time status updates for service jobs

This RESTful API enables service centers to efficiently manage their operations while providing customers with transparent service tracking and communication.

## **Tech Stack**

- **Node.js**
- **Express.js**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**

## Setup Guide

### Requirements

- Node.js v14+
- PostgresSQL
- npm or yarn

### Installation

Certainly. Below is a professional and production-aligned **step-by-step project setup guide** for a backend stack using:

> Node.js + Express.js + TypeScript + Prisma ORM + PostgreSQL

---

## ✅ **Project Setup Guide**

### 1. **Initialize the Node.js Project**

```bash
mkdir your-project-name
cd your-project-name
npm init -y

```

---

### 2. **Install Required Dependencies**

### Runtime dependencies:

```bash
npm install express cors dotenv

```

### Development dependencies:

```bash
npm install -D typescript ts-node-dev @types/node @types/express

```

---

### 3. **Initialize TypeScript Configuration**

```bash
npx tsc --init

```

Modify `tsconfig.json`:

```
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "src",
    "outDir": "dist",
    "esModuleInterop": true,
    "strict": true,
    "moduleResolution": "node",
    "skipLibCheck": true
  }
}

```

---

### 6. **Setup PostgreSQL with Prisma**

### 6.1 Install Prisma CLI & Client

```bash
npm install prisma --save-dev
npm install @prisma/client

```

### 6.2 Initialize Prisma

```bash
npx prisma init

```

This creates:

- `.env`
- `prisma/schema.prisma`

### 6.3 Configure `.env`

```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

```

> Example: postgresql://postgres:admin@localhost:5432/mydb

---

### 8. **Generate Prisma Client**

```bash
npx prisma generate

```

### 9. **Run Migration**

```bash
npx prisma migrate dev --name init

```

---

### 10. **Setup Prisma Client**

Create `src/app/config/index.ts`:

```
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default prisma

```

---

### 11. **Add Scripts to `package.json`**

```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/app.ts",
  "build": "tsc",
  "start": "node dist/app.js",
  "prisma:generate": "prisma generate",
  "prisma:migrate": "prisma migrate dev"
}

```

---

## 🚀 You're Ready

You now have a clean, scalable backend stack using:

- **Type-safe ORM (Prisma)**
- **Structured project layout**
- **Modern JavaScript tooling (TypeScript + ts-node-dev)**
- **Reliable PostgreSQL integration**

---

Would you like a full working boilerplate of this setup zipped and shared? Or should we scaffold out routes/services next?

# Key Features

- **Customer Management:** Store contact details, service history
- **Bike Management:** Track bike details, ownership, service history
- **Service Operations:** Create, schedule, track, and invoice service requests
- **Job Assignment:** Assign technicians to jobs with workload tracking
- **Reporting:** Generate service metrics and customer analytics
