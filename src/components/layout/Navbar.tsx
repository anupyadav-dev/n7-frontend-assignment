import Button from "../ui/Button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="text-2xl font-bold text-white">N7</div>

      <div className="hidden gap-8 text-white md:flex">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </div>

      <Button text="Get Started" />
    </nav>
  );
}
