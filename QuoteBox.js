import React, { useEffect, useState } from 'react';

function QuoteBox({ category }) {
  const [quote, setQuote] = useState(null);
  const [copied, setCopied] = useState(false);

  const fetchQuote = async () => {
    try {
      const response = await fetch(`http://localhost:8080/quotes/random?category=${category}`);
      const data = await response.json();
      setQuote(data);
      setCopied(false);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, [category]);

  const handleCopy = () => {
    if (quote) {
      navigator.clipboard.writeText(`"${quote.quote}" — ${quote.author}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!quote) {
    return <p>Loading quote...</p>;
  }

  return (
    <div className="quote-box">
      <p className="quote-text">"{quote.quote}"</p>
      <p className="quote-author">— {quote.author}</p>

      <div className="button-group">
        <button onClick={fetchQuote}>New Quote</button>
        <button onClick={handleCopy}>{copied ? 'Copied!' : 'Copy'}</button>
      </div>
    </div>
  );
}

export default QuoteBox;
