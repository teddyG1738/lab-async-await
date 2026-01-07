import { JSDOM } from "jsdom";
import { expect } from "chai";
import { fetchAndDisplay } from "../index.js";

describe("Asynchronous Fetching", function() {
  let dom, container;

  beforeEach(() => {
    dom = new JSDOM(`<!DOCTYPE html><div id="container"></div>`, {
      runScripts: "dangerously",
      resources: "usable"
    });
    global.window = dom.window;
    global.document = dom.window.document;
    container = document.querySelector("#container");
    window.fetchAndDisplay = fetchAndDisplay;
  });

  it("should fetch to external api and add information to page", async function() {
    await fetchAndDisplay();
    expect(container.innerHTML).to.include("sunt aut");
  });

  it("should create an h1 and p element to add", async function() {
    await fetchAndDisplay();
    const h1 = container.querySelector("h1");
    const p = container.querySelector("p");
    expect(h1.textContent).to.not.be.empty;
    expect(p.textContent).to.not.be.empty;
  });
});
