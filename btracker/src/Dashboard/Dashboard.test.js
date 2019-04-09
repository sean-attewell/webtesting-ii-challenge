import React from 'react';
import * as rtl from 'react-testing-library';
import Dashboard from './Dashboard.js';

afterEach(rtl.cleanup); // stops rendering twice

describe('Dashboard', () => {
    it('outputs "Dashboard"', () => {
        const wrap = rtl.render(<Dashboard />);
        expect(wrap.getByText(/dashboard/i));
    });

    it('outputs a ball button ', () => {
        const wrap = rtl.render(<Dashboard />);
        expect(wrap.getByText(/ball/i));
    });

    it('outputs a strike button', () => {
        const wrap = rtl.render(<Dashboard />);
        expect(wrap.getByText(/strike/i));
    });

    it('outputs a hit button', () => {
        const wrap = rtl.render(<Dashboard />);
        expect(wrap.getByText(/hit/i));
    });

    it('outputs a foul button', () => {
        const wrap = rtl.render(<Dashboard />);
        expect(wrap.getAllByTestId('foul'));
    });

});