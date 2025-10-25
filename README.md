# Quote App

A full-stack quote management application that allows users to create, read, update, delete, and get random quotes. Built with modern web technologies and a clean, responsive interface.

## Features

- **Create Quotes**: Add new quotes with author attribution
- **View All Quotes**: Browse through all saved quotes
- **View Individual Quote**: See details of a specific quote
- **Update Quotes**: Edit existing quotes
- **Delete Quotes**: Remove quotes from the database
- **Random Quote**: Get a random quote from the collection

## Tech Stack

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **CORS**: Cross-origin resource sharing
- **Body-Parser**: Request body parsing middleware

### Frontend
- **Vue.js 3**: Progressive JavaScript framework
- **Vue Router**: Official router for Vue.js
- **Vuex**: State management pattern and library
- **Tailwind CSS**: Utility-first CSS framework

## Project Structure

```
quote-app/
├── backend/
│   ├── models/
│   │   └── Quotes.js          # Quote model schema
│   ├── routes/
│   │   └── Quotes.js          # Quote API routes
│   ├── app.js                 # Express server configuration
│   └── package.json
└── frontend/
    ├── src/
    │   ├── views/
    │   │   ├── Home.vue       # Home page
    │   │   ├── All.vue        # All quotes view
    │   │   └── Quote.vue      # Single quote view
    │   ├── store/
    │   │   └── index.js       # Vuex store
    │   ├── router/
    │   │   └── index.js       # Vue Router configuration
    │   ├── App.vue            # Root component
    │   └── main.js            # Application entry point
    └── package.json
```

## Installation & Setup

### Prerequisites
- Node.js (v12 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Update the MongoDB connection string in `app.js` (line 10) with your own MongoDB URI

4. Start the backend server:
```bash
npm start
```

The backend server will run on `http://localhost:3000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run serve
```

The frontend application will be available at `http://localhost:8080` (or the next available port)

## API Endpoints

### Base URL: `http://localhost:3000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Home route |
| GET | `/quotes` | Get all quotes |
| POST | `/quotes/new` | Create a new quote |
| GET | `/quotes/get/:id` | Get a specific quote by ID |
| PATCH | `/quotes/update/:id` | Update a quote by ID |
| DELETE | `/quotes/delete/:id` | Delete a quote by ID |
| GET | `/quotes/random` | Get a random quote |

### Example Request Body (POST/PATCH)
```json
{
  "content": "The only way to do great work is to love what you do.",
  "author": "Steve Jobs"
}
```

## Development

### Backend Commands
```bash
npm start      # Start backend server with nodemon (auto-reload)
```

### Frontend Commands
```bash
npm run serve  # Start development server
npm run build  # Build for production
npm run lint   # Lint and fix files
```

## Database Schema

### Quote Model
```javascript
{
  content: String,  // The quote text
  author: String    // The quote author
}
```

## License

ISC

## Author

uma-victor1
