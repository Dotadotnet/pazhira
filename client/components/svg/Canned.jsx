function Canned({ className = "" }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
        >
            {/* بدنه استوانه‌ای قوطی */}
            <path
                d="
      M25 24
      C25 20 36 18 50 18
      C64 18 75 20 75 24
      V76
      C75 80 64 82 50 82
      C36 82 25 80 25 76
      Z
    "
                fill="#3E9147"
                stroke="#286B32"
                strokeWidth="2"
            />

            {/* قسمت بالایی فلزی */}
            <ellipse
                cx="50"
                cy="24"
                rx="25"
                ry="7"
                fill="#C8CBC8"
                stroke="#8E938F"
                strokeWidth="2"
            />

            {/* فرورفتگی روی در */}
            <ellipse
                cx="50"
                cy="24"
                rx="18"
                ry="4"
                fill="#AEB3AF"
            />

            {/* حلقه بازکن */}
            <ellipse
                cx="50"
                cy="24"
                rx="7"
                ry="2.8"
                fill="none"
                stroke="#7D827F"
                strokeWidth="2"
            />

            <circle
                cx="50"
                cy="24"
                r="1.5"
                fill="#777C79"
            />

            {/* لیبل */}
            <path
                d="
      M28 38
      C34 36 42 35 50 35
      C58 35 66 36 72 38
      V65
      C66 67 58 68 50 68
      C42 68 34 67 28 65
      Z
    "
                fill="#E8F2D8"
            />

            {/* شاخه نخودفرنگی */}
            <path
                d="
      M37 57
      C43 49 54 46 64 50
    "
                fill="none"
                stroke="#4D963F"
                strokeWidth="2.5"
                strokeLinecap="round"
            />

            {/* برگ */}
            <path
                d="
      M42 51
      C37 46 33 48 32 52
      C36 52 39 53 42 55
      Z
    "
                fill="#6BAE48"
            />

            <path
                d="
      M58 48
      C61 43 66 44 68 48
      C64 48 61 50 59 52
      Z
    "
                fill="#5B9F40"
            />

            {/* نخودفرنگی‌ها */}
            <circle cx="40" cy="59" r="4" fill="#72B947" />
            <circle cx="49" cy="55" r="4" fill="#80C94F" />
            <circle cx="58" cy="53" r="4" fill="#6FB843" />

            <circle cx="48" cy="64" r="4" fill="#65A93D" />
            <circle cx="58" cy="62" r="4" fill="#7AC448" />
            <circle cx="66" cy="58" r="4" fill="#68AE3E" />

            {/* برق روی قوطی */}
            <path
                d="M29 31 V71"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.25"
            />

            {/* لبه پایینی قوطی */}
            <path
                d="M27 76 C35 80 65 80 73 76"
                fill="none"
                stroke="#286B32"
                strokeWidth="2"
            />
        </svg>
    );
}

export default Canned;