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
  width: 80px;
  height: 80px;
  cursor: pointer;
`

export const PreviewImage = styled(Image)`
  max-width: 300px;
  max-height: 300px;
`

export const ThumbnailWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    `;