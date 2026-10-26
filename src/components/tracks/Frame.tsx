import { ReactNode } from "react";

// Square box that centres a shorter streaming player on a matching background,
// so Spotify / Apple Music sit in the same 300x300 slot as Bandcamp.
const Frame = ({
  size,
  background,
  children,
}: {
  size: number;
  background: string;
  children: ReactNode;
}) => (
  <div
    className='flex items-center justify-center overflow-hidden'
    style={{ width: `${size}px`, height: `${size}px`, background }}
  >
    {children}
  </div>
);

export default Frame;
