"use client"
import Header from "@app/features/dashboard/components/Header";
import Sidenav from "@app/features/dashboard/components/Sidenav";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-full h-screen overflow-hidden`}>
          <div className="h-[5rem] relative z-[99] lg:z-0 w-full overflow-hidden">
              <Header/>
          </div>

          <div className="w-full h-[calc(100vh-9rem)] lg:h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
              <div className="w-[300px] h-full hidden lg:flex overflow-hidden">
                  <Sidenav/>
              </div>

              <div className="w-full h-full">
                  {children}
              </div>
          </div>

          {/* <div className="lg:hidden relative z-[99] h-[4rem] border-t border-gray-300 overflow-hidden bg-white">
            <BottomNav/>
          </div> */}
      </body>
    </html>
  );
}
