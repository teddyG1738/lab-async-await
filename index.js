// index.js

// Async function the lab expects
async function fetchAndDisplay() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!res.ok) throw new Error("Network response was not ok");

    const data = await res.json();

    // The container element the test expects
    const container = document.querySelector("#container");
    if (!container) throw new Error("Container not found");

    // Create elements
    const h1 = document.createElement("h1");
    h1.textContent = data.title; // 'sunt aut ...'

    const p = document.createElement("p");
    p.textContent = data.body;

    // Append to container
    container.appendChild(h1);
    container.appendChild(p);

  } catch (err) {
    console.error(err);
  }
}

// Export for Node/Mocha
if (typeof module !== "undefined") {
  module.exports = { fetchAndDisplay };
}

// Attach to window for jsdom or browser execution
if (typeof window !== "undefined") {
  window.fetchAndDisplay = fetchAndDisplay;
}

