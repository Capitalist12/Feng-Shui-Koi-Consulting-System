import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function AdvertiseImage({imageList}) {
  return (
    <Box sx={{ width: 500, height: 200, backgroundColor: '#ededed', overflowY: 'auto' }}>
      <ImageList variant="masonry" cols={2} gap={8}>
        {imageList.map((item) => (
          <ImageListItem key={item.adImageId}>
            <img
              srcSet={`${item.imageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.imageURL}?w=248&fit=crop&auto=format`}
              alt={item.adImageId}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
