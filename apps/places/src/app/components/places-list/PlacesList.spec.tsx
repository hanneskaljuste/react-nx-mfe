import { render } from '@testing-library/react';

import PlacesList from './PlacesList';

describe('PlacesList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlacesList />);
    expect(baseElement).toBeTruthy();
  });
});
