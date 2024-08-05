import React from "react";

function Article(props) {
  return <h1>please pass this test</h1>;
}

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  // add this line
  screen.debug();

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
export default Article;