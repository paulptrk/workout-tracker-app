import { ArrowLeft } from "lucide-react";

export default function Header({
  title,
  description,
  hasBackButton,
  onBackButtonClick,
}) {
  return (
    <div className="p-6">
      {hasBackButton && (
        <button
          onClick={onBackButtonClick}
          className="mb-4 p-2 hover:bg-muted rounded-lg transition-colors"
        >
          <ArrowLeft size={24} weight="bold" className="text-foreground" />
        </button>
      )}
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
