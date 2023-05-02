import { render, screen } from '@testing-library/react';
import SubTitle from '.';

describe('SubTitle', () => {
    it('renders the SubTitle component', () => {
        render(<SubTitle text="test" />);
        expect(screen.getByText('test')).toBeInTheDocument();
    });
}); 
