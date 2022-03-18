import { render } from '@testing-library/react';

import Types from './Types';

describe('Types', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Types />);
    expect(baseElement).toBeTruthy();
  });
});
