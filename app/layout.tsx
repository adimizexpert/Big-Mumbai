import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Big Mumbai Game - Play, Compete & Win Cash Rewards',
  description: 'Join Big Mumbai Game for a unique gaming experience with lottery, casino, fishing, aviator, and card games. Play anytime, anywhere and win real cash rewards!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
