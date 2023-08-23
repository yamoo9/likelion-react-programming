import { useDispatch, useTheme, switchMode } from '@/contexts/Theme';

export default function GrandChild({ color, onChangeColor }) {
  const theme = useTheme();
  const dispatch = useDispatch();

  const currentTheme = theme[theme.currentMode];

  const handleSwitchThemeMode = () => {
    dispatch(switchMode());
  };

  return (
    <div
      className="GrandChild p-4 rounded-md flex flex-col justify-center items-center "
      style={{
        backgroundColor: `color-mix(in srgb, ${color.bg} 100%, white 80%)`,
      }}
    >
      <p
        className={`${color.fg} mb-2 font-extrabold p-4 text-center drop-shadow-md`}
        style={{
          backgroundColor: currentTheme.bg,
          color: currentTheme.fg,
        }}
      >
        컨텍스트 공급자(Context Provider)를 사용해
        <br />
        데이터를 공급(provide)해주세요!
      </p>
      <button
        type="button"
        onClick={handleSwitchThemeMode}
        className="my-2 p-2 -x-4 border border-white"
      >
        <span className="uppercase">
          {theme.currentMode.includes('light') ? 'dark' : 'light'}
        </span>{' '}
        테마 스위치
      </button>
      <input
        type="color"
        aria-label="배경 색상"
        defaultValue={color.bg}
        onChange={(e) => {
          onChangeColor(e.target.value);
        }}
      />
    </div>
  );
}
