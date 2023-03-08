import IFrame from "./IFrame";

type Track = {
  size: number;
  trackId: string;
};

const Track = ({ size, trackId }: Track) => {
  return (
    <article className='bg-yellow-50 flex flex-col justify-between '>
      <IFrame size={size} trackId={trackId} />
      <div className='flex justify-between align-bottom '>
        <div></div>
        <div></div>
      </div>
    </article>
  );
};
export default Track;
