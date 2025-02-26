interface Props<T> {
  value: T;
  options: { [key: string]: T };
  onChange: (value: T) => void;
}

const Nav = <T extends string>({ value, options, onChange }: Props<T>) => {
  return (
    <nav className="flex justify-center gap-8 sm:gap-4 sm:overflow-x-auto w-full mb-4">
      {Object.entries(options).map(([key, val]) => (
        <button
          key={key}
          className={`sm:text-sm ${val === value ? 'font-bold border-b-brandRed border-b-4' : ''}`}
          onClick={() => onChange(val)}
        >
          {val}
        </button>
      ))}
    </nav>
  );
};

export default Nav;
