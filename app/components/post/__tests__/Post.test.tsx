import { render } from "@testing-library/react";

import { post } from "@/app/mocks/post.mock";

import { Post } from "../Post";

describe("Post", () => {
  it("works", () => {
    render(<Post data={post} />);
  });
});
