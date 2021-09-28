import { Helmet, HelmetProps } from "react-helmet";

interface SeoProps extends HelmetProps {
  children?: any;
}

export default function Seo({ children, ...rest }: SeoProps) {
  return <Helmet {...rest}>{children}</Helmet>;
}
