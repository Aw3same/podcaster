import { render, screen } from "@testing-library/react";
import { PodcastList } from "./PodcastList";
import { MemoryRouter } from 'react-router-dom';


const renderWithRouter = () => {
  return render(
    <MemoryRouter initialEntries={[`/`]}>
        <PodcastList />
    </MemoryRouter>
  );
}

describe("PodcastList", () => {

  test("renders a list of podcast", async () => {
    renderWithRouter()
    
    const podcast = await screen.findAllByRole("listitem");
    expect(podcast).toHaveLength(3);
  });
});