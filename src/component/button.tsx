interface BtnName {
  BtnName: string;
}

const Button = (userData: BtnName) => {
  const { BtnName } = userData;

  return (
    <a
      href="#"
      className="px-4 py-1 border-2 border-[#323639] rounded-3xl hover:border-gray font-bold capitalize"
    >
      {BtnName}
    </a>
  );
};

export default Button;
