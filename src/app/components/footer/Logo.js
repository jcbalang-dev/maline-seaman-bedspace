import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/images/website/logo/logo.png"
        alt="Logo"
        placeholder="blurred"
        className="img-fluid"
      />
    </Link>
  );
};

export default Logo;
