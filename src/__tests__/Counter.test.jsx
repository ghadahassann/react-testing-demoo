import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../Counter';

test('increments when clicking', async()=>{
    const user = userEvent.setup();                           // user simulator
    render(<Counter/>);                                       // Arrange: render component
    const value = screen.getByLabelText('value');             // find text
    const btn = screen.getByRole('button',{name:/increment/i}); // find button
    await user.click(btn);                                    // Act
    expect(value).toHaveTextContent('Count: 1');              // Assert
});
