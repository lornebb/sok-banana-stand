import React, { Suspense } from "react";

type Track = {
  size: number;
  trackId: string;
};

const LazyiFrameLoader = React.lazy(() => import("./IFrame"));

const Track = ({ size, trackId }: Track) => {
  return (
    <article className='bg-yellow-50 flex flex-col justify-between '>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyiFrameLoader size={size} trackId={trackId} />
      </Suspense>
    </article>
  );
};

export default Track;
