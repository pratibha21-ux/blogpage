import './globals.css'

export const metadata = {
  title: 'Next Blog',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-white text-black max-w-3xl mx-auto py-20 px-4'>
      <body >{children}</body>
    </html>
  )
}