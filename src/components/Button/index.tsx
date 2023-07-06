interface IProps {
  label: string;
  onClick?: () => void;
}

const Button = ({ label, onClick }: IProps) => {
  return (
    <button
      type="button"
      data-te-ripple-init
      data-te-ripple-color="light"
      className="inline-block hover:opacity-80 rounded bg-yellow-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white w-full"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
