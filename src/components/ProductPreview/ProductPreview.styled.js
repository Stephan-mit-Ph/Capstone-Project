import styled from 'styled-components';
import Image from 'next/image';

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const Thumbnail = styled.div`
  width: 5rem;
  height: 5rem;
  cursor: pointer;
`

export const PreviewImage = styled(Image)`
  max-width: 18.75rem;
  max-height: 18.75rem;
`

export const ThumbnailWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    `;