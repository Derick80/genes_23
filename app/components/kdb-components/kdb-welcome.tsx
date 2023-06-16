import PdfSearch from "./pdf-search";

export default function KdbWelcome() {
  return (
    <div className="flex w-full flex-col items-center gap-2 border-2 border-purple-500 p-2">
      <p className="text-2xl">Welcome to the KDB</p>
      <p className="text-2xl">Please select an option from the menu below</p>
      <PdfSearch />
    </div>
  );
}
