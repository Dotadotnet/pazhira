function Pickles({ className = "" }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
        >
            {/* درِ شیشه */}
            <rect
                x="27"
                y="10"
                width="46"
                height="13"
                rx="6"
                fill="#6B7280"
            />

            <rect
                x="30"
                y="8"
                width="40"
                height="6"
                rx="3"
                fill="#9CA3AF"
            />

            {/* بدنه شیشه با گوشه‌های گرد */}
            <path
                d="
      M33 22
      H67
      C72 22 76 26 76 31
      V73
      C76 84 68 92 58 92
      H42
      C32 92 24 84 24 73
      V31
      C24 26 28 22 33 22
      Z
    "
                fill="#DDF7F2"
                stroke="#70AFA4"
                strokeWidth="2"
            />

            {/* آب ترشی */}
            <path
                d="
      M26 48
      C34 45 42 51 50 48
      C59 45 67 51 74 48
      V73
      C74 82 67 89 58 89
      H42
      C33 89 26 82 26 73
      Z
    "
                fill="#D9C76C"
            />

            {/* خیار اول */}
            <rect
                x="31"
                y="53"
                width="9"
                height="25"
                rx="4.5"
                transform="rotate(-18 31 53)"
                fill="#4F9D45"
            />

            <circle cx="34" cy="59" r="1.4" fill="#A7D65C" />
            <circle cx="37" cy="67" r="1.3" fill="#A7D65C" />
            <circle cx="34" cy="73" r="1.2" fill="#A7D65C" />

            {/* خیار دوم */}
            <rect
                x="63"
                y="54"
                width="8"
                height="23"
                rx="4"
                transform="rotate(16 63 54)"
                fill="#3E873C"
            />

            <circle cx="66" cy="60" r="1.2" fill="#A7D65C" />
            <circle cx="68" cy="68" r="1.2" fill="#A7D65C" />

            {/* هویج */}
            <rect
                x="47"
                y="55"
                width="8"
                height="25"
                rx="3"
                transform="rotate(10 47 55)"
                fill="#F28C28"
            />

            <path
                d="M49 56 L52 51 L55 56"
                fill="#4F8E3F"
            />

            {/* گل کلم */}
            <circle cx="61" cy="61" r="7" fill="#F2EBDD" />
            <circle cx="57" cy="64" r="4" fill="#FFF8E8" />
            <circle cx="64" cy="65" r="4" fill="#FFF8E8" />
            <circle cx="62" cy="58" r="4" fill="#FFF8E8" />

            {/* فلفل قرمز */}
            <path
                d="
      M42 47
      C35 44 31 38 33 33
      C35 28 41 29 44 34
      C47 39 47 44 42 47
      Z
    "
                fill="#D94B3D"
            />

            <path
                d="M39 33 C39 29 41 27 44 26"
                fill="none"
                stroke="#3F8138"
                strokeWidth="3"
                strokeLinecap="round"
            />

            {/* فلفل سبز */}
            <path
                d="
      M57 47
      C52 43 52 37 55 33
      C58 29 63 31 64 36
      C65 41 63 45 57 47
      Z
    "
                fill="#3E8B43"
            />

            {/* سیر */}
            <path
                d="
      M45 45
      C42 41 44 36 48 34
      C52 32 56 35 56 39
      C56 43 52 46 45 45
      Z
    "
                fill="#F5E8C8"
            />

            <path
                d="M50 34 C50 31 51 29 53 28"
                fill="none"
                stroke="#5D8E43"
                strokeWidth="2"
                strokeLinecap="round"
            />

            {/* سبزی داخل شیشه */}
            <path
                d="
      M30 48
      C33 44 34 40 33 36
      M34 48
      C37 43 39 39 38 35
      M68 48
      C70 43 71 39 70 35
    "
                fill="none"
                stroke="#347A3A"
                strokeWidth="2"
                strokeLinecap="round"
            />

            {/* حباب‌های آب */}
            <circle
                cx="30"
                cy="55"
                r="1.5"
                fill="#FFF8C9"
                opacity="0.8"
            />

            <circle
                cx="70"
                cy="57"
                r="1.2"
                fill="#FFF8C9"
                opacity="0.8"
            />

            <circle
                cx="42"
                cy="84"
                r="1.3"
                fill="#FFF8C9"
                opacity="0.8"
            />

            {/* برق روی شیشه */}
            <path
                d="M31 29 V43"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.8"
            />

            <path
                d="M35 27 V34"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.6"
            />
        </svg>
    );
}

export default Pickles;