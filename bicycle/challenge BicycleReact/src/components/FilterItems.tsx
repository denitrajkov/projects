type Props = {
  text: string;
  numberOfBikes: number;
  active: boolean;
  onClick: () => void;
};

export default function FilterItems({
  text,
  numberOfBikes,
  onClick,
  active,
}: Props) {
  return (
    <li
      className={`d-flex justify-content-between  align-items-center ${
        active ? "active" : ""
      }`}
      onClick={onClick}
    >
      {text}{" "}
      <span
        className={`badge badge-pill badge-secondary ${
          active ? "bg-active" : ""
        }`}
      >
        {numberOfBikes}
      </span>
    </li>
  );
}
