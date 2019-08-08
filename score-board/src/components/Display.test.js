import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/react/cleanup-after-each";

import Display from './Display';


describe('<Display />', () => {

    // Unit Testing //
        // Test if 0-2 is rendering for strikes if each button is clicked
        // Test if 0-3 is rendering for balls if each button is clicked
        

    describe('strikeDisplay()', () => {

        it('displays numbers zero to two', () => {
            expect(strikeDisplay()).toBe(0, 1, 2);
        });

      }); 
    
    describe('ballDisplay()', () => {

        it('displays numbers zero to three', () => {
            expect(ballDisplay()).toBe(0, 1, 2, 3)
        });

    }); 

    // Testing Library tests //

      // Test if balls and strikes are rendering to the DOM

    it('renders without crashing', () => {
        render(<Display />);
    });

    it('should render strike display', () => {
        const strikeDisp = render(<Display />);
        strikeDisp.getByText(/strikes/i);
    });

    it('should render ball display', () => {
        const ballDisp = render(<Display />);
        ballDisp.getByText(/balls/i);
    });

});
