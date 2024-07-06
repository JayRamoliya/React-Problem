import React, { useEffect, useRef, useState } from 'react'

const Otp = ({ otplength = 6 }) => {
    const [otpfields, setOtpFiedls] = useState(new Array(otplength).fill(""))
    const ref = useRef([]);

    // console.log(ref);
    // console.log(otpfields);

    const handlekeydown = (e, i) => {
        const copyotpfields = [...otpfields]

        const key = e.key
        // console.log(key);

        if (key === "ArrowLeft") {
            if (i > 0) ref.current[i - 1].focus();
            return;
        }
        if (key === "ArrowRight") {
            if (i + 1 < otpfields.length) ref.current[i + 1].focus();
            return;
        }


        if (key === "Backspace") {
            console.log("Delete clicked");
            copyotpfields[i] = "";
            setOtpFiedls(copyotpfields);
            if (i > 0) ref.current[i - 1].focus();
            return;
        }
        if (isNaN(key)) {
            return;
        }
        copyotpfields[i] = key
        setOtpFiedls(copyotpfields)


        if (i + 1 < otpfields.length) ref.current[i + 1].focus()

        // console.log(handlekeydown);
    }

    useEffect(() => {
        ref.current["0"].focus();
    }, []);

    
    return (
        <div className='container'>
            {otpfields.map((value, i) => {
                return <input
                    key={i}
                    value={value}
                    type="text"
                    ref={(currentInput) => (ref.current[i] = currentInput)}
                    onKeyDown={(e) => handlekeydown(e, i)} />
            })}
        </div>
    )
}

export default Otp