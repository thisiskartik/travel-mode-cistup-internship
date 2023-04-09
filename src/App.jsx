import { Outlet } from "react-router-dom";
import Header from "./components/general/Header";
import Footer from "./components/general/Footer";

export default function App() {
	return (
		<>
			<main className="p-12 flex flex-col gap-8">
				<Header />
				<Outlet />
				<Footer />
			</main>
		</>
	);
}
