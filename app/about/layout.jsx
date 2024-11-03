import Footer from "@/components/Footer";

export const metadata = {
	title: "Divyanshu | About",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
