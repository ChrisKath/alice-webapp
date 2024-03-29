import type { ReactNode } from 'react'

import { AddonProvider, ReduxProvider, LayoutContainer } from '@/components'
import '@/styles/fonts.scss'
import '@/styles/main.scss'

type Props = { children: ReactNode }

export { metadata, viewport } from '@/constants/metadata'

export default function RootLayout({ children }: Props) {
  // __RENDER
  return (
    <html lang='en-US' className='m-0 bg-black text-white' style={{ colorScheme: 'dark' }}>
      <body
        className='m-0 overflow-x-hidden bg-black font-primary text-sm text-white antialiased'
        style={{ backgroundColor: '#000', textRendering: 'optimizeLegibility' }}
      >
        <ReduxProvider>
          <AddonProvider.Bootstrap />

          <LayoutContainer node={children} />

          <AddonProvider.Loader />
          <AddonProvider.Modal />
        </ReduxProvider>
      </body>
    </html>
  )
}
