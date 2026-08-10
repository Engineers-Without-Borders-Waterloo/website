import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Grid } from '@/components/layout/Grid';

describe('Grid', () => {
  it('renders children correctly', () => {
    render(
      <Grid>
        <div>Item 1</div>
        <div>Item 2</div>
      </Grid>
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('applies default responsive column classes (1/2/3)', () => {
    const { container } = render(
      <Grid>
        <div>Item</div>
      </Grid>
    );
    const grid = container.firstElementChild;
    expect(grid).toHaveClass('grid');
    expect(grid).toHaveClass('grid-cols-1');
    expect(grid).toHaveClass('md:grid-cols-2');
    expect(grid).toHaveClass('lg:grid-cols-3');
  });

  it('applies custom column counts', () => {
    const { container } = render(
      <Grid cols={{ mobile: 2, tablet: 3, desktop: 4 }}>
        <div>Item</div>
      </Grid>
    );
    const grid = container.firstElementChild;
    expect(grid).toHaveClass('grid-cols-2');
    expect(grid).toHaveClass('md:grid-cols-3');
    expect(grid).toHaveClass('lg:grid-cols-4');
  });

  it('applies default gap (md)', () => {
    const { container } = render(
      <Grid>
        <div>Item</div>
      </Grid>
    );
    const grid = container.firstElementChild;
    expect(grid).toHaveClass('gap-6');
  });

  it('applies sm gap', () => {
    const { container } = render(
      <Grid gap="sm">
        <div>Item</div>
      </Grid>
    );
    const grid = container.firstElementChild;
    expect(grid).toHaveClass('gap-4');
  });

  it('applies lg gap', () => {
    const { container } = render(
      <Grid gap="lg">
        <div>Item</div>
      </Grid>
    );
    const grid = container.firstElementChild;
    expect(grid).toHaveClass('gap-8');
  });

  it('applies additional className', () => {
    const { container } = render(
      <Grid className="custom-grid">
        <div>Item</div>
      </Grid>
    );
    const grid = container.firstElementChild;
    expect(grid).toHaveClass('custom-grid');
  });

  it('falls back to defaults for unsupported column counts', () => {
    const { container } = render(
      <Grid cols={{ mobile: 5, tablet: 6, desktop: 7 }}>
        <div>Item</div>
      </Grid>
    );
    const grid = container.firstElementChild;
    // 5/6/7 aren't in the class maps, so it falls back to 1/2/3.
    expect(grid).toHaveClass('grid-cols-1');
    expect(grid).toHaveClass('md:grid-cols-2');
    expect(grid).toHaveClass('lg:grid-cols-3');
  });
});
