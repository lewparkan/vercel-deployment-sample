"use client";

import { useState } from "react";

const greetings = [
  { hello: "Hello, World!", language: "English" },
  { hello: "¡Hola, Mundo!", language: "Spanish" },
  { hello: "Bonjour, le monde !", language: "French" },
  { hello: "Ciao, mondo!", language: "Italian" },
  { hello: "こんにちは、世界！", language: "Japanese" },
  { hello: "Olá, mundo!", language: "Portuguese" },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const greeting = greetings[index];

  return (
    <main className="hello-page">
      <header className="site-header">
        <span className="wordmark"><span aria-hidden="true">✳</span> hello.</span>
        <span className="header-note">Hello in six languages</span>
      </header>

      <section className="greeting-card" aria-label="Hello world">
        <div className="eyebrow"><span className="status-dot" /> Nice to meet you</div>
        <div className="hello-orb" aria-hidden="true">✳</div>
        <div className="greeting" aria-live="polite" aria-atomic="true">
          <p className="language">{greeting.language}</p>
          <h1 key={index}>{greeting.hello}</h1>
        </div>
        <p className="description">Glad you&apos;re here.<br />Try a greeting in another language.</p>
        <button className="hello-button" onClick={() => setIndex((current) => (current + 1) % greetings.length)}>
          Try another language <span aria-hidden="true">↗</span>
        </button>
        <div className="language-dots" aria-label={`Language ${index + 1} of ${greetings.length}`}>
          {greetings.map((item, position) => (
            <span key={item.language} className={position === index ? "active" : ""} />
          ))}
        </div>
      </section>

      <footer className="site-footer"><span>Thanks for stopping by.</span></footer>
    </main>
  );
}
