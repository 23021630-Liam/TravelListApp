// src/components/Stats.js

import React from "react";

function Stats({ items }) {
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = items.length > 0 ? Math.round((numPacked / items.length) * 100) : 0;

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <p>You got everything packed! 🎉</p>
      ) : (
        <p>
          {numPacked}/{items.length} items packed ({percentage}%)
        </p>
      )}
    </footer>
  );
}

export default Stats;
