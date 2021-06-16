import { render, queryByAttribute } from "@testing-library/react";
import { AuthPage } from "modules/auth/auth.page";

test("Render AUTH PAGE", () => {
  const dom = render(<AuthPage />);

  const getById = queryByAttribute("id", dom.container, "LoginForm");
  expect(getById?.tagName).toBe("FORM");
});
