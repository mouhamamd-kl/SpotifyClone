import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Figtree } from 'next/font/google'

const figTree = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify',
  description: 'this is the first spotify project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={figTree.className}>
        <Sidebar>
          {children}
        </Sidebar>
        </body>
    </html>
  )
}
