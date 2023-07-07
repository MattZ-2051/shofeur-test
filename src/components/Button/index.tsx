interface IProps {
  label: string;
  onClick?: () => void;
}

const Button = ({ label, onClick }: IProps) => {
  return (
    <button
      type="button"
      className="inline-block hover:opacity-80 rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white w-full"
      style={{ backgroundColor: 'black' }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
