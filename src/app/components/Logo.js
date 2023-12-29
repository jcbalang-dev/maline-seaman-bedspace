import Link from "next/link";
import Image from "next/image";

const Logo = ({
  src = "/images/website/logo/logo.png",
  alt = "Logo",
  placeholder = "blurred",
  className = "img-fluid",
}) => {
  return (
    <Link href="/">
      <Image
        src={src}
        alt={alt}
        placeholder={placeholder}
        className={className}
      />
    </Link>
  );
};

export default Logo;
