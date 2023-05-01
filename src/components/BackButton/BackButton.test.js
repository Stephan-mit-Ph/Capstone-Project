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

test('calls router.back() when clicked', () => {
  const { getByText } = render(<BackButton text="Home" ariaLabel="Go back to Homepage" />)
  fireEvent.click(getByText('Home'))
  expect(window.location.pathname).toBe('/')
})

test('renders a button with an aria-label', () => {
  const { getByLabelText } = render(<BackButton text="Home" ariaLabel="Go back to Homepage" />)
  expect(getByLabelText('Go back to Homepage')).toBeInTheDocument()
})

test('renders a button with an icon', () => {
  const { getByTestId } = render(<BackButton text="Home" ariaLabel="Go back to Homepage" icon />)
  expect(getByTestId('chevron-left')).toBeInTheDocument()
})
