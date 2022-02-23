import React from 'react';
import { render } from '@/testUtils';
import Home from '..';

describe('Home Page Render Cases', () => {
  it('Should render home page with ONLY ONE link to orders page', () => {
    const { queryByText } = render(<Home />);
    expect(queryByText(/Click to go to orders page/i)).toBeInTheDocument();
  });
});
