import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";

import Dashboard from './Dashboard';


describe('<Dashboard />', () => {

    // Unit Testing //
        
        // test if the strike button adds 1 to count and resets to 0 at 3 when clicked
        // test if the ball button adds 1 to count and resets to 0 at 4 when clicked
        // test if the foul button adds 1 to count and stops at 2 when clicked
        // test if the hit button resets balls & strikes to 0 when clicked

    describe('strike()', () => {

        it('adds one to strike count', () => {
        //   const expected = 3;
        //   const actual = help.sum(1, 2);
        //   expect(actual).toBe(expected); 
            // .toBe() looks for strict equality!
        });

        it('resets strike count to zero at three', () => {
        
        });
    
    }); 

    describe('ball()', () => {

        it('adds one to ball count', () => {
        
        });

        it('resets ball count to zero at four', () => {
        
        });
    
    }); 

    describe('foul()', () => {

        it('adds one to strike count', () => {
        
        });

        it('returns two when strike count is at two', () => {
        
        });
    
    });

    describe('hit()', () => {

        it('resets strike count to zero', () => {
        
        });

        it('resets ball count to zero', () => {
        
        });
    
    });

    // Testing Library Tests //

      // test if each button (ball, strike, foul, hit) are rendering to the screen
    it('renders without crashing', () => {
        render(<Dashboard />);
    });

    it('should render ball button', () => {
        const ballButt = render(<Dashboard />);
        ballButt.getByText(/ball/i);
    });

    it('should render strike button', () => {
        const strikeButt = render(<Dashboard />);
        strikeButt.getByText(/strike/i);
    });

    it('should render foul button', () => {
        const foulButt = render(<Dashboard />);
        foulButt.getByText(/foul/i);
    });

    it('should render hit button', () => {
        const hitButt = render(<Dashboard />);
        hitButt.getByText(/hit/i);
    });

});