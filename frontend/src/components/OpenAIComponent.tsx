// frontend/src/components/OpenAIComponent.tsx

import React, { useState } from 'react';
import { getOpenAIResponse } from '../services/openaiService.ts';
import './OpenAIComponent.css';

const OpenAIComponent = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!prompt.trim()) {
      setResponse('Please enter a prompt.');
      return;
    }

    setLoading(true);
    setResponse('');
    try {
      const aiResponse = await getOpenAIResponse(prompt);
      setResponse(aiResponse || 'Error');
    } catch (err) {
      setResponse('Error fetching response.');
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="container">
      <header>
        <h1>Triage</h1>
        <h5>an AI powered First-Aid assistant</h5>
      </header>
      <hr />

      <main>
        <aside
        className='aside'>
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
        className= "prompt-input"
          placeholder="Type your prompt here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={5}
          cols={50}
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Get Response'}
        </button>
      </form>
      {loading && (
        <div className="spinner-container">
          <div className="spinner" data-testid="spinner"/>
          <p>Please wait while we process your request...</p>
        </div>
      )}

      {!loading && response && (
        <div
        className= "response-container">
          <h2
          className='response-header'>
            Response:</h2>
          <p>{response}</p>
          
        </div>
      )}

        </section>
      </main>
       <footer
       className= "footer">
        <p>© 2025 Triage AI. All rights reserved.</p>
        <p>Contact us at: some-link tbd"</p>
    </footer>
    </div>
  );
};

export default OpenAIComponent;
