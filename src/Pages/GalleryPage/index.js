import React from 'react';
import { TopBanner } from './TopBanner';
import { Grid } from '@material-ui/core';
import { PhotoItems } from './PhotoItems';
import { TextWithLine } from './TextWithLine';
import { VideoItems } from './VideoItem';
export const GalleryPage = () => {
    const item = {
        headingFirstLine: " Our Photo/Video Gallery",
        description:
          "HOME / GALLERY",
        image: "Imagesforwebsite-05.jpg",
      };
      const photoList = [
        { image: "" },
        { image: "" },
        { image: "" },
        { image: "" },
        { image: "" },
        { image: "" },
      ];
    return (
        <Grid xs="12" item>
            <TopBanner item={item}></TopBanner>
            <PhotoItems photos={photoList}></PhotoItems>
            <VideoItems photos={photoList}/>
        </Grid>
    )
}