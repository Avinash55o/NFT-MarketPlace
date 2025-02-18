"use client"
import NavBar from "@/app/components/NavBar/NavBar"
import Footer from "../components/Footer/footer"
export default function Dashboard(){
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <nav className="sticky top-0 z-50">
            <NavBar/>
            </nav>
            <div>

            </div>
            
              {/* Footer */}
      <footer className="mt-auto">
        <Footer />
      </footer>
             
        </div>
    )
}