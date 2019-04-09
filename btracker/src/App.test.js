import React from 'react';
import * as rtl from 'react-testing-library';

import App from './App.js';

afterEach(rtl.cleanup);

describe('<App />', () => {

    // BALLS TESTING
    it('increases ball by 1 when ball is 0', () => {
        const wrapper = rtl.render(<App />);
        expect(wrapper.getByText(/balls: 0/i));
        rtl.fireEvent.click(wrapper.getByText(/BALL/));
        expect(wrapper.getByText(/balls: 1/i));
    });
    it('balls are reset to 0 after 4th ball', () => {
        const wrapper = rtl.render(<App />);
        expect(wrapper.getByText(/balls: 0/i));
        rtl.fireEvent.click(wrapper.getByText(/BALL/));
        rtl.fireEvent.click(wrapper.getByText(/BALL/));
        rtl.fireEvent.click(wrapper.getByText(/BALL/));
        expect(wrapper.getByText(/balls: 3/i));
        rtl.fireEvent.click(wrapper.getByText(/BALL/));
        expect(wrapper.getByText(/balls: 0/i));
    });
    it('strikes are reset to 0 after 4th ball', () => {
        const wrapper = rtl.render(<App />);
        expect(wrapper.getByText(/strikes: 0/i));
        rtl.fireEvent.click(wrapper.getByText(/STRIKE/));
        expect(wrapper.getByText(/strikes: 1/i));
        rtl.fireEvent.click(wrapper.getByText(/BALL/));
        rtl.fireEvent.click(wrapper.getByText(/BALL/));
        rtl.fireEvent.click(wrapper.getByText(/BALL/));
        rtl.fireEvent.click(wrapper.getByText(/BALL/));
        expect(wrapper.getByText(/strikes: 0/i));
    });

    // STRIKES TESTING
    it('increases strike by 1 when strikes is 0', () => {
        const wrapper = rtl.render(<App />);
        expect(wrapper.getByText(/strikes: 0/i));
        rtl.fireEvent.click(wrapper.getByText(/STRIKE/));
        expect(wrapper.getByText(/strikes: 1/i));
    });
    it('strikes are reset to 0 after 3rd strike', () => {
        const wrapper = rtl.render(<App />);
        expect(wrapper.getByText(/strikes: 0/i));
        rtl.fireEvent.click(wrapper.getByText(/STRIKE/));
        rtl.fireEvent.click(wrapper.getByText(/STRIKE/));
        expect(wrapper.getByText(/strikes: 2/i));
        rtl.fireEvent.click(wrapper.getByText(/STRIKE/));
        expect(wrapper.getByText(/strikes: 0/i));
    });
    it('balls are reset to 0 after 3rd strike', () => {
        const wrapper = rtl.render(<App />);
        expect(wrapper.getByText(/balls: 0/i));
        rtl.fireEvent.click(wrapper.getByText(/BALL/));
        expect(wrapper.getByText(/balls: 1/i));
        rtl.fireEvent.click(wrapper.getByText(/BALL/));
        rtl.fireEvent.click(wrapper.getByText(/BALL/));
        rtl.fireEvent.click(wrapper.getByText(/BALL/));
        expect(wrapper.getByText(/balls: 0/i));
    });


    // HIT TESTING
    it('strikes and are reset to 0 after hit', () => {
        const wrapper = rtl.render(<App />);
        expect(wrapper.getByText(/strikes: 0/i));
        rtl.fireEvent.click(wrapper.getByText(/STRIKE/));
        expect(wrapper.getByText(/strikes: 1/i));
        rtl.fireEvent.click(wrapper.getByText(/HIT/));
        expect(wrapper.getByText(/strikes: 0/i));
    });
    it('balls and are reset to 0 after hit', () => {
        const wrapper = rtl.render(<App />);
        expect(wrapper.getByText(/balls: 0/i));
        rtl.fireEvent.click(wrapper.getByText(/BALL/));
        expect(wrapper.getByText(/balls: 1/i));
        rtl.fireEvent.click(wrapper.getByText(/HIT/));
        expect(wrapper.getByText(/balls: 0/i));
    });

    // FOUL TESTING
    it('strike increases by 1 when strikes are less than 2 and a foul', () => {
        const wrapper = rtl.render(<App />);
        expect(wrapper.getByText(/strikes: 0/i));
        rtl.fireEvent.click(wrapper.getByText(/FOUL/));
        expect(wrapper.getByText(/strikes: 1/i));
    });
    it('strike stays at 2 after a foul', () => {
        const wrapper = rtl.render(<App />);
        expect(wrapper.getByText(/strikes: 0/i));
        rtl.fireEvent.click(wrapper.getByText(/STRIKE/));
        rtl.fireEvent.click(wrapper.getByText(/STRIKE/));
        expect(wrapper.getByText(/strikes: 2/i));
        rtl.fireEvent.click(wrapper.getByText(/FOUL/));
        expect(wrapper.getByText(/strikes: 2/i));
    });
})
