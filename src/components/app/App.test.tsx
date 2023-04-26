import App from "@src/components/app/App";
import { render } from "@src/test/utils/rtl-setup";
import { describe } from "vitest";

describe("App", () => {
  let rendered = render(<App />);

  it("base render", () => {
    const app = rendered.getByText("TODO App");
    expect(app).toBeInTheDocument();
  });
});
