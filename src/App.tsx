import React, { Suspense } from "react";
import { Navigation } from "./components/navigation/NavBar";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <Navigation />
      <main>
        <Suspense fallback={<div>Loading…</div>}>
          <Outlet /> {/* where child routes render */}
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
