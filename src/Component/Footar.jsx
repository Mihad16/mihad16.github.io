import React from "react";

function Footar() {
  return (
    <footer className="bg-amber-300 text-white text-center py-4 w-max h-10">
      <p className="text-sm font-mono">
        &copy; {new Date().getFullYear()} Mihad. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footar;
