import React from "react";
import { IcoGestures } from "../../components/IcoGestures";
import { IcoOtherFlag } from "../../components/IcoOtherFlag";
import { IcoOtherLight } from "../../components/IcoOtherLight";
import { Search } from "../../components/Search";
import { User } from "../../components/User";
import { ChevronRight } from "../../icons/ChevronRight";
import { Icons } from "../../icons/Icons";
import { Icons1 } from "../../icons/Icons1";
import { IoniconBBuildDefault } from "../../icons/IoniconBBuildDefault";
import { IoniconCCardDefault } from "../../icons/IoniconCCardDefault";
import { IoniconHHomeDefault } from "../../icons/IoniconHHomeDefault";
import { IoniconPPersonDefault } from "../../icons/IoniconPPersonDefault";
import { IoniconRRocketSharp } from "../../icons/IoniconRRocketSharp";
import { IoniconSStatsChart } from "../../icons/IoniconSStatsChart";

export const Dashboard = () => {
  return (
    <div className="bg-[#243458] flex flex-row justify-center w-full">
      <div className="bg-bgdarksurface w-[1440px] h-[1000px]">
        <div className="relative h-[1000px] bg-[url(https://c.animaapp.com/pKgdbKN7/img/background-2.png)] bg-[100%_100%]">
          <img
            className="absolute w-[1440px] h-[794px] top-[106px] left-0"
            alt="Img"
            src="https://c.animaapp.com/pKgdbKN7/img/4986531ca822d48e57b4a18f40ff5172-svg.svg"
          />
          <div className="absolute w-[264px] h-[963px] top-[17px] left-[16px] rounded-[10px] border border-solid border-[#2e3b59] backdrop-blur-[120px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(120px)_brightness(100%)] [background:linear-gradient(180deg,rgb(7,13,42)_0%,rgba(7,13,42,0.5)_100%)]">
            <div className="relative w-[331px] h-[507px] top-[2px] left-[-33px]">
              <img
                className="w-[331px] h-[128px] absolute top-0 left-0"
                alt="Background"
                src="https://c.animaapp.com/pKgdbKN7/img/background-1@2x.png"
              />
              <img
                className="absolute w-[63px] h-[27px] top-[23px] left-[133px]"
                alt="Content"
                src="https://c.animaapp.com/pKgdbKN7/img/content.svg"
              />
              <div className="absolute w-[222px] h-[393px] top-[114px] left-[53px]">
                <div className="absolute w-[96px] h-[29px] top-[364px] left-[16px]">
                  <div className="absolute w-[30px] h-[29px] top-0 left-0 bg-bgdarksurface rounded-[12px] shadow-[0px_3.5px_5.5px_#00000005]">
                    <IoniconRRocketSharp className="!absolute !w-[15px] !h-[14px] !top-[7px] !left-[8px]" />
                  </div>
                  <div className="absolute w-[48px] h-[20px] top-[5px] left-[46px] font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[#ffffff] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] whitespace-nowrap [font-style:var(--text-small-medium-font-style)]">
                    Logout
                  </div>
                </div>
                <div className="absolute w-[106px] h-[29px] top-[312px] left-[16px]">
                  <div className="absolute w-[30px] h-[29px] top-0 left-0 bg-bgdarksurface rounded-[12px] shadow-[0px_3.5px_5.5px_#00000005]">
                    <IoniconBBuildDefault className="!absolute !w-[15px] !h-[14px] !top-[7px] !left-[8px]" />
                  </div>
                  <div className="absolute h-[21px] top-[5px] left-[46px] font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[#ffffff] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] whitespace-nowrap [font-style:var(--text-small-medium-font-style)]">
                    Settings
                  </div>
                </div>
                <div className="absolute w-[92px] h-[29px] top-[260px] left-[16px]">
                  <div className="absolute w-[30px] h-[29px] top-0 left-0 bg-bgdarksurface rounded-[12px] shadow-[0px_3.5px_5.5px_#00000005]">
                    <IoniconPPersonDefault
                      className="!absolute !w-[15px] !h-[14px] !top-[7px] !left-[8px]"
                      color="#1FB5B6"
                    />
                  </div>
                  <div className="absolute w-[44px] h-[20px] top-[5px] left-[46px] font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[#ffffff] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] whitespace-nowrap [font-style:var(--text-small-medium-font-style)]">
                    Profile
                  </div>
                </div>
                <div className="absolute w-[133px] h-[17px] top-[220px] left-[16px] font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[#ffffff] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] whitespace-nowrap [font-style:var(--text-small-medium-font-style)]">
                  ACCOUNT PAGES
                </div>
                <div className="absolute w-[90px] h-[29px] top-[116px] left-[16px]">
                  <div className="absolute w-[30px] h-[29px] top-0 left-0 bg-bgdarksurface rounded-[12px] shadow-[0px_3.5px_5.5px_#00000005]">
                    <IoniconCCardDefault className="!absolute !w-[15px] !h-[14px] !top-[7px] !left-[8px]" />
                  </div>
                  <div className="absolute w-[43px] h-[20px] top-[5px] left-[46px] font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[#ffffff] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] whitespace-nowrap [font-style:var(--text-small-medium-font-style)]">
                    Billing
                  </div>
                </div>
                <div className="absolute w-[128px] h-[29px] top-[64px] left-[16px]">
                  <div className="absolute w-[30px] h-[29px] top-0 left-0 bg-bgdarksurface rounded-[12px] shadow-[0px_3.5px_5.5px_#00000005]">
                    <IoniconSStatsChart className="!absolute !w-[15px] !h-[14px] !top-[7px] !left-[8px]" />
                  </div>
                  <div className="absolute w-[80px] h-[20px] top-[5px] left-[46px] font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[#ffffff] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] whitespace-nowrap [font-style:var(--text-small-medium-font-style)]">
                    Action Plan
                  </div>
                </div>
                <div className="absolute w-[222px] h-[52px] top-0 left-0">
                  <div className="relative w-[220px] h-[52px] bg-bgdarksurface rounded-[15px] shadow-[0px_3.5px_5.5px_#00000005]">
                    <div className="absolute w-[30px] h-[29px] top-[12px] left-[16px] bg-[url(https://c.animaapp.com/pKgdbKN7/img/rectangle-3.svg)] bg-[100%_100%]">
                      <IoniconHHomeDefault className="!absolute !w-[15px] !h-[14px] !top-[7px] !left-[8px]" />
                    </div>
                    <div className="absolute w-[79px] h-[20px] top-[16px] left-[61px] font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[#ffffff] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] whitespace-nowrap [font-style:var(--text-small-medium-font-style)]">
                      Dashboard
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[1128px] h-[963px] top-[17px] left-[296px]">
            <header className="flex flex-col w-[1128px] h-[80px] items-center justify-center gap-[3px] px-[24px] py-[20px] absolute top-0 left-0 bg-transparent rounded-[8px] border border-solid border-[#2d3b58] [background:linear-gradient(180deg,rgb(7,13,42)_0%,rgba(7,13,42,0.5)_100%)]">
              <div className="flex flex-wrap items-start justify-between gap-[10px_10px] relative flex-1 self-stretch w-full grow">
                <Search
                  active="off"
                  className="!relative"
                  concreteComponentNodeIconBookOpenClassName="bg-[url(https://c.animaapp.com/pKgdbKN7/img/iconly-light-search.svg)] !relative"
                  icon="off"
                  rectangleClassName="!border-[unset] !border-[unset] !bg-bgdarksurface"
                  sepClassName="!text-bgdarkmuted !tracking-[var(--text-tiny-medium-letter-spacing)] !text-[length:var(--text-tiny-medium-font-size)] ![font-style:var(--text-tiny-medium-font-style)] !font-[number:var(--text-tiny-medium-font-weight)] !font-text-tiny-medium !leading-[var(--text-tiny-medium-line-height)]"
                  type="empty"
                />
                <div className="flex w-[216px] items-center gap-[24px] relative">
                  <div className="relative w-[24px] h-[24px]">
                    <div className="relative w-[25px] h-[25px] -top-px">
                      <div className="absolute w-[24px] h-[24px] top-px left-0">
                        <div className="relative h-[24px]">
                          <img
                            className="absolute w-[24px] h-[24px] top-[2083px] left-[-3598px]"
                            alt="Bounds"
                            src="https://c.animaapp.com/pKgdbKN7/img/bounds@2x.png"
                          />
                          <img
                            className="absolute w-[17px] h-[20px] top-[2px] left-[4px]"
                            alt="Shape"
                            src="https://c.animaapp.com/pKgdbKN7/img/shape.svg"
                          />
                        </div>
                      </div>
                      <div className="absolute w-[10px] h-[10px] top-0 left-[15px] bg-secondarydefault rounded-[5px] border-2 border-solid border-dark-gray" />
                    </div>
                  </div>
                  <User
                    groupClassName="!h-[35px] !w-[73px]"
                    jake="https://c.animaapp.com/pKgdbKN7/img/jake@2x.png"
                    jakeClassName="!border-variable-collection-bg-light-canvas"
                    jakeClassNameOverride="![object-fit:unset]"
                    nameClassName="!text-variable-collection-bg-light-muted !tracking-[var(--text-small-medium-letter-spacing)] !text-[length:var(--text-small-medium-font-size)] ![font-style:var(--text-small-medium-font-style)] !font-[number:var(--text-small-medium-font-weight)] !font-text-small-medium !leading-[var(--text-small-medium-line-height)]"
                    nameClassNameOverride="!text-variable-collection-bg-light-canvas !tracking-[0] !text-[8px] ![font-style:unset] !font-normal ![font-family:'Poppins',Helvetica] !leading-[12px]"
                    text="An Tran"
                    text1="atran14@tufts.edu"
                  />
                </div>
              </div>
            </header>
            <div className="inline-flex items-start gap-[20px] absolute top-[108px] left-0 rotate-180">
              <div className="relative w-[740px] h-[377px] rounded-[8px] border border-solid border-[#2c3a59] rotate-180 backdrop-blur-[120px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(120px)_brightness(100%)] [background:linear-gradient(180deg,rgb(7,13,42)_0%,rgba(7,13,42,0.5)_100%)] opacity-80">
                <div className="absolute w-[173px] h-[171px] top-[95px] left-[21px] rounded-[86.67px/85.5px] border border-solid border-[#283a5ee6] shadow-[inset_-12px_-17px_18px_#0a0e2dbd] backdrop-blur-[120px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(120px)_brightness(100%)] [background:linear-gradient(180deg,rgba(5.91,11.17,39.61,0.7)_0%,rgba(7.75,12.6,37.46,0.71)_50.63%,rgba(9.54,14,35.36,0.35)_100%)]">
                  <div className="relative w-[162px] h-[171px] left-[11px]">
                    <img
                      className="absolute w-[162px] h-[171px] top-0 left-0 -rotate-180"
                      alt="Ellipse"
                      src="https://c.animaapp.com/pKgdbKN7/img/ellipse-89.svg"
                    />
                    <div className="absolute w-[95px] h-[118px] top-[24px] left-[28px]">
                      <div className="absolute w-[84px] top-[40px] left-[4px] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-[#ffffff] text-[length:var(--heading-h4-font-size)] text-center tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
                        70%
                      </div>
                      <div className="absolute w-[91px] top-0 left-0 font-text-tiny-normal font-[number:var(--text-tiny-normal-font-weight)] text-graygray-400 text-[length:var(--text-tiny-normal-font-size)] text-center tracking-[var(--text-tiny-normal-letter-spacing)] leading-[var(--text-tiny-normal-line-height)] [font-style:var(--text-tiny-normal-font-style)]">
                        Towards Your Visions
                      </div>
                      <img
                        className="absolute w-[30px] h-[30px] top-[88px] left-[29px] -rotate-180"
                        alt="Bolt black"
                        src="https://c.animaapp.com/pKgdbKN7/img/bolt-black-24dp-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute w-[306px] h-[49px] top-[299px] left-[21px]">
                  <p className="absolute w-[302px] top-0 left-0 font-text-tiny-light font-[number:var(--text-tiny-light-font-weight)] text-[#ffffff] text-[length:var(--text-tiny-light-font-size)] tracking-[var(--text-tiny-light-letter-spacing)] leading-[var(--text-tiny-light-line-height)] [font-style:var(--text-tiny-light-font-style)]">
                    A calculation of your personal progress
                  </p>
                  <div className="absolute w-[214px] top-[19px] left-0 font-text-large-semi-bold font-[number:var(--text-large-semi-bold-font-weight)] text-[#ffffff] text-[length:var(--text-large-semi-bold-font-size)] tracking-[var(--text-large-semi-bold-letter-spacing)] leading-[var(--text-large-semi-bold-line-height)] [font-style:var(--text-large-semi-bold-font-style)]">
                    Statistics
                  </div>
                </div>
                <div className="flex flex-wrap w-[467px] items-start gap-[27px_24px] absolute top-[74px] left-[246px]">
                  <div className="relative w-[220px] h-[84px] rounded-[8px] overflow-hidden border border-solid border-[#2e3b59] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] [background:linear-gradient(180deg,rgba(6,11,38,0.74)_0%,rgba(26,31,55,0.5)_100%)]">
                    <div className="absolute w-[70px] h-[49px] top-[19px] left-[18px]">
                      <div className="relative w-[66px] h-[49px]">
                        <div className="absolute top-0 left-0 font-text-tiny-medium font-[number:var(--text-tiny-medium-font-weight)] text-graygray-400 text-[length:var(--text-tiny-medium-font-size)] tracking-[var(--text-tiny-medium-letter-spacing)] leading-[var(--text-tiny-medium-line-height)] whitespace-nowrap [font-style:var(--text-tiny-medium-font-style)]">
                          Day Streak
                        </div>
                        <div className="absolute top-[15px] left-0 font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[#ffffff] text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
                          120
                        </div>
                      </div>
                    </div>
                    <div className="absolute w-[56px] h-[56px] top-[14px] left-[150px] bg-primarydarker rounded-[12px]">
                      <IcoGestures
                        className="!h-[32px] !left-[12px] !w-[32px] !top-[12px]"
                        iconColor="https://c.animaapp.com/pKgdbKN7/img/icon-color-2.svg"
                        iconColorClassName="!h-[27px] !left-[3px] !w-[27px] !top-[3px]"
                      />
                    </div>
                  </div>
                  <div className="relative w-[220px] h-[84px] rounded-[8px] overflow-hidden border border-solid border-[#2b3959] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] [background:linear-gradient(180deg,rgba(6,11,38,0.74)_0%,rgba(26,31,55,0.5)_100%)]">
                    <div className="absolute w-[39px] h-[49px] top-[19px] left-[18px]">
                      <div className="relative w-[35px] h-[49px]">
                        <div className="absolute top-0 left-0 font-text-tiny-medium font-[number:var(--text-tiny-medium-font-weight)] text-graygray-400 text-[length:var(--text-tiny-medium-font-size)] tracking-[var(--text-tiny-medium-letter-spacing)] leading-[var(--text-tiny-medium-line-height)] whitespace-nowrap [font-style:var(--text-tiny-medium-font-style)]">
                          Tasks
                        </div>
                        <div className="absolute top-[15px] left-0 font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[#ffffff] text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
                          80
                        </div>
                      </div>
                    </div>
                    <div className="absolute w-[56px] h-[56px] top-[14px] left-[150px] bg-primarydarker rounded-[12px]">
                      <IcoOtherLight
                        className="!h-[32px] !left-[12px] !w-[32px] !top-[12px]"
                        iconColor="https://c.animaapp.com/pKgdbKN7/img/icon-color-1.svg"
                        iconColorClassName="!h-[29px] !w-[29px]"
                      />
                    </div>
                  </div>
                  <div className="relative w-[220px] h-[84px] rounded-[8px] overflow-hidden border border-solid border-[#2b3959] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] [background:linear-gradient(180deg,rgba(6,11,38,0.74)_0%,rgba(26,31,55,0.5)_100%)]">
                    <div className="absolute w-[39px] h-[49px] top-[19px] left-[18px]">
                      <div className="relative w-[35px] h-[49px]">
                        <div className="absolute top-0 left-0 font-text-tiny-medium font-[number:var(--text-tiny-medium-font-weight)] text-graygray-400 text-[length:var(--text-tiny-medium-font-size)] tracking-[var(--text-tiny-medium-letter-spacing)] leading-[var(--text-tiny-medium-line-height)] whitespace-nowrap [font-style:var(--text-tiny-medium-font-style)]">
                          Goals
                        </div>
                        <div className="absolute top-[15px] left-0 font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[#ffffff] text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
                          4
                        </div>
                      </div>
                    </div>
                    <div className="absolute w-[56px] h-[56px] top-[14px] left-[150px] bg-primarydarker rounded-[12px]">
                      <img
                        className="absolute w-[18px] h-[24px] top-[16px] left-[19px]"
                        alt="Vector"
                        src="https://c.animaapp.com/pKgdbKN7/img/vector.svg"
                      />
                    </div>
                  </div>
                  <div className="relative w-[220px] h-[84px] rounded-[8px] overflow-hidden border border-solid border-[#2b3959] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] [background:linear-gradient(180deg,rgba(6,11,38,0.74)_0%,rgba(26,31,55,0.5)_100%)]">
                    <div className="absolute w-[84px] h-[49px] top-[19px] left-[18px]">
                      <div className="relative w-[80px] h-[49px]">
                        <div className="absolute top-0 left-0 font-text-tiny-medium font-[number:var(--text-tiny-medium-font-weight)] text-graygray-400 text-[length:var(--text-tiny-medium-font-size)] tracking-[var(--text-tiny-medium-letter-spacing)] leading-[var(--text-tiny-medium-line-height)] whitespace-nowrap [font-style:var(--text-tiny-medium-font-style)]">
                          Current Rank
                        </div>
                        <div className="absolute top-[15px] left-0 font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[#ffffff] text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
                          Gold
                        </div>
                      </div>
                    </div>
                    <div className="absolute w-[56px] h-[56px] top-[14px] left-[150px] bg-primarydarker rounded-[12px]">
                      <IcoOtherFlag
                        className="!h-[32px] !left-[12px] !w-[32px] !top-[12px]"
                        iconColor="https://c.animaapp.com/pKgdbKN7/img/icon-color.svg"
                        iconColorClassName="!h-[27px] !left-[5px] !w-[21px] !top-[3px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-[368px] h-[377px] rotate-180">
                <div className="relative h-[377px]">
                  <img
                    className="w-[368px] h-[377px] -rotate-180 absolute top-0 left-0"
                    alt="Background"
                    src="https://c.animaapp.com/pKgdbKN7/img/background@1.5x.png"
                  />
                  <img
                    className="absolute w-[262px] h-[236px] top-[26px] left-[57px] -rotate-180 object-cover"
                    alt="Untitled design"
                    src="https://c.animaapp.com/pKgdbKN7/img/untitled-design-6-1@2x.png"
                  />
                  <div className="absolute w-[280px] h-[81px] top-[265px] left-[35px]">
                    <div className="absolute top-[39px] left-0 font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-fgon-accent text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] whitespace-nowrap [font-style:var(--heading-h4-font-style)]">
                      Welcome back!
                    </div>
                    <p className="absolute top-0 left-0 font-text-tiny-normal font-[number:var(--text-tiny-normal-font-weight)] text-fgon-accent text-[length:var(--text-tiny-normal-font-size)] tracking-[var(--text-tiny-normal-letter-spacing)] leading-[var(--text-tiny-normal-line-height)] [font-style:var(--text-tiny-normal-font-style)]">
                      a reminder to fuel your motivation and design
                      <br />
                      the future you envision!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="inline-flex items-start gap-[20px] absolute top-[513px] left-[3px] rotate-180">
              <div className="relative w-[364px] h-[450px] rounded-[8px] overflow-hidden border border-solid border-[#2a3859] rotate-180 [background:linear-gradient(180deg,rgb(7,13,42)_0%,rgba(7,13,42,0.5)_100%)]">
                <div className="absolute top-[395px] left-[24px] font-text-large-semi-bold font-[number:var(--text-large-semi-bold-font-weight)] text-color-palette-typography-dark-base-primary-gray-1 text-[length:var(--text-large-semi-bold-font-size)] tracking-[var(--text-large-semi-bold-letter-spacing)] leading-[var(--text-large-semi-bold-line-height)] whitespace-nowrap [font-style:var(--text-large-semi-bold-font-style)]">
                  Calendar
                </div>
                <div className="absolute w-[134px] h-[25px] top-[368px] left-[24px]">
                  <div className="absolute w-[134px] h-[22px] top-0 left-0">
                    <div className="inline-flex items-center justify-center gap-[10px] px-[7px] py-[3px] absolute top-px left-[85px] bg-secondarydarker rounded-[300px]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-light text-color-palette-typography-dark-base-primary-gray-1 text-[10px] tracking-[0] leading-[15px] whitespace-nowrap">
                        Jan 23, Sat || TODAY
                      </div>
                    </div>
                  </div>
                  <Icons1 className="!absolute !w-[25px] !h-[25px] !top-0 !left-0 !-rotate-180" />
                  <Icons className="!absolute !w-[25px] !h-[25px] !top-0 !left-[31px] !-rotate-180" />
                </div>
                <div className="flex flex-col w-[316px] items-start gap-[5px] px-[15px] py-[10px] absolute top-[288px] left-[24px] rounded-[4px] border border-solid border-color-palette-color-palette-dark-stroke">
                  <div className="relative w-fit mt-[-1.00px] font-text-tiny-normal font-[number:var(--text-tiny-normal-font-weight)] text-color-palette-typography-dark-base-primary-gray-1 text-[length:var(--text-tiny-normal-font-size)] tracking-[var(--text-tiny-normal-letter-spacing)] leading-[var(--text-tiny-normal-line-height)] whitespace-nowrap [font-style:var(--text-tiny-normal-font-style)]">
                    Job Hunting
                  </div>
                  <div className="relative w-fit font-text-tiny-light font-[number:var(--text-tiny-light-font-weight)] text-color-palette-typography-dark-base-secondary-gray-2 text-[length:var(--text-tiny-light-font-size)] tracking-[var(--text-tiny-light-letter-spacing)] leading-[var(--text-tiny-light-line-height)] whitespace-nowrap [font-style:var(--text-tiny-light-font-style)]">
                    16:00
                  </div>
                  <img
                    className="absolute w-[4px] h-[59px] top-[2px] left-[312px] -rotate-180"
                    alt="Rectangle copy"
                    src="https://c.animaapp.com/pKgdbKN7/img/rectangle-copy-53-3.svg"
                  />
                </div>
                <div className="top-[217px] flex flex-col w-[316px] items-start gap-[5px] px-[15px] py-[10px] absolute left-[24px] rounded-[4px] border border-solid border-color-palette-color-palette-dark-stroke">
                  <div className="relative w-fit mt-[-1.00px] font-text-tiny-normal font-[number:var(--text-tiny-normal-font-weight)] text-color-palette-typography-dark-base-primary-gray-1 text-[length:var(--text-tiny-normal-font-size)] tracking-[var(--text-tiny-normal-letter-spacing)] leading-[var(--text-tiny-normal-line-height)] whitespace-nowrap [font-style:var(--text-tiny-normal-font-style)]">
                    Write Journal
                  </div>
                  <div className="relative w-fit font-text-tiny-light font-[number:var(--text-tiny-light-font-weight)] text-color-palette-typography-dark-base-secondary-gray-2 text-[length:var(--text-tiny-light-font-size)] tracking-[var(--text-tiny-light-letter-spacing)] leading-[var(--text-tiny-light-line-height)] whitespace-nowrap [font-style:var(--text-tiny-light-font-style)]">
                    14:00
                  </div>
                  <img
                    className="absolute w-[4px] h-[59px] top-[2px] left-[312px] -rotate-180"
                    alt="Rectangle copy"
                    src="https://c.animaapp.com/pKgdbKN7/img/rectangle-copy-53-2.svg"
                  />
                </div>
                <div className="top-[146px] flex flex-col w-[316px] items-start gap-[5px] px-[15px] py-[10px] absolute left-[24px] rounded-[4px] border border-solid border-color-palette-color-palette-dark-stroke">
                  <div className="relative w-fit mt-[-1.00px] font-text-tiny-normal font-[number:var(--text-tiny-normal-font-weight)] text-color-palette-typography-dark-base-primary-gray-1 text-[length:var(--text-tiny-normal-font-size)] tracking-[var(--text-tiny-normal-letter-spacing)] leading-[var(--text-tiny-normal-line-height)] whitespace-nowrap [font-style:var(--text-tiny-normal-font-style)]">
                    Read a book
                  </div>
                  <div className="relative w-fit font-text-tiny-light font-[number:var(--text-tiny-light-font-weight)] text-color-palette-typography-dark-base-secondary-gray-2 text-[length:var(--text-tiny-light-font-size)] tracking-[var(--text-tiny-light-letter-spacing)] leading-[var(--text-tiny-light-line-height)] whitespace-nowrap [font-style:var(--text-tiny-light-font-style)]">
                    13:00
                  </div>
                  <img
                    className="absolute w-[4px] h-[59px] top-[2px] left-[312px] -rotate-180"
                    alt="Rectangle copy"
                    src="https://c.animaapp.com/pKgdbKN7/img/rectangle-copy-53-1.svg"
                  />
                </div>
                <div className="top-[75px] flex flex-col w-[316px] items-start gap-[5px] px-[15px] py-[10px] absolute left-[24px] rounded-[4px] border border-solid border-color-palette-color-palette-dark-stroke">
                  <div className="relative w-fit mt-[-1.00px] font-text-tiny-normal font-[number:var(--text-tiny-normal-font-weight)] text-color-palette-typography-dark-base-primary-gray-1 text-[length:var(--text-tiny-normal-font-size)] tracking-[var(--text-tiny-normal-letter-spacing)] leading-[var(--text-tiny-normal-line-height)] whitespace-nowrap [font-style:var(--text-tiny-normal-font-style)]">
                    Code
                  </div>
                  <div className="relative w-fit font-text-tiny-light font-[number:var(--text-tiny-light-font-weight)] text-color-palette-typography-dark-base-secondary-gray-2 text-[length:var(--text-tiny-light-font-size)] tracking-[var(--text-tiny-light-letter-spacing)] leading-[var(--text-tiny-light-line-height)] whitespace-nowrap [font-style:var(--text-tiny-light-font-style)]">
                    09:00
                  </div>
                  <img
                    className="absolute w-[4px] h-[59px] top-[2px] left-[312px] -rotate-180"
                    alt="Rectangle copy"
                    src="https://c.animaapp.com/pKgdbKN7/img/rectangle-copy-53.svg"
                  />
                </div>
                <div className="inline-flex items-center absolute top-[15px] left-[122px]">
                  <div className="relative w-fit mt-[-1.00px] font-title-1-TT-hoves-regular font-[number:var(--title-1-TT-hoves-regular-font-weight)] text-secondarydefault text-[length:var(--title-1-TT-hoves-regular-font-size)] tracking-[var(--title-1-TT-hoves-regular-letter-spacing)] leading-[var(--title-1-TT-hoves-regular-line-height)] whitespace-nowrap [font-style:var(--title-1-TT-hoves-regular-font-style)]">
                    See full calendar
                  </div>
                  <div className="relative w-[16px] h-[16px]">
                    <ChevronRight
                      className="!absolute !w-[16px] !h-[16px] !top-0 !left-0 !-rotate-180"
                      color="#FF5E6F"
                    />
                  </div>
                </div>
                <img
                  className="w-[364px] h-[2px] top-[50px] -rotate-180 absolute left-0"
                  alt="Rectangle"
                  src="https://c.animaapp.com/pKgdbKN7/img/rectangle.svg"
                />
              </div>
              <div className="relative w-[741px] h-[450px] rounded-[8px] overflow-hidden border border-solid border-[#2c3a59] rotate-180 [background:linear-gradient(180deg,rgb(7,13,42)_0%,rgba(7,13,42,0.5)_100%)]">
                <div className="absolute top-[395px] left-[24px] font-text-large-semi-bold font-[number:var(--text-large-semi-bold-font-weight)] text-color-palette-typography-dark-base-primary-gray-1 text-[length:var(--text-large-semi-bold-font-size)] tracking-[var(--text-large-semi-bold-letter-spacing)] leading-[var(--text-large-semi-bold-line-height)] whitespace-nowrap [font-style:var(--text-large-semi-bold-font-style)]">
                  Tasks Completed
                </div>
                <div className="absolute w-[718px] h-[323px] top-[24px] left-[12px]">
                  <div className="inline-flex flex-col items-start gap-[24px] absolute top-[32px] left-[12px]">
                    <div className="mt-[-1.00px] relative w-fit font-text-small-light font-[number:var(--text-small-light-font-weight)] text-color-palette-typography-dark-base-secondary-gray-2 text-[length:var(--text-small-light-font-size)] text-right tracking-[var(--text-small-light-letter-spacing)] leading-[var(--text-small-light-line-height)] whitespace-nowrap [font-style:var(--text-small-light-font-style)]">
                      20
                    </div>
                    <div className="relative w-fit font-text-small-light font-[number:var(--text-small-light-font-weight)] text-color-palette-typography-dark-base-secondary-gray-2 text-[length:var(--text-small-light-font-size)] text-right tracking-[var(--text-small-light-letter-spacing)] leading-[var(--text-small-light-line-height)] whitespace-nowrap [font-style:var(--text-small-light-font-style)]">
                      15
                    </div>
                    <div className="relative w-fit font-text-small-light font-[number:var(--text-small-light-font-weight)] text-color-palette-typography-dark-base-secondary-gray-2 text-[length:var(--text-small-light-font-size)] text-right tracking-[var(--text-small-light-letter-spacing)] leading-[var(--text-small-light-line-height)] whitespace-nowrap [font-style:var(--text-small-light-font-style)]">
                      10
                    </div>
                    <div className="relative w-fit font-text-small-light font-[number:var(--text-small-light-font-weight)] text-color-palette-typography-dark-base-secondary-gray-2 text-[length:var(--text-small-light-font-size)] text-right tracking-[var(--text-small-light-letter-spacing)] leading-[var(--text-small-light-line-height)] whitespace-nowrap [font-style:var(--text-small-light-font-style)]">
                      6
                    </div>
                    <div className="relative w-fit font-text-small-light font-[number:var(--text-small-light-font-weight)] text-color-palette-typography-dark-base-secondary-gray-2 text-[length:var(--text-small-light-font-size)] text-right tracking-[var(--text-small-light-letter-spacing)] leading-[var(--text-small-light-line-height)] whitespace-nowrap [font-style:var(--text-small-light-font-style)]">
                      4
                    </div>
                    <div className="relative w-fit font-text-small-light font-[number:var(--text-small-light-font-weight)] text-color-palette-typography-dark-base-secondary-gray-2 text-[length:var(--text-small-light-font-size)] text-right tracking-[var(--text-small-light-letter-spacing)] leading-[var(--text-small-light-line-height)] whitespace-nowrap [font-style:var(--text-small-light-font-style)]">
                      2
                    </div>
                    <div className="relative w-fit font-text-small-light font-[number:var(--text-small-light-font-weight)] text-color-palette-typography-dark-base-secondary-gray-2 text-[length:var(--text-small-light-font-size)] text-right tracking-[var(--text-small-light-letter-spacing)] leading-[var(--text-small-light-line-height)] whitespace-nowrap [font-style:var(--text-small-light-font-style)]">
                      0
                    </div>
                  </div>
                  <img
                    className="absolute w-[667px] h-[277px] top-[36px] left-0 -rotate-180"
                    alt="Group"
                    src="https://c.animaapp.com/pKgdbKN7/img/group-1300.png"
                  />
                  <div className="flex flex-col w-[56px] items-start gap-[16px] absolute top-0 left-[52px]">
                    <img
                      className="relative w-px h-[277px] mb-[-0.50px] mr-[-0.50px] -rotate-180 object-cover"
                      alt="Vector"
                      src="https://c.animaapp.com/pKgdbKN7/img/vector-647-12.svg"
                    />
                    <div className="relative w-[50px] font-[number:var(--text-small-light-font-weight)] text-color-palette-typography-dark-base-secondary-gray-2 text-[length:var(--text-small-light-font-size)] leading-[var(--text-small-light-line-height)] font-text-small-light tracking-[var(--text-small-light-letter-spacing)] [font-style:var(--text-small-light-font-style)]">
                      Jan
                    </div>
                  </div>
                  <div className="flex flex-col w-[56px] items-start gap-[16px] absolute top-0 left-[107px]">
                    <img
                      className="relative w-px h-[277px] mb-[-0.50px] mr-[-0.50px] -rotate-180 object-cover"
                      alt="Vector"
                      src="https://c.animaapp.com/pKgdbKN7/img/vector-647-11.svg"
                    />
                    <div className="relative w-[50px] font-text-small-light font-[number:var(--text-small-light-font-weight)] text-color-palette-typography-dark-base-secondary-gray-2 text-[length:var(--text-small-light-font-size)] tracking-[var(--text-small-light-letter-spacing)] leading-[var(--text-small-light-line-height)] [font-style:var(--text-small-light-font-style)]">
                      Feb
                    </div>
                  </div>
                  <div className="flex flex-col w-[56px] items-start gap-[16px] absolute top-0 left-[162px]">
                    <img
                      className="relative w-px h-[277px] mb-[-0.50px] mr-[-0.50px] -rotate-180 object-cover"
                      alt="Vector"
                      src="https://c.animaapp.com/pKgdbKN7/img/vector-647-12.svg"
                    />
                    <div className="relative w-[50px] font-text-small-light font-[number:var(--text-small-light-font-weight)] text-color-palette-typography-dark-base-secondary-gray-2 text-[length:var(--text-small-light-font-size)] tracking-[var(--text-small-light-letter-spacing)] leading-[var(--text-small-light-line-height)] [font-style:var(--text-small-light-font-style)]">
                      Mar
                    </div>
                  </div>
                  <div className="flex flex-col w-[56px] items-start gap-[16px] absolute top-0 left-[218px]">
                    <img
                      className="relative w-px h-[277px] mb-[-0.50px] mr-[-0.50px] -rotate-180 object-cover"
                      alt="Vector"
                      src="https://c.animaapp.com/pKgdbKN7/img/vector-647-11.svg"
                    />
                    <div className="relative w-[50px] font-text-small-light font-[number:var(--text-small-light-font-weight)] text-color-palette-typography-dark-base-secondary-gray-2 text-[length:var(--text-small-light-font-size)] tracking-[var(--text-small-light-letter-spacing)] leading-[var(--text-small-light-line-height)] [font-style:var(--text-small-light-font-style)]">
                      Apr
                    </div>
                  </div>
                  <div className="flex flex-col w-[56px] items-start gap-[16px] absolute top-0 left-[274px]">
                    <img
                      className="relative w-px h-[277px] mb-[-0.50px] mr-[-0.50px] -rotate-180 object-cover"
                      alt="Vector"
                      src="https://c.animaapp.com/pKgdbKN7/img/vector-647-12.svg"
                    />
                    <div className="relative w-[50px] font-[number:var(--text-small-light-font-weight)] text-color-palette-typography-dark-base-secondary-gray-2 text-[length:var(--text-small-light-font-size)] leading-[var(--text-small-light-line-height)] font-text-small-light tracking-[var(--text-small-light-letter-spacing)] [font-style:var(--text-small-light-font-style)]">
                      May
                    </div>
                  </div>
                  <div className="flex flex-col w-[56px] items-start gap-[16px] absolute top-0 left-[329px]">
                    <img
                      className="relative w-px h-[277px] mb-[-0.50px] mr-[-0.50px] -rotate-180 object-cover"
                      alt="Vector"
                      src="https://c.animaapp.com/pKgdbKN7/img/vector-647-11.svg"
                    />
                    <div className="relative w-[50px] font-text-small-light font-[number:var(--text-small-light-font-weight)] text-color-palette-typography-dark-base-secondary-gray-2 text-[length:var(--text-small-light-font-size)] tracking-[var(--text-small-light-letter-spacing)] leading-[var(--text-small-light-line-height)] [font-style:var(--text-small-light-font-style)]">
                      Jun
                    </div>
                  </div>
                  <div className="flex flex-col w-[56px] items-start gap-[16px] absolute top-0 left-[384px]">
                    <img
                      className="relative w-px h-[277px] mb-[-0.50px] mr-[-0.50px] -rotate-180 object-cover"
                      alt="Vector"
                      src="https://c.animaapp.com/pKgdbKN7/img/vector-647-12.svg"
                    />
                    <div className="relative w-[50px] font-text-small-light font-[number:var(--text-small-light-font-weight)] text-color-palette-typography-dark-base-secondary-gray-2 text-[length:var(--text-small-light-font-size)] tracking-[var(--text-small-light-letter-spacing)] leading-[var(--text-small-light-line-height)] [font-style:var(--text-small-light-font-style)]">
                      Jul
                    </div>
                  </div>
                  <div className="flex flex-col w-[56px] items-start gap-[16px] absolute top-0 left-[440px]">
                    <img
                      className="relative w-px h-[277px] mb-[-0.50px] mr-[-0.50px] -rotate-180 object-cover"
                      alt="Vector"
                      src="https://c.animaapp.com/pKgdbKN7/img/vector-647-11.svg"
                    />
                    <div className="relative w-[50px] font-text-small-light font-[number:var(--text-small-light-font-weight)] text-color-palette-typography-dark-base-secondary-gray-2 text-[length:var(--text-small-light-font-size)] tracking-[var(--text-small-light-letter-spacing)] leading-[var(--text-small-light-line-height)] [font-style:var(--text-small-light-font-style)]">
                      Aug
                    </div>
                  </div>
                  <div className="flex flex-col w-[56px] items-start gap-[16px] absolute top-0 left-[496px]">
                    <img
                      className="relative w-px h-[277px] mb-[-0.50px] mr-[-0.50px] -rotate-180 object-cover"
                      alt="Vector"
                      src="https://c.animaapp.com/pKgdbKN7/img/vector-647-12.svg"
                    />
                    <div className="relative w-[50px] font-text-small-light font-[number:var(--text-small-light-font-weight)] text-color-palette-typography-dark-base-secondary-gray-2 text-[length:var(--text-small-light-font-size)] tracking-[var(--text-small-light-letter-spacing)] leading-[var(--text-small-light-line-height)] [font-style:var(--text-small-light-font-style)]">
                      Sep
                    </div>
                  </div>
                  <div className="flex flex-col w-[56px] items-start gap-[16px] absolute top-0 left-[551px]">
                    <img
                      className="relative w-px h-[277px] mb-[-0.50px] mr-[-0.50px] -rotate-180 object-cover"
                      alt="Vector"
                      src="https://c.animaapp.com/pKgdbKN7/img/vector-647-11.svg"
                    />
                    <div className="relative w-[50px] font-text-small-light font-[number:var(--text-small-light-font-weight)] text-color-palette-typography-dark-base-secondary-gray-2 text-[length:var(--text-small-light-font-size)] tracking-[var(--text-small-light-letter-spacing)] leading-[var(--text-small-light-line-height)] [font-style:var(--text-small-light-font-style)]">
                      Oct
                    </div>
                  </div>
                  <div className="flex flex-col w-[56px] items-start gap-[16px] absolute top-0 left-[606px]">
                    <img
                      className="relative w-px h-[277px] mb-[-0.50px] mr-[-0.50px] -rotate-180 object-cover"
                      alt="Vector"
                      src="https://c.animaapp.com/pKgdbKN7/img/vector-647-12.svg"
                    />
                    <div className="relative w-[50px] font-text-small-light font-[number:var(--text-small-light-font-weight)] text-color-palette-typography-dark-base-secondary-gray-2 text-[length:var(--text-small-light-font-size)] tracking-[var(--text-small-light-letter-spacing)] leading-[var(--text-small-light-line-height)] [font-style:var(--text-small-light-font-style)]">
                      Nov
                    </div>
                  </div>
                  <div className="flex flex-col w-[56px] items-start gap-[16px] absolute top-0 left-[662px]">
                    <img
                      className="relative w-px h-[277px] mb-[-0.50px] mr-[-0.50px] -rotate-180 object-cover"
                      alt="Vector"
                      src="https://c.animaapp.com/pKgdbKN7/img/vector-647-11.svg"
                    />
                    <div className="relative w-[50px] font-text-small-light font-[number:var(--text-small-light-font-weight)] text-color-palette-typography-dark-base-secondary-gray-2 text-[length:var(--text-small-light-font-size)] tracking-[var(--text-small-light-letter-spacing)] leading-[var(--text-small-light-line-height)] [font-style:var(--text-small-light-font-style)]">
                      Dec
                    </div>
                  </div>
                  <img
                    className="absolute w-px h-[277px] top-[36px] left-0 -rotate-180 object-cover"
                    alt="Vector"
                    src="https://c.animaapp.com/pKgdbKN7/img/vector-647-12.svg"
                  />
                  <img
                    className="absolute w-[666px] h-[242px] top-[36px] left-0 -rotate-180"
                    alt="Data lines"
                    src="https://c.animaapp.com/pKgdbKN7/img/data-lines.png"
                  />
                  <div className="absolute w-[61px] h-[39px] top-[205px] left-[198px]">
                    <div className="absolute w-[11px] h-[11px] top-[30px] left-[21px] bg-color-palette-color-palette-dark-white rounded-[5.44px/5.5px] border-2 border-solid border-primarylighter" />
                    <div className="absolute w-[61px] h-[28px] top-0 left-0">
                      <div className="absolute w-[61px] h-[24px] top-0 left-0 bg-secondarydarker rounded-[5px]" />
                      <div className="absolute w-[44px] h-[24px] top-[4px] left-[9px]">
                        <div className="relative w-[42px] h-[24px]">
                          <div className="absolute top-0 left-0 font-text-tiny-normal font-[number:var(--text-tiny-normal-font-weight)] text-color-palette-color-palette-dark-white text-[length:var(--text-tiny-normal-font-size)] text-center tracking-[var(--text-tiny-normal-letter-spacing)] leading-[var(--text-tiny-normal-line-height)] whitespace-nowrap [font-style:var(--text-tiny-normal-font-style)]">
                            9 tasks
                          </div>
                          <img
                            className="absolute w-[17px] h-[9px] top-[14px] left-[13px]"
                            alt="Polygon"
                            src="https://c.animaapp.com/pKgdbKN7/img/polygon-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-[705px] items-center gap-[16px] absolute top-[359px] left-[24px]">
                  <div className="relative w-fit font-[number:var(--text-tiny-light-font-weight)] text-fgdisabled font-text-tiny-light text-[length:var(--text-tiny-light-font-size)] tracking-[var(--text-tiny-light-letter-spacing)] leading-[var(--text-tiny-light-line-height)] whitespace-nowrap [font-style:var(--text-tiny-light-font-style)]">
                    Weekly
                  </div>
                  <div className="relative w-fit font-[number:var(--text-tiny-light-font-weight)] text-fgdisabled font-text-tiny-light text-[length:var(--text-tiny-light-font-size)] tracking-[var(--text-tiny-light-letter-spacing)] leading-[var(--text-tiny-light-line-height)] whitespace-nowrap [font-style:var(--text-tiny-light-font-style)]">
                    Monthly
                  </div>
                  <div className="relative w-[78px] h-[26px]">
                    <div className="relative w-[76px] h-[26px] bg-bgdarksubtle rounded-[20px]">
                      <div className="absolute top-[4px] left-[19px] font-[number:var(--text-tiny-medium-font-weight)] text-fgon-accent font-text-tiny-medium text-[length:var(--text-tiny-medium-font-size)] tracking-[var(--text-tiny-medium-letter-spacing)] leading-[var(--text-tiny-medium-line-height)] whitespace-nowrap [font-style:var(--text-tiny-medium-font-style)]">
                        Yearly
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
