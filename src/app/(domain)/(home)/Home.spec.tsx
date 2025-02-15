import { QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';

import Home from '@app_domain/(home)/page';
import { getQueryClient } from '@lib/tanstackQuery/client';

const queryClient = getQueryClient();
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('Home', () => {
  it('should render', () => {
    render(<Home />, { wrapper });
    expect(screen.getByText('Posts')).toBeInTheDocument();
  });
});
