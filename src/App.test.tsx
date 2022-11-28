import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('Test in <App />', () => {
    it('The app should match to snapshot', () => {
        render(<App />);
        expect(screen).toMatchSnapshot();
        expect(3).toBeGreaterThan(4);
    });
});
