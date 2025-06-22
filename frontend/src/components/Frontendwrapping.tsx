import React from 'react';
import { getOpenAIResponse } from '../services/openaiService.ts';
import { useState } from 'react';
import OpenAIComponent from './OpenAIComponent';
import './Style.css'; // make sure this includes styles for the layout

const TriageApp: React.FC = () => {
  return (
    <div className="container">
      <header>
        <h1>Triage</h1>
        <h5>an AI powered First-Aid assistant</h5>
      </header>
      <hr />

      <main>
        <aside>
          <p>
            <a
              href="https://www.redcross.org/content/dam/redcross/uncategorized/11/RTE_Textbook_Sample.pdf"
              title="First-Aid Manual"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get access to the manual
            </a>
          </p>
          <p>Where’s the closest medical treatment?</p>
          <div className="disclaimer">
            <h3>DISCLAIMER:</h3>
            <h4>This is not a substitute for medical treatment.</h4>
            <h4>Please visit a medical professional for proper care.</h4>
          </div>
        </aside>

        <section className="main-panel">
          <div className="intro">
            <p>Welcome to Triage! Your personal AI aide!</p>
          </div>

          <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          // rows="5"
          // cols="50"
          rows={5}
          cols={50}
          placeholder="Type your prompt here..."
        />
        <br />
        <button type="submit">Get Response</button>
      </form>
      <div>
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
          <OpenAIComponent />
        </section>
      </main>

      <footer>
        <p>© 2025 Triage AI. All rights reserved.</p>
        <p>Contact us at: [Link TBD]</p>
      </footer>
    </div>
  );
};

export default TriageApp;
