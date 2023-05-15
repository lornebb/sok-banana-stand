import React, { Suspense } from "react";

type Album = {
  size: number;
  albumId: string;
};

const LazyiFrameAlbumLoader = React.lazy(() => import("./IFrameAlbum"));

const Album = ({ size, albumId }: Album) => {
  return (
    <article className='bg-yellow-50 flex flex-col justify-between '>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyiFrameAlbumLoader size={size} albumId={albumId} />
      </Suspense>
    </article>
  );
};

export default Album;
