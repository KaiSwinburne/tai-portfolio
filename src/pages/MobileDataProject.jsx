import { Navbar } from "@/layout/navbar";
import { Footer } from "@/layout/footer";

export const MobileDataProject = () => {
    return(
        <div className="min-h-svh overflow-x-hidden">
            <Navbar />
            <main className="pt-24 md:pt-26">
                <section className="relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}