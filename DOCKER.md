# 🐳 Docker Deployment Guide

## Overview

This guide explains how to deploy the Aries Technologies website using Docker and Docker Compose. The application consists of three main services:
- **Frontend**: Next.js application (Port 3000)
- **Backend**: Express.js API (Port 5000)
- **MongoDB**: Database (Port 27017)

## Prerequisites

- Docker installed (version 20.10 or higher)
- Docker Compose installed (version 2.0 or higher)
- Git (to clone the repository)

## Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/ushanvidu/aries-technologies.git
cd aries-technologies
```

### 2. Environment Configuration

Create a `.env` file in the root directory:

```env
# MongoDB Configuration
MONGO_ROOT_USERNAME=admin
MONGO_ROOT_PASSWORD=your_secure_password

# Backend Configuration
MONGODB_URI=mongodb://mongodb:27017/aries-technologies
NODE_ENV=production

# Frontend Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### 3. Build and Run with Docker Compose

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Check service status
docker-compose ps
```

### 4. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api
- **MongoDB**: localhost:27017

## Individual Service Deployment

### Frontend Only

```bash
cd frontend
docker build -t aries-frontend .
docker run -p 3000:3000 -e NEXT_PUBLIC_API_URL=http://localhost:5000/api aries-frontend
```

### Backend Only

```bash
cd backend
docker build -t aries-backend .
docker run -p 5000:5000 -e MONGODB_URI=your_mongodb_uri aries-backend
```

## Docker Commands Reference

### Starting Services

```bash
# Start all services
docker-compose up -d

# Start specific service
docker-compose up -d frontend
docker-compose up -d backend
docker-compose up -d mongodb
```

### Stopping Services

```bash
# Stop all services
docker-compose down

# Stop and remove volumes (WARNING: deletes database data)
docker-compose down -v

# Stop specific service
docker-compose stop frontend
```

### Viewing Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f frontend
docker-compose logs -f backend
docker-compose logs -f mongodb
```

### Rebuilding Services

```bash
# Rebuild all services
docker-compose up -d --build

# Rebuild specific service
docker-compose up -d --build frontend
```

### Accessing Service Shells

```bash
# Frontend container
docker-compose exec frontend sh

# Backend container
docker-compose exec backend sh

# MongoDB container
docker-compose exec mongodb mongosh
```

## Production Deployment

### 1. Update Environment Variables

Create a production `.env` file:

```env
MONGO_ROOT_USERNAME=admin
MONGO_ROOT_PASSWORD=strong_production_password
MONGODB_URI=mongodb://mongodb:27017/aries-technologies
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.yourdomain.com/api
```

### 2. Use Production Docker Compose

Create `docker-compose.prod.yml`:

```yaml
version: '3.8'

services:
  mongodb:
    image: mongo:7.0
    container_name: aries-mongodb
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: ${MONGO_ROOT_USERNAME}
      MONGO_INITDB_ROOT_PASSWORD: ${MONGO_ROOT_PASSWORD}
    volumes:
      - mongodb_data:/data/db
    networks:
      - aries-network

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    container_name: aries-backend
    restart: always
    environment:
      NODE_ENV: production
      PORT: 5000
      MONGODB_URI: ${MONGODB_URI}
    depends_on:
      - mongodb
    networks:
      - aries-network

  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    container_name: aries-frontend
    restart: always
    environment:
      NODE_ENV: production
      NEXT_PUBLIC_API_URL: ${NEXT_PUBLIC_API_URL}
    depends_on:
      - backend
    networks:
      - aries-network

  nginx:
    image: nginx:alpine
    container_name: aries-nginx
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - frontend
      - backend
    networks:
      - aries-network

networks:
  aries-network:
    driver: bridge

volumes:
  mongodb_data:
    driver: local
```

### 3. Deploy to Production

```bash
# Build and deploy
docker-compose -f docker-compose.prod.yml up -d --build

# Monitor logs
docker-compose -f docker-compose.prod.yml logs -f
```

## Troubleshooting

### Port Already in Use

```bash
# Check what's using the port
lsof -i :3000
lsof -i :5000
lsof -i :27017

# Kill the process or change ports in docker-compose.yml
```

### Container Won't Start

```bash
# Check logs
docker-compose logs [service-name]

# Rebuild from scratch
docker-compose down -v
docker-compose up -d --build
```

### Database Connection Issues

```bash
# Check MongoDB is running
docker-compose ps mongodb

# Check MongoDB logs
docker-compose logs mongodb

# Access MongoDB shell
docker-compose exec mongodb mongosh
```

### Frontend Can't Connect to Backend

1. Verify `NEXT_PUBLIC_API_URL` is set correctly
2. Check backend is running: `docker-compose ps backend`
3. Test backend API: `curl http://localhost:5000/api/health`

## Health Checks

### Backend Health Check

The backend includes a health check endpoint:

```bash
curl http://localhost:5000/api/health
```

### Container Health Status

```bash
docker-compose ps
```

## Backup and Restore

### Backup MongoDB Data

```bash
# Create backup
docker-compose exec mongodb mongodump --out /data/backup

# Copy backup to host
docker cp aries-mongodb:/data/backup ./mongodb-backup
```

### Restore MongoDB Data

```bash
# Copy backup to container
docker cp ./mongodb-backup aries-mongodb:/data/restore

# Restore data
docker-compose exec mongodb mongorestore /data/restore
```

## Performance Optimization

### 1. Use Multi-Stage Builds (Already Implemented)

Both Dockerfiles use multi-stage builds to minimize image size.

### 2. Enable Docker BuildKit

```bash
export DOCKER_BUILDKIT=1
docker-compose build
```

### 3. Use Docker Volumes for Development

```yaml
volumes:
  - ./frontend:/app
  - /app/node_modules
  - /app/.next
```

## Security Best Practices

1. **Never commit `.env` files** - Use `.env.example` instead
2. **Use strong passwords** for MongoDB
3. **Run containers as non-root users** (already implemented)
4. **Keep images updated** - Regularly update base images
5. **Use secrets management** for production
6. **Enable HTTPS** with SSL certificates

## Monitoring

### View Resource Usage

```bash
# All containers
docker stats

# Specific container
docker stats aries-frontend
```

### Check Container Health

```bash
docker inspect --format='{{.State.Health.Status}}' aries-backend
```

## CI/CD Integration

### GitHub Actions Example

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Build and push Docker images
        run: |
          docker-compose build
          docker-compose push
      
      - name: Deploy to server
        run: |
          ssh user@server 'cd /app && docker-compose pull && docker-compose up -d'
```

## Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Next.js Docker Documentation](https://nextjs.org/docs/deployment#docker-image)
- [MongoDB Docker Documentation](https://hub.docker.com/_/mongo)

## Support

For issues or questions:
- Check the logs: `docker-compose logs -f`
- Review this documentation
- Contact the development team
