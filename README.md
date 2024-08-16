# Article Search Application

This is a simple React application that allows users to search for articles. The application highlights matching terms in the article titles and content as the user types in the search bar.

## Features

- **Search Functionality**: Users can search for articles by typing in the search bar. The application filters the articles and highlights the matching search terms.
- **Dynamic Filtering**: Articles are dynamically filtered and displayed based on the search term.
- **Article Highlighting**: Matching terms within the articles are highlighted to enhance visibility.

## Components

- **App**: The main component that renders the search bar and the list of articles.
- **SearchBar**: A component that handles the search input.
- **ArticleList**: A component that filters and displays a list of articles based on the search term.
- **ArticleItem**: A component that displays an individual article with highlighted search terms.

## Installation

To get started with this project, follow the instructions below.

### Prerequisites

- Node.js (v14.x or later recommended)
- npm (v6.x or later recommended)

### Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/osamaalbraidy/search-assignment.git
   cd search-assignment
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

### Running the Application

To start the application locally, use the following command:

```bash
npm run dev
```

This will start the development server, and you can view the application by navigating to `http://localhost:3000` in your web browser.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

The production-ready build will be available in the `build` directory.

## Project Structure

- `src/`: Contains the source code for the application.
- `components/`: Contains the reusable components such as `SearchBar`, `ArticleList`, and `ArticleItem`.
- `App.js`: The main application component.
- `public/`: Contains static assets and the HTML template.

## Contributing

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are welcome.

## License

This project is licensed under the MIT License.