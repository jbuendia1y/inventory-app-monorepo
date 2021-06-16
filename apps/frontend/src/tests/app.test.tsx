import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import App from "App";

test("Render the /...MainComponent.../", () => {
  const dom = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(dom.asFragment().childNodes.length > 0).toBe(true);
});
