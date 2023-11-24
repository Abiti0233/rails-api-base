type Props = {
  value: string;
  css: string;
};

export default function Button({ value, css }: Props) {
  return <button className={css}>{value}</button>;
}


