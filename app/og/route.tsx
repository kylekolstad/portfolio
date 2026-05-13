import { ImageResponse } from 'next/og'

export function GET() {
  return new ImageResponse(
    (
      <div tw="flex h-full w-full flex-col items-center justify-center bg-white text-black">
        <div tw="flex flex-col items-center">
          <p tw="text-2xl text-indigo-600 mb-4">Kyle Kolstad</p>
          <h1 tw="text-6xl font-bold">Software Engineer</h1>
          <p tw="text-2xl text-neutral-600 mt-4">Backend Systems · APIs · Cloud · Applied AI</p>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
