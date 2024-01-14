import React from "react";
import { PropertyDefaultWrapper } from "../../components/PropertyDefaultWrapper";
import { Eye2 } from "../../icons/Eye2";

export const SignIn = () => {
  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="bg-[url(https://png.pngtree.com/background/20210714/original/pngtree-beautiful-purple-fantasy-forest-illustration-background-picture-image_1213672.jpg)] bg-cover bg-[50%_50%] w-[1440px] h-[900px]">
        <div className="relative w-[920px] h-[638px] top-[143px] left-[260px]">
          <div className="absolute w-[920px] h-[638px] top-0 left-0">
            <div className="w-[915px] h-[638px] rounded-[20px] border border-solid border-transparent backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] [border-image:linear-gradient(to_bottom,rgba(255,255,255,0.6),rgba(255,255,255,0)_94.5%)_1] [background:linear-gradient(180deg,rgba(231.63,231.63,231.63,0.24)_0%,rgba(141.83,201.57,205.06,0.18)_100%)]" />
          </div>
          <div className="absolute w-[748px] h-[56px] top-[554px] left-[86px]">
            <div className="inline-flex flex-col items-center gap-[20px] relative">
              <div className="inline-flex items-start gap-[5px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-body-text-regular font-[number:var(--body-text-regular-font-weight)] text-white text-[length:var(--body-text-regular-font-size)] text-center tracking-[var(--body-text-regular-letter-spacing)] leading-[var(--body-text-regular-line-height)] [font-style:var(--body-text-regular-font-style)]">
                  Create An Account
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-primarydefault text-[14px] text-center tracking-[0] leading-[normal] underline">
                  Sign Up
                </div>
              </div>
              <p className="relative w-[730px] [font-family:'Poppins',Helvetica] font-light text-transparent text-[10px] text-center tracking-[0] leading-[normal]">
                <span className="text-[#ffffff]">
                  By clicking Continue, you agree to our
                </span>
                <span className="text-[#acb4b5]">&nbsp;</span>
                <span className="text-[#1fb5b6]">Terms of Service</span>
                <span className="text-[#acb4b5]">&nbsp;</span>
                <span className="text-[#ffffff]">and</span>
                <span className="text-[#0f80fd]">&nbsp;</span>
                <span className="text-[#1fb5b6]">Privacy Policy</span>
              </p>
            </div>
          </div>
          <div className="absolute w-[748px] h-[82px] top-[438px] left-[86px]">
            <div className="flex flex-col w-[730px] items-center gap-[20px] relative">
              <p className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-white text-[12px] text-center tracking-[0] leading-[normal]">
                - OR Continue with -
              </p>
              <div className="items-start inline-flex gap-[10px] relative flex-[0_0_auto]">
                <div className="flex-col items-center justify-center px-[15px] py-[10px] bg-[#f4fbff] rounded-[50px] overflow-hidden border border-solid border-primarydefault inline-flex gap-[10px] relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
                    <img
                      className="relative w-[24px] h-[24px] object-cover"
                      alt="Google"
                      src="https://c.animaapp.com/up7iaTKc/img/google-1@2x.png"
                    />
                    <div className="relative w-fit font-place-holder-regular font-[number:var(--place-holder-regular-font-weight)] text-foundationgreygrey-500 text-[length:var(--place-holder-regular-font-size)] text-center tracking-[var(--place-holder-regular-letter-spacing)] leading-[var(--place-holder-regular-line-height)] [font-style:var(--place-holder-regular-font-style)]">
                      Google
                    </div>
                  </div>
                </div>
                <div className="flex-col items-center justify-center px-[15px] py-[10px] bg-[#f4fbff] rounded-[50px] overflow-hidden border border-solid border-primarydefault inline-flex gap-[10px] relative flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
                    <img
                      className="relative w-[24px] h-[24px] object-cover"
                      alt="Facebook"
                      src="https://c.animaapp.com/up7iaTKc/img/facebook-1@2x.png"
                    />
                    <div className="relative w-fit font-place-holder-regular font-[number:var(--place-holder-regular-font-weight)] text-foundationgreygrey-500 text-[length:var(--place-holder-regular-font-size)] text-center tracking-[var(--place-holder-regular-letter-spacing)] leading-[var(--place-holder-regular-line-height)] [font-style:var(--place-holder-regular-font-style)]">
                      Facebook
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[748px] h-[18px] top-[389px] left-[86px]">
            <div className="absolute -top-px left-0 [font-family:'Poppins',Helvetica] font-normal text-primarydefault text-[12px] tracking-[0] leading-[normal] underline">
              Fogot Password
            </div>
          </div>
          <div className="absolute w-[750px] h-[48px] top-[325px] left-[85px]">
            <button className="all-[unset] box-border flex w-[730px] items-center justify-center gap-[12px] px-[12px] py-[14px] relative bg-primarydefault rounded-[8px]">
              <div className="relative w-fit mt-[-1.00px] font-14-semibold font-[number:var(--14-semibold-font-weight)] text-neutral-6 text-[length:var(--14-semibold-font-size)] text-center tracking-[var(--14-semibold-letter-spacing)] leading-[var(--14-semibold-line-height)] whitespace-nowrap [font-style:var(--14-semibold-font-style)]">
                LOG IN
              </div>
            </button>
          </div>
          <div className="absolute w-[750px] h-[16px] top-[261px] left-[85px]">
            <div className="inline-flex items-end gap-[10px] relative">
              <PropertyDefaultWrapper
                className="!h-[16px] bg-[url(https://c.animaapp.com/up7iaTKc/img/check.svg)] !relative !w-[16px]"
                property1="default"
              />
              <div className="relative w-fit [font-family:'Poppins',Helvetica] font-light text-fgdisabled text-[10px] tracking-[0] leading-[normal]">
                Remember me
              </div>
            </div>
          </div>
          <div className="absolute w-[750px] h-[126px] top-[115px] left-[85px]">
            <div className="inline-flex flex-col items-start gap-[26px] relative">
              <img
                className="relative w-[750px] flex-[0_0_auto] mr-[-20.00px]"
                alt="Email"
                src="https://c.animaapp.com/up7iaTKc/img/email.svg"
              />
              <div className="relative w-[730px] h-[50px] bg-bgdarksubtle rounded-[5px] overflow-hidden border border-solid border-transparent shadow-[0px_8px_30px_#3333331a] [border-image:linear-gradient(to_bottom,rgba(255,255,255,0),rgb(255,255,255)_78.91%)_1]">
                <div className="absolute top-[16px] left-[54px] [font-family:'Poppins',Helvetica] font-normal text-fgdisabled text-[12px] tracking-[0] leading-[normal]">
                  Password
                </div>
                <Eye2
                  className="!absolute !w-[24px] !h-[24px] !top-[13px] !left-[686px]"
                  color="#3B4978"
                />
                <img
                  className="absolute w-[24px] h-[24px] top-[13px] left-[21px]"
                  alt="Lock"
                  src="https://c.animaapp.com/up7iaTKc/img/lock.svg"
                />
              </div>
            </div>
          </div>
          <div className="absolute w-[214px] h-[60px] top-[25px] left-[353px]">
            <div className="inline-flex flex-col items-center gap-[6px] relative">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-primarylighter text-[22px] tracking-[0] leading-[normal]">
                Login
              </div>
              <p className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[normal]">
                Securely login to your account
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
