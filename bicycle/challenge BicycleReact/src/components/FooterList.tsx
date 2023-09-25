export interface FooterType {
  text: string;
}

export default function FooterList({ text }: FooterType) {
  return (
    <a href="" className="text-black">
      <li>{text}</li>
    </a>
  );
}
