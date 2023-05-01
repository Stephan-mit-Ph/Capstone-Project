import { render, fireEvent } from '@testing-library/react'
import BackButton from '.'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      back: jest.fn(),
    }
  },
}))

test('renders a button with text', () => {
  const { getByText } = render(<BackButton text="Home" ariaLabel="Go back to Homepage" />)
  expect(getByText('Home')).toBeInTheDocument()
})
