import React from 'react'

export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-[100] bg-white text-black px-4 py-2 rounded shadow"
    >
      Skip to content
    </a>
  )
}
