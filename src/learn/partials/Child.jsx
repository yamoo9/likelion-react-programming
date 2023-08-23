import GrandChild from "./GrandChild";

export default function Child({ color, onChangeColor }) {
  return (
    <div
      className="Child p-4 rounded-md"
      style={{
        backgroundColor: `color-mix(in srgb, ${color.bg} 100%, white 60%)`,
      }}
    >
      <GrandChild color={color} onChangeColor={onChangeColor} />
    </div>
  );
}

