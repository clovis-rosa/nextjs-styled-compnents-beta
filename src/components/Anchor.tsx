import Link from "next/link";
import styled from "styled-components";

interface ArchorProps {
  href: string;
  children: React.ReactNode;
}

export function Anchor({ href = "", ...props }: ArchorProps) {
  if (href.startsWith("http")) {
    return (
      <AnchorExternal href={href} target="_blank" rel="noopener" {...props} />
    );
  }

  return <AnchorInternal href={href} passHref {...props} />;
}

export const AnchorInternal = styled(Link)`
  font-size: var(--10);
  font-weight: var(--regular);
  line-height: var(--line-height-3);
  letter-spacing: normal;
  margin-top: var(--10);
  margin-bottom: var(--10);
  transition: var(--transition-all);
  text-underline-offset: 0.2ex;
  color: var(--clr-text);
  text-decoration-style: dotted;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    color: var(--anchor);
    text-decoration-style: dashed;
  }
`;

export const AnchorExternal = styled(Link)`
  font-size: var(--10);
  font-weight: var(--regular);
  line-height: var(--line-height-3);
  letter-spacing: normal;
  margin-top: var(--10);
  margin-bottom: var(--10);
  transition: var(--transition-all);
  text-underline-offset: 0.2ex;

  color: var(--brand);
  text-decoration-style: dotted;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    color: var(--brand);
    text-decoration: underline;
  }
`;
