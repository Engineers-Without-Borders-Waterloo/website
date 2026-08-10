import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
    coverage: {
      provider: 'v8',
      // `include` reports on all authored source, not just files touched by a
      // test (Vitest 4 includes every matching file by default).
      include: ['app/**/*.tsx', 'components/**/*.tsx', 'lib/utils.ts'],
      exclude: [
        // Framework shell: renders <html>/<body> and pulls in next/font.
        'app/layout.tsx',
        // Vendored shadcn/ui primitives (generated, not authored here).
        'components/ui/badge.tsx',
        'components/ui/button.tsx',
        'components/ui/card.tsx',
        'components/ui/navigation-menu.tsx',
        'components/ui/separator.tsx',
        'components/ui/sheet.tsx',
      ],
      thresholds: {
        statements: 85,
        branches: 85,
        functions: 85,
        lines: 85,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
