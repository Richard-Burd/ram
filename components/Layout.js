import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <div className="bg-zinc-700 bg-opacity-95">
        <div className="sm:max-w-screen-lg lg:px-0 lg:max-w-screen-lg mx-auto relative">
          <div className="bg-slate-100">
            <Navbar />
            <div>{children}</div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
