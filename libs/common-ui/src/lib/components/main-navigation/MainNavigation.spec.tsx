import { render } from '@testing-library/react';

import MainNavigation from './MainNavigation';

describe('MainNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainNavigation />);
    expect(baseElement).toBeTruthy();
  });
});
