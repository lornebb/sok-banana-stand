import IFrame from './IFrame'


const Track = ({size, trackId}) => {
  return (
    <article className='bg-yellow-50 p-4 flex flex-col justify-between gap-12'>
      <IFrame size={size} trackId={trackId} />
      <div className='flex justify-between align-bottom'>
        <div>some content</div>
        <div>more content?</div>
        </div>
    </article>
  )
}
export default Track