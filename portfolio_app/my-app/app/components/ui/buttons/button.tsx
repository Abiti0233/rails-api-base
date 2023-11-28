'use client'

type Props = {
  value: string;
  css: string;
  onClick?: () => void;
};

export default function Button({ value, css, onClick }: Props) {
  return <button className={css} onClick={onClick}>{value}</button>;
}


