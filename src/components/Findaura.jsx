import React, { useState } from "react";

const Findaura = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center h-full"
      style={{ fontFamily: "robit, sans-serif", background: "transparent" }}
    >
      <img
        src="/FindAura..png"
        alt="FindAura Logo"
        className="mb-6"
        style={{ width: "220px", height: "auto", background: "transparent" }}
      />
      <h2
        className="text-3xl md:text-4xl font-bold text-white text-center mb-8"
        style={{ background: "transparent" }}
      >
        Coming soon
      </h2>
      <p
        className="text-lg md:text-2xl text-gray-300 text-center max-w-2xl"
        style={{ fontFamily: "robit, sans-serif", background: "transparent" }}
      >
        We are building a one of a kind agentic AI based mental health and wellness platform, built solely by therapists, psychologists, and mental health professionals.
        <br />
        We are not looking to replace human therapists but to assist client-therapist connection with AI as an aid.
      </p>

      <button
        className="mt-8 px-8 py-3 rounded-md bg-[#DE9F3A] font-semibold hover:bg-[#c98b2d] transition-all duration-200 text-lg"
        style={{
          fontFamily: "robit, sans-serif",
          outline: "none",
          border: "none",
          marginBottom: showForm ? '32px' : '0',
          color: '#DE9F3A',
          backgroundColor: "#222"
        }}
        onClick={() => setShowForm(true)}
      >
        Sign Up
      </button>

      {showForm && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.13)"
          }}
        >
          <div
            style={{
              background: "transparent", // Changed to transparent
              padding: "16px",
              borderRadius: "6px",
              minWidth: "300px",
              position: "relative",
              maxWidth: "97vw",
              width: "auto"
            }}
          >
            <button
              aria-label="Close"
              style={{
                position: "absolute",
                top: "8px",
                right: "12px",
                background: "none",
                border: "none",
                fontSize: "24px",
                color: "#111", // Black cross button
                cursor: "pointer",
                fontWeight: "bold",
                lineHeight: "1"
              }}
              onClick={() => setShowForm(false)}
            >
              &times;
            </button>
            <iframe
              width="540"
              height="305"
              src="https://31e53447.sibforms.com/serve/MUIFAAhvHRBolcC4UlIZeD6iw1btrIL6i8L2bVj5zuxLKKwkvcrMk1pPdmbSf2vg0Emt-RM2gaOSan8W0Hw4BXt_-WWWNYAZAut-HRZnz0YrDWF9fG7CcwABTR1Azu9fXaDrf8AQAwMmk9kK7x7ETydZYHGrzWVqVxkFqlXrkjseDNwgs48UKLKQZCsaF0WXbHkQEfhZsf1MuuvAaQ=="
              frameBorder="0"
              scrolling="auto"
              allowFullScreen
              title="Findaura Signup"
              style={{
                display: "block",
                margin: "0 auto",
                maxWidth: "100%",
                background: "transparent",
                border: "none"
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Findaura;
