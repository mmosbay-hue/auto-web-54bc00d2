import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GainsGenerator from './components/GainsGenerator';

export default function App() {
  return (
    <div className="bg-slate-900 text-slate-200 antialiased">
      <Header />
      <main>
        <GainsGenerator />
      </main>
      <Footer />
    </div>
  );
}
