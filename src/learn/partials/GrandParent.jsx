import Parent from "./Parent";

export default function GrandParent({ color, onChangeColor }) {
  return (
    <div
      className="GrandParent p-4 rounded-md"
      style={{
        backgroundColor: `color-mix(in srgb, ${color.bg} 100%, white 20%)`,
      }}
    >
      <Parent color={color} onChangeColor={onChangeColor} />
    </div>
  );
}

