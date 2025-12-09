import "./PhraseCard.css";

interface Props {
  text: string;
}

export default function PhraseCard({ text }: Props) {
  return (
    <div className="phrase-card">
      <p>{text}</p>
    </div>
  );
}
