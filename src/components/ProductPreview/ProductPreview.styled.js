import styled from 'styled-components'
import Image from 'next/image'

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const Thumbnail = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  margin: 0;
  cursor: pointer;
`

export const PreviewImage = styled(Image)`
  max-width: 18.75rem;
  max-height: 18.75rem;
  margin: 0;
`

export const ThumbnailWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;

`

export const StyledImage = styled(Image)`
margin: 0 ;
padding: 0;


`;
