
function SeaEffect({ className = "", height = "30" , color }) {
    return (
        <div class="flex flex-nowrap overflow-hidden" >
            <svg  className="flex-none scale-[1.003]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" height={height}>
                <path style={{ fill: color }}   d="M0,20 Q10,10 20,20 T40,20 T60,20 T80,20 T100,20 T120,20 T140,20 T160,20 T180,20 T200,20 L200,40 L0,40 Z"  />
            </svg>
            <svg className="flex-none scale-[1.003]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" height={height}>
                <path style={{ fill: color }} d="M0,20 Q10,10 20,20 T40,20 T60,20 T80,20 T100,20 T120,20 T140,20 T160,20 T180,20 T200,20 L200,40 L0,40 Z"  />
            </svg>
            <svg className="flex-none scale-[1.003]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" height={height}>
                <path style={{ fill: color }} d="M0,20 Q10,10 20,20 T40,20 T60,20 T80,20 T100,20 T120,20 T140,20 T160,20 T180,20 T200,20 L200,40 L0,40 Z"  />
            </svg>
            <svg className="flex-none scale-[1.003]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" height={height}>
                <path style={{ fill: color }} d="M0,20 Q10,10 20,20 T40,20 T60,20 T80,20 T100,20 T120,20 T140,20 T160,20 T180,20 T200,20 L200,40 L0,40 Z"  />
            </svg>
            <svg className="flex-none scale-[1.003]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" height={height}>
                <path style={{ fill: color }} d="M0,20 Q10,10 20,20 T40,20 T60,20 T80,20 T100,20 T120,20 T140,20 T160,20 T180,20 T200,20 L200,40 L0,40 Z"  />
            </svg>
        </div>
    );
}

export default SeaEffect;