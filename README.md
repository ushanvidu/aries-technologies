# Aries Technologies Website

A modern, professional website for Aries Technologies featuring advanced animations, service detail pages, and MongoDB backend integration.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Visit http://localhost:3000

### Backend Setup

```bash
cd backend
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your MongoDB URI

npm run dev
```

API runs on http://localhost:5000

## 📁 Project Structure

- `/frontend` - Next.js 16 application with TypeScript
- `/backend` - Express.js API with MongoDB

## 🎨 Features

- **Service Detail Pages**: Software Solutions, AI/ML, Web Development, Custom Solutions
- **Advanced Animations**: Framer Motion, Three.js particles
- **MongoDB Integration**: Contact forms and service inquiries
- **Responsive Design**: Mobile-first approach
- **RESTful API**: Validated endpoints with error handling

## 🧪 Testing

1. Start MongoDB: `brew services start mongodb-community`
2. Start backend: `cd backend && npm run dev`
3. Start frontend: `cd frontend && npm run dev`
4. Visit http://localhost:3000
5. Test contact form and service inquiry forms

## 📚 Documentation

See [walkthrough.md](file:///.gemini/antigravity/brain/99b85918-cc63-4038-a9a6-12b09e538d8d/walkthrough.md) for complete documentation.

## 🛠️ Tech Stack

**Frontend:**
- Next.js 16, React 19, TypeScript
- Tailwind CSS v4
- Framer Motion, Three.js
- Lucide React Icons

**Backend:**
- Express.js, MongoDB, Mongoose
- Express Validator, Helmet, CORS

## 🔧 Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/aries-technologies
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

## 📝 API Endpoints

- `POST /api/contact` - Submit contact form
- `POST /api/services/inquiry` - Submit service inquiry
- `GET /api/health` - Health check

## 🚀 Deployment

**Frontend**: Deploy to Vercel  
**Backend**: Deploy to Railway, Render, or AWS  
**Database**: Use MongoDB Atlas for production

## 📄 License

Private - Aries Technologies
