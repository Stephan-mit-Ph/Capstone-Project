import { render, screen } from '@testing-library/react'
import LinkWrapper from '.'

describe('LinkWrapper', () => {
  it('renders a link with the provided href and aria-label', () => {
    const href = 'https://example.com'
    const ariaLabel = 'Example website'
    const children = 'Link Text'
    render(
      <LinkWrapper href={href} ariaLabel={ariaLabel}>
        {children}
      </LinkWrapper>
    )

    const linkElement = screen.getByRole('link', { name: 'Example website' })
    expect(linkElement).toHaveAttribute('href', 'https://example.com')
    expect(linkElement.textContent).toBe('Link Text')
  })
})
