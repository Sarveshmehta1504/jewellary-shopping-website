import React from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import BusList from './components/BusList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Bus Booking System</h1>
        <SearchForm />
        <BusList />
      </main>
      <Footer />
    </div>
  );
}

export default App;