import React from 'react';
import * as rtl from 'react-testing-library';
import Display from './Display.js';

afterEach(rtl.cleanup); // stops rendering twice

const counts = {
    balls: 5,
    strikes: 1
}

describe('Display', () => {
    it('outputs "balls"', () => {
        const wrap = rtl.render(<Display />);
        expect(wrap.getByText(/balls/i));
    });
    
    it('outputs "strikes"', () => {
        const wrap = rtl.render(<Display />);
        expect(wrap.getByText(/strikes/i));
    });

    it('outputs only numbers 0-3 for balls', () => {
        const wrap = rtl.render(<Display balls={counts.balls} strikes={counts.strikes} />);
        // console.log(wrap.debug())
        expect(wrap.queryByText(/balls: [0|1|2|3]/i)).toBeFalsy();
        // expect(wrap.queryByText(/[0-3]/i)).toBeTruthy();
    });

});