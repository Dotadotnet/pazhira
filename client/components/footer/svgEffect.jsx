export const SVGEffect = ({ className = "" } ) => (
    <svg
        viewBox="0 0 1440 200"
        className={"w-full" + " " + className }
        preserveAspectRatio="none"
        style={{ display: 'block' }}
    >
        <ellipse
            cx="720"        // مرکز افقی بیضی (نصف عرض)
            cy="0"          // مرکز عمودی بیضی (لبه‌ی بالایی)
            rx="800"        // شعاع افقی (عرض بیضی)
            ry="120"        // شعاع عمودی (ارتفاع یا عمق بیضی)
            fill="currentColor"
            className=""
        />
    </svg>
);