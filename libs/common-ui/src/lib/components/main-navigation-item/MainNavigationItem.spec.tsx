import { render } from '@testing-library/react';

import MainNavigationItem from './MainNavigationItem';

describe('MainNavigationItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainNavigationItem />);
    expect(baseElement).toBeTruthy();
  });
});
