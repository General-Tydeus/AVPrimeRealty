export default function Container({ children }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 p-8 justify-items-center bg-tertiary">
      {children}
    </div>
  );
}
