interface ColouredTextTypes {
  text: string;
  colour: string;
}

const ColouredText = ({ text, colour }: ColouredTextTypes) => {
  return (
    <span style={{ color: colour }}>{text}</span>
  )
}

export default ColouredText;
