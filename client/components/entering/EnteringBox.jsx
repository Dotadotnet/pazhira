import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Input from "../UI/Input";
import { useLanguage } from "../../hooks/useLanguage";

const EnteringBox = ({
  title,
  submitHandler,
  errorMessage,
  isVerificationStep = false,
  phoneNumber = "",
}) => {
  const phoneRef = useRef(null);
  const verificationCodeRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const errorMessageRef = useRef(null);
  const { t } = useLanguage();
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);

  useEffect(() => {
    if (errorMessage) {
      if (isVerificationStep) {
        verificationCodeRefs[0].current?.focus();
      } else {
        phoneRef.current?.focus();
      }
    }
  }, [errorMessage, isVerificationStep]);

  const handleVerificationCodeChange = (index, value) => {
    // Only allow digits
    if (value && !/^\d$/.test(value)) return;
    
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);
    
    // Move to next input if a digit is entered
    if (value && index < 3) {
      verificationCodeRefs[index + 1].current?.focus();
    }
    
    // Move to previous input if backspace is pressed on empty field
    if (!value && index > 0 && verificationCode[index] === "") {
      verificationCodeRefs[index - 1].current?.focus();
    }
  };

  function onSubmitHandler(e) {
    e.preventDefault();
    
    if (isVerificationStep) {
      const code = verificationCode.join("");
      if (code.length === 4) {
        const user = {
          phoneNumber,
          verificationCode,
        };
        submitHandler(user);
      }
    } else if (phoneRef.current?.value) {
      const user = {
        phoneNumber: phoneRef.current?.value,
      };
      submitHandler(user);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="w-full md:w-[50%] max-w-[500px] border-2 bg-palette-card shadow-lg py-4 px-8 rounded-lg">
        <h2 className="text-lg md-2xl font-bold">
          {isVerificationStep ? t.verifyCode : t[`${title}`]}
        </h2>
        {!isVerificationStep ? (
          <p className="mt-4 mb-2">
            {t.hi}
            <br />
            <span className="inline-block text-palette-mute dark-palette-base/80 text-[12px] mt-2 bg-palette-fill p-2">
              {t.loginExplanationPhone}
            </span>
          </p>
        ) : null}
        
        {isVerificationStep ? (
          <p className="mt-4 mb-2 text-palette-mute">
            {t.enterVerificationCode}
          </p>
        ) : null}
        
        <form onSubmit={onSubmitHandler}>
          <div className="mt-8">
            {!isVerificationStep ? (
              <Input
                ref={phoneRef}
                type="tel"
                id="phoneNumber"
                placeholder="enterYourPhoneNumber"
                required={true}
              />
            ) : null}

            {isVerificationStep ? (
              <div>
                <p className="mb-2 text-palette-mute">
                  {t.codeSentTo} {phoneNumber}
                </p>
                <div className="flex justify-center space-x-4 rtl-x-reverse my-8">
                  {verificationCode.map((digit, index) => (
                    <input
                      key={index}
                      ref={verificationCodeRefs[index]}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleVerificationCodeChange(index, e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Backspace" && !digit && index > 0) {
                          verificationCodeRefs[index - 1].current?.focus();
                        }
                      }}
                      className="w-16 h-16 text-2xl text-center border-2 border-gainsboro rounded-lg shadow-md focus:border-blue-500 focus:outline-none"
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          
           {errorMessage && (
            <span
              ref={errorMessageRef}
              className="text-rose-600 block -mt-4 mb-4"
            >
              {t[`${errorMessage}`] ? t[`${errorMessage}`] : errorMessage}
            </span>
          )}
          <button
            type="submit"
            className="bg-palette-primary w-full py-4 rounded-lg text-palette-side text-xl shadow-lg"
          >
            {isVerificationStep ? t.verifyCode : t[`${title}`]}
          </button>
        </form>
        {isVerificationStep ? (
          <button
            onClick={() => window.location.reload()}
            className="block my-4 text-cyan-500 hover:underline"
          >
            {t.changePhoneNumber}
          </button>
        ) : (
          <Link href="/signUp">
            <a className="block my-4">
              <span className="text-sm text-palette-mute">
                {t.doHaveAnAccount}
              </span>
              <span className="text-cyan-500">{t.signUp}</span>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default EnteringBox;

