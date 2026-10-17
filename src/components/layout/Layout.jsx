import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-light-bg dark:bg-dark-bg text-slate-800 dark:text-gray-100 transition-colors duration-200 bg-grid-pattern relative">
      <Navbar />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
