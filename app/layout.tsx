import { Sidebar } from "@/components/side-bar"
import "./globals.css"

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard built with Next.js and Tailwind CSS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen bg-gray-50">
          <Sidebar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}

