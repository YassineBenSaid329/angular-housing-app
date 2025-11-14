# Angular Housing Locations App

A modern housing listings application built with Angular, featuring a searchable catalog of housing locations with detailed property information.

## 🏠 About The Project

This application allows users to browse through available housing locations, filter them by city, and view detailed information about each property. Built following [Angular's official "First App" tutorial](https://angular.dev/tutorials/first-app), it demonstrates core Angular concepts including:

- Component-based architecture
- Routing and navigation
- Service injection and data fetching
- Template-driven forms
- Responsive design

## ✨ Features

- **Browse Housing Listings**: View all available housing locations in a responsive grid layout
- **Search by City**: Filter properties by city name in real-time
- **Property Details**: Click on any property to view detailed information
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **REST API Integration**: Fetches data from a local JSON server

## 🛠️ Built With

- [Angular](https://angular.dev/) - Modern web framework
- TypeScript - Type-safe JavaScript
- CSS3 - Styling and responsive design
- JSON Server - Mock REST API (for development)

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Angular CLI** (optional but recommended)

```bash
# Install Angular CLI globally (optional)
npm install -g @angular/cli
```

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YassineBenSaid329/angular-housing-app.git
   cd angular-housing-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the JSON Server** (in a separate terminal)
   
   The application requires a local API server running on port 3000.
   
   ```bash
   # Navigate to your project directory
   npm run json-server
   ```
   
   Or manually:
   ```bash
   json-server --watch db.json --port 3000
   ```

4. **Start the development server**
   ```bash
   ng serve
   # or
   npm start
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:4200/`

## 📁 Project Structure

```
src/
├── app/
│   ├── details/              # Property details component
│   │   ├── details.ts
│   │   └── details.css
│   ├── home/                 # Home page component
│   │   ├── home.ts
│   │   └── home.css
│   ├── housing-location/     # Housing card component
│   │   ├── housing-location.ts
│   │   └── housing-location.css
│   ├── app.ts               # Root component
│   ├── app.css              # Root component styles
│   ├── app.config.ts        # Application configuration
│   ├── routes.ts            # Routing configuration
│   ├── housing.ts           # Housing service
│   └── housinglocation.ts   # Housing location interface
├── assets/                  # Static assets (images, icons)
│   ├── angular.svg
│   ├── logo.svg
│   └── location-pin.svg

├── index.html              # Main HTML file
├── main.ts                 # Application entry point
└── styles.css              # Global styles
```

## 🔧 Configuration

### API Endpoint

The application is configured to fetch data from `http://localhost:3000/locations`. You can modify this in `src/app/housing.ts`:

```typescript
url = 'http://localhost:3000/locations';
```

### Data Structure

The application expects housing location data in the following format:

```json
{
  "id": 1,
  "name": "Property Name",
  "city": "City Name",
  "state": "State",
  "photo": "path/to/photo.jpg",
  "availableUnits": 5,
  "wifi": true,
  "laundry": true
}
```

## 🎨 Available Scripts

- `ng serve` - Start development server
- `ng build` - Build the project for production
- `ng test` - Run unit tests
- `ng lint` - Lint the codebase

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 500px - 768px
- **Mobile**: < 499px

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is based on Angular's official tutorial and is available for educational purposes.

## 🙏 Acknowledgments

- [Angular Documentation](https://angular.dev/tutorials)
- Angular Team for the excellent tutorials
- Icons and assets from the Angular tutorial

## 📧 Contact

Mohamed Yassine Ben Said - bensaidyassine.775@gmail.com

Project Link: [https://github.com/YassineBenSaid329/angular-housing-app](https://github.com/YassineBenSaid329/angular-housing-app)

---

**Note**: This project was created following Angular's official tutorial. It's designed for learning purposes and demonstrates fundamental Angular concepts.