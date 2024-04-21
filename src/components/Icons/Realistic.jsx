function Realistic({primary,secondary,primaryButton}) {
  return (
    <svg
      width="112"
      height="114"
      viewBox="0 0 112 114"
      fill="none"
    >
      <rect width="58" height="58" fill={secondary}></rect>
      <rect
        x="69"
        y="25"
        width="33"
        height="33"
        fill={primaryButton}
        fill-opacity="0.6"
      ></rect>
      <rect
        x="69"
        y="71"
        width="43"
        height="43"
        fill={primary}
        fill-opacity="0.2"
      ></rect>
      <rect x="20" y="70" width="38" height="39" fill={primary}></rect>
    </svg>
  );
}

export default Realistic;
