import StyledComponentsRegistry from '@/shared/lib/antd/antd-registry'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ConfigProvider } from 'antd'
import theme from '@/shared/theme/theme-config'
import { Header } from '@/widgets/header'

const font = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <StyledComponentsRegistry >
          <ConfigProvider theme={theme}>
            <Header />
            <main>{children}</main>
            <footer>футер</footer>
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
