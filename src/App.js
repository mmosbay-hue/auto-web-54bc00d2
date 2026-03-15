import React from 'react';
import Header from './components/Header';
import GainsGenerator from './components/GainsGenerator';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-200 antialiased min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-12">
        <GainsGenerator />
      </main>
      <Footer />
    </div>
  );
}
