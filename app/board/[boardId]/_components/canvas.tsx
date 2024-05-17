"use client";
import Info from './info'
import Participants from './participants';

const Canvas = () => {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
        <Info />
        <Participants />
    </main>
  )
}

export default Canvas
