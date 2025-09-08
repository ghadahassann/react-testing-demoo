import { render, screen } from '@testing-library/react'; // render() puts component into jsdom; screen = global queries
import Badge from '../Badge';                             // The component under test

test('matches snapshot (small & stable)', () => {
  const { container } = render(<Badge>New</Badge>);      // Arrange: render a tiny, stable UI
  // Why container? it’s the root DOM node of this render; firstChild is our <span> badge.

  expect(container.firstChild)                           // We assert on the exact DOM node rendered
    .toMatchSnapshot();                                  // Then: Jest stores/compares a serialized DOM snapshot
  // Why snapshot? To catch unintended DOM changes later with a readable diff.
});

test('can be found by role + name (DOM query best practice)', () => {
  render(<Badge>New</Badge>);                            // Arrange: render again for a DOM-query demo

  // Prefer semantic queries → mirrors real users and screen readers; produces stable tests.
  const badge = screen.getByRole('status'); // getByRole now; fails if not found
  expect(badge).toBeInTheDocument();                     // jest-dom matcher reads like English
  expect(badge).toHaveTextContent('New');                // Check visible text rather than internal details
});
