function Simple({primaryButton,primary}) {
  return (
    <svg
      width="179"
      height="89"
      viewBox="0 0 179 89"
      fill="none"
    >
      <rect
        y="26"
        width="154"
        height="63"
        fill={primaryButton}
        fill-opacity="0.6"
      ></rect>
      <path d="M142 15.5V0" stroke={primary} stroke-width="8"></path>
      <path
        d="M163 34L178.5 34"
        stroke={primary}
        stroke-width="8"
      ></path>
      <path
        d="M158 19.5L170.5 7"
        stroke={primary}
        stroke-width="8"
      ></path>
      <path
        d="M63 54L74.5 65L95.5 44"
        stroke={primary}
        stroke-width="8"
      ></path>
    </svg>
  );
}

export default Simple;
