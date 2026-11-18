"use client";

import { useEffect, useState } from "react";

const KEY = "apex-age-ok";

export default function AgeGate() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(KEY) !== "1") setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="gate" role="dialog" aria-modal="true" aria-labelledby="gate-title">
      <div className="gate-box">
        <h2 id="gate-title">Age verification</h2>
        <p>You must be of legal age to purchase ammunition in your jurisdiction to enter this site.</p>
        <button
          className="btn btn-green"
          onClick={() => {
            try { localStorage.setItem(KEY, "1"); } catch {}
            setShow(false);
          }}
        >
          I am of legal age
        </button>
        <a className="btn btn-ghost" style={{ color: "var(--forest-900)", borderColor: "var(--forest-700)" }} href="https://www.google.com">
          Leave
        </a>
      </div>
    </div>
  );
}
