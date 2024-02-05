// src/components/Chart.jsx
import React, { useEffect, useRef } from 'react';

const Chart = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Example data for the bar chart
    const data = [20, 50, 30, 70, 40];

    // Bar width and spacing
    const barWidth = 30;
    const barSpacing = 10;

    // Set the canvas size based on the data
    canvas.width = (barWidth + barSpacing) * data.length;
    canvas.height = Math.max(...data) + 20;

    // Draw the bars
    data.forEach((value, index) => {
      const x = index * (barWidth + barSpacing);
      const y = canvas.height - value;
      const height = value;

      ctx.fillStyle = 'blue';
      ctx.fillRect(x, y, barWidth, height);
    });
  }, []);

  return (
    <div>
      {/* Your chart rendering logic */}
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Chart;
