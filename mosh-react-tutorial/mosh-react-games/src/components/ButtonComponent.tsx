interface Props {
  type: string;
  caption: string;
}

function ButtonComp({ type, caption }: Props) {
  return (
    <button type="button" className={type}>
      {caption}
    </button>
  );
}

export default ButtonComp;
