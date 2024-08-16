import { useState } from 'react';
import { SearchBar, ArticleList } from './components';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const articles = [
    { id: 1, title: "React.js Basics", content: "Learn the basics of React.js, a popular JavaScript library for building user interfaces." },
    { id: 2, title: "Understanding Redux", content: "Redux is a state management tool that can be used with React.js to handle complex state." },
    { id: 3, title: "JavaScript ES6 Features", content: "ES6 introduced several new features to JavaScript, including arrow functions, classes, and more." },
    { id: 4, title: "Tailwind CSS Tutorial", content: "Tailwind CSS is a utility-first CSS framework that allows for rapid UI development." },
    { id: 5, title: "Next.js Overview", content: "Next.js is a React framework that enables server-side rendering and static site generation." },
    { id: 6, title: "Building REST APIs with Express", content: "Express.js is a web application framework for Node.js, designed for building RESTful APIs." },
    { id: 7, title: "MongoDB Basics", content: "MongoDB is a NoSQL database that uses a document-oriented data model." },
    { id: 8, title: "Introduction to TypeScript", content: "TypeScript is a strongly typed programming language that builds on JavaScript." },
    { id: 9, title: "Flutter for Mobile Development", content: "Flutter is an open-source UI software development kit for building natively compiled applications." },
    { id: 10, title: "Git and GitHub Essentials", content: "Git is a version control system, and GitHub is a platform for hosting and collaborating on Git repositories." },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Article Search
      </h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ArticleList articles={articles} searchTerm={searchTerm} />
    </div>
  );
}




