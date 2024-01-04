import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

import { Counter } from './Counter';

describe('Sidebar', () => {
  test('test increment', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });

    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('test increment', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });

    const incrementBtn = screen.getByTestId('increment-btn');
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('test decrement', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });

    const incrementBtn = screen.getByTestId('decrement-btn');
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
