import "./globals.css";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    template: "%s | IT Hardware Requisition",
    default: "IT Hardware Requisition Portal",
  },
  description: "Internal portal for requesting department hardware and tracking provisioning.",
  openGraph: {
    title: "IT Hardware Requisition",
    description: "Request IT hardware for your department securely.",
    siteName: "IT Hardware Requisition",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <header className="bg-blue-900 text-white p-4">
          <nav className="mx-auto max-w-6xl flex gap-6 font-medium">
            <a href="/" className="hover:text-blue-200">Home</a>
            <a href="/catalog" className="hover:text-blue-200">Catalog</a>
            <a href="/requisitions" className="hover:text-blue-200">My Requests</a>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl p-6">
          {children}
        </main>
      </body>
    </html>
  );
}