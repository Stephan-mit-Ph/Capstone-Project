import styled from 'styled-components'
import Image from 'next/image'

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-wrap: wrap;
  padding-bottom: 2rem;
  gap: 1rem;
`

export const Thumbnail = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  margin: 0;
  cursor: pointer;
`

export const ThumbnailWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
`

export const StyledImage = styled(Image)`
  max-width: 100%;
  height: auto;
`
