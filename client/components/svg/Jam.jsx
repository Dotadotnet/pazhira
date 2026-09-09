function Jam({ className = "" }) {
    return ( 
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  className={className}
>
  {/* درِ مربا */}
  <path
    d="
      M24 28
      C24 22 35 18 50 18
      C65 18 76 22 76 28
      V34
      C76 40 65 44 50 44
      C35 44 24 40 24 34
      Z
    "
    fill="#7C4A35"
  />

  {/* لبه بالایی در */}
  <ellipse
    cx="50"
    cy="27"
    rx="26"
    ry="9"
    fill="#A66A4A"
  />

  {/* شیشه مربا */}
  <path
    d="
      M22 35
      C22 29 34 25 50 25
      C66 25 78 29 78 35
      V63
      C78 77 66 87 50 87
      C34 87 22 77 22 63
      Z
    "
    fill="#F7D9D4"
    stroke="#B96A60"
    strokeWidth="2"
  />

  {/* مربای قرمز */}
  <path
    d="
      M24 45
      C31 41 40 44 50 43
      C60 42 69 41 76 45
      V63
      C76 75 65 84 50 84
      C35 84 24 75 24 63
      Z
    "
    fill="#D92835"
  />

  {/* موج سطح مربا */}
  <path
    d="
      M24 45
      C32 41 41 46 50 44
      C59 42 68 41 76 45
      C69 49 61 50 50 49
      C39 50 31 49 24 45
      Z
    "
    fill="#EF4650"
  />

  {/* تکه‌های توت فرنگی */}
  <path
    d="
      M32 57
      C30 53 33 50 37 51
      C41 52 42 56 39 60
      C37 63 33 62 32 57
      Z
    "
    fill="#FF6970"
  />

  <path
    d="
      M48 67
      C46 63 49 60 53 61
      C57 62 58 66 55 70
      C53 73 49 72 48 67
      Z
    "
    fill="#FF6970"
  />

  <path
    d="
      M61 54
      C59 50 62 48 66 49
      C70 50 71 54 68 58
      C66 61 62 59 61 54
      Z
    "
    fill="#FF6970"
  />

  {/* دانه‌های توت‌فرنگی */}
  <circle cx="35" cy="55" r="1" fill="#FFE6A8" />
  <circle cx="38" cy="58" r="1" fill="#FFE6A8" />

  <circle cx="51" cy="65" r="1" fill="#FFE6A8" />
  <circle cx="54" cy="68" r="1" fill="#FFE6A8" />

  <circle cx="64" cy="52" r="1" fill="#FFE6A8" />
  <circle cx="67" cy="55" r="1" fill="#FFE6A8" />

  {/* برگ کوچک روی توت فرنگی */}
  <path
    d="
      M35 51
      C33 48 34 46 37 47
      C38 44 41 46 40 49
      C42 48 43 50 40 52
      Z
    "
    fill="#4D963F"
  />

  {/* برق شیشه */}
  <path
    d="M29 42 V62"
    stroke="white"
    strokeWidth="3"
    strokeLinecap="round"
    opacity="0.7"
  />

  <path
    d="M33 39 V48"
    stroke="white"
    strokeWidth="1.5"
    strokeLinecap="round"
    opacity="0.6"
  />

  {/* انعکاس پایین شیشه */}
  <path
    d="
      M35 77
      C41 81 49 83 57 81
    "
    fill="none"
    stroke="#FF8A8F"
    strokeWidth="2"
    strokeLinecap="round"
    opacity="0.7"
  />
</svg>
     );
}

export default Jam;