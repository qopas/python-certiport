"use client";
import React from 'react';

interface QuizWatermarkProps {
  name: string;
  detail: string;
}

const escapeXml = (text: string) =>
  text.replace(/[<>&"']/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' }[c] as string));

// Tiled, see-through label naming the student, drawn over the whole quiz so a photo of any
// question shows who took it. It ignores pointer events, so the quiz underneath works as usual.
const QuizWatermark: React.FC<QuizWatermarkProps> = ({ name, detail }) => {
  // Dark fill reads on white cards; the pale outline keeps it readable on the dark code blocks.
  const tile = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="210">
    <g transform="rotate(-24 200 105)" font-family="Arial, Helvetica, sans-serif" text-anchor="middle" fill="#1e1b4b" fill-opacity="0.16" stroke="#ffffff" stroke-opacity="0.3" stroke-width="1" paint-order="stroke">
      <text x="200" y="98" font-size="34" font-weight="700">${escapeXml(name)}</text>
      <text x="200" y="128" font-size="17" font-weight="600">${escapeXml(detail)}</text>
    </g>
  </svg>`;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none"
      style={{
        zIndex: 2147483647,
        backgroundImage: `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(tile)}")`,
        backgroundRepeat: 'repeat',
      }}
    />
  );
};

export default QuizWatermark;
