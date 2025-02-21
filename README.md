# AI-Powered Legal Aid Assistant

## Overview

The AI-Powered Legal Aid Assistant is a web application that provides legal assistance using AI. It enables users to ask legal queries and receive responses based on legal documentation and AI-powered insights.

## Try It Out 🌐

Experience the AI-Powered Legal Aid Assistant live:&#x20;

👉 [click here to try](https://legal-aid-assistant-by-ahsan-and-shafiullah-bn7c.vercel.app/)

## Features

- User authentication via Google/GitHub (NextAuth.js)
- AI-powered legal query processing
- Secure database storage with MongoDB
- Responsive UI built with Next.js, Tailwind CSS, and Shadcn

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS, Shadcn
- **Backend:** Node.js, NextAuth.js, Typescript
- **Database:** MongoDB, Mongoose
- **AI Integration:** Google Generative AI
- **Authentication:** NextAuth.js (Google & GitHub OAuth)
- **UI Components:** Lucide React, Radix UI

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 18)
- MongoDB

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/auth-legal.git
   cd auth-legal
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Create a `.env.local` file in the root directory and configure the following:
     ```env
     NEXTAUTH_URL=http://localhost:3000
     NEXTAUTH_SECRET=your_secret_key
     GOOGLE_CLIENT_ID=your_google_client_id
     GOOGLE_CLIENT_SECRET=your_google_client_secret
     GITHUB_CLIENT_ID=your_github_client_id
     GITHUB_CLIENT_SECRET=your_github_client_secret
     MONGODB_URI=your_mongodb_connection_string
     API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
     ```
4. Run the development server:
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

## Installing Dependencies for Beginners 🚀

For those new to development, follow these simple steps:

1. **Ensure Node.js is Installed** 🟢

   - Download from [Node.js Official Site](https://nodejs.org/)
   - Install it by running the setup file.
   - Verify installation:
     ```sh
     node -v
     ```

2. **Install Project Dependencies** 📦

   - Navigate to the project folder:
     ```sh
     cd auth-legal
     ```
   - Run:
     ```sh
     npm install
     ```
   - This will install all required packages.

3. **Run the App in Development Mode** 🛠️

   - Start the server with:
     ```sh
     npm run dev
     ```
   - Open `http://localhost:3000` in your browser to view it in action.

&#x20;

## Scripts

- `npm run dev` – Start development server
- `npm run build` – Build the application
- `npm run start` – Start production server
- `npm run lint` – Run ESLint for code quality

## License

This project is licensed under the MIT License.

## Contact

For any queries, reach out [Linkedin](https://www.linkedin.com/in/ahsan-raza8hbb/)

