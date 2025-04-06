# Yash Yash Portfolio Website Assignment

This is a personal portfolio website built using React. The project runs on port **5575** and is containerized using Docker.

## Steps to Complete and Run the Project

### 1. Create the React App

npx create-react-app yash_yash_final_site
cd yash_yash_final_site
### 2. Install Tailwind CSS and Heroicons
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install @heroicons/react

### 3.Create a Dockerfile in the root folder:
Dockerfile
# Use official Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install
COPY . .

# Build the React app
RUN npm run build

# Serve the app using a simple static server
RUN npm install -g serve
EXPOSE 5575
CMD ["serve", "-s", "build", "-l", "5575"]

### 4. Build and Run the Docker Container
### Build the Docker image
docker build -t yash_yash_coding_assignment14 .

# Run the Docker container
docker run -p 5575:80 yash_yash_coding_assignment14
### 5. Access the Website
Open your browser and visit:
http://localhost:5575

### Output
You will now see the portfolio website running successfully in Docker.