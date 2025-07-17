function FichaOption({
  title,
  description,
  selected,
  onClick,
}: {
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer border rounded-lg p-6 text-center transition hover:shadow-md ${
        selected ? "border-green-500 bg-green-50" : "border-gray-300"
      }`}
    >
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

export default FichaOption