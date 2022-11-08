import {useEffect, useState} from 'react'

import Image from 'next/image'
import Sidebar from "../../../../components/Sidebar"
import Header from "../../../../components/Header"

function Card() {
  const [ month, setMonth ] = useState();
  const [ amount, setAmount ] = useState("");

  useEffect(() => {
    if(month) {
      setAmount("")
      let amountNumber = Math.floor(7300000 / month);
      while(amountNumber/1000>0) {
        let slice = amountNumber%1000;
        setAmount(prev=>`${slice} ${prev}`);
        amountNumber=Math.floor(amountNumber/1000);
      }
    }
  },[month])

  const handleMonth = (e) => {
    // console.log(e)
    setMonth(e);
  }

  return (
    <>
      <Header />
      <div className="min-h-screen flex">
        <Sidebar />
        <div className="flex flex-col m-5 bg-BgColor w-[calc(100%-263px)] px-7">
          <div className="mt-5 text-xs text-Gray">
            <p className="flex">Заявки
              <svg className="mt-0.5" width="12" height="12" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.984835 7.76517C0.851702 7.63203 0.839599 7.4237 0.948526 7.27689L0.984835 7.23483L4.2195 4L0.984835 0.765165C0.851702 0.632031 0.839599 0.4237 0.948526 0.276894L0.984835 0.234835C1.11797 0.101702 1.3263 0.0895987 1.47311 0.198526L1.51517 0.234835L5.01516 3.73484C5.1483 3.86797 5.1604 4.0763 5.05147 4.22311L5.01516 4.26517L1.51517 7.76517C1.36872 7.91161 1.13128 7.91161 0.984835 7.76517Z" fill="#BBC2D0"/>
              </svg>
              Оформить заказ
              <svg className="mt-0.5" width="12" height="12" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.984835 7.76517C0.851702 7.63203 0.839599 7.4237 0.948526 7.27689L0.984835 7.23483L4.2195 4L0.984835 0.765165C0.851702 0.632031 0.839599 0.4237 0.948526 0.276894L0.984835 0.234835C1.11797 0.101702 1.3263 0.0895987 1.47311 0.198526L1.51517 0.234835L5.01516 3.73484C5.1483 3.86797 5.1604 4.0763 5.05147 4.22311L5.01516 4.26517L1.51517 7.76517C1.36872 7.91161 1.13128 7.91161 0.984835 7.76517Z" fill="#BBC2D0"/>
              </svg>
              <span className="text-Success">Смартфон Apple iPhone 11 128 Gb Slim Box черный</span></p>
 
              <div className="mt-[30px] px-[30px] bg-white">
              <div className="relative left-[calc(100%-46px)] -top-5 rounded-full bg-BgRed w-[60px] h-[60px] hover:w-[237px] hover:left-[calc(100%-250px)] translate-x-1 transparent group duration-150 ease-in-out cursor-pointer">
                <Image src="/basket.svg" width="20" height="20" alt="base" className="relative top-5 left-5" />
                <div className="relative invisible -left-10 group-hover:w-[200px] group-hover:left-12 group-hover:flex flex-row group-hover:visible 
              hover:duration-150">
                  <span className="text-sm text-black mr-2">Перейти в корзину</span>
                  <span className="relative -top-2.5 text-sm rounded-full pt-2 w-10 h-10 text-center text-BgRed bg-white">1</span>
                </div>
              </div>
              <h1 className="relative -top-5 text-Blue text-xl">
                Смартфон Apple iPhone 11 128 Gb Slim Box черный
              </h1>

              <div className="flex flex-row">
                <div className="relative bg-BgColor p-3 w-[480px] h-[380px] rounded-2xl">
                  <div className="absolute">
                    <div className="bg-Pink py-1 px-[10px] rounded-md ">
                      <svg width="12" height="10" className="relative top-1" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.36264 6.35999V7.16443C7.36264 7.41992 7.41366 7.63428 7.51437 7.80127C7.65329 8.03174 7.88131 8.16382 8.14022 8.16382C8.39389 8.16382 8.64596 8.04028 8.88937 7.79688L11.5463 5.13989C12.1297 4.55652 12.1297 3.6073 11.5463 3.02393L8.88937 0.366943C8.64596 0.123413 8.39389 0 8.14022 0C7.75314 0 7.36264 0.309082 7.36264 0.99939V1.72998C3.59042 1.95276 0.467625 4.84766 0.00351372 8.63782C-0.0224872 8.84949 0.097874 9.05212 0.296238 9.13062C0.35239 9.15283 0.410862 9.16357 0.468601 9.16357C0.614841 9.16357 0.756687 9.09509 0.847019 8.97168C2.09189 7.27075 4.09067 6.25525 6.19369 6.25525C6.58334 6.25525 6.97519 6.29041 7.36264 6.35999V6.35999Z" fill="#E83274"/>
                      </svg>
                      <svg width="12" height="10" className="relative" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6954 0.868915C11.497 0.790302 11.2707 0.855732 11.1446 1.02797C9.89983 2.72878 7.90105 3.74429 5.79802 3.74429C5.40837 3.74429 5.01653 3.70913 4.62907 3.63955V2.83511C4.62907 2.1448 4.23845 1.83571 3.85149 1.83571C3.59782 1.83571 3.34575 1.95925 3.10222 2.20278L0.445236 4.85964C-0.138016 5.44302 -0.138016 6.39224 0.445358 6.97574L3.10222 9.6326C3.34575 9.87613 3.59782 9.99955 3.85149 9.99955C4.23845 9.99955 4.62907 9.69046 4.62907 9.00015V8.26956C8.40141 8.04678 11.5241 5.15188 11.9882 1.36184C12.0142 1.15004 11.8938 0.947407 11.6954 0.868915V0.868915Z" fill="#E83274"/>
                      </svg>
                    </div>
                    <div className="bg-Purple py-3 px-[10px] mt-3 rounded-md">
                      <Image src='/gift.svg' width="16" height="16" alt="gift"/>
                    </div>
                    <div className="bg-BgOrange py-3 px-[10px] mt-3 rounded-md">
                      <Image src='/discount.svg' width="16" height="16" alt="discount" />
                    </div>
                    <div className="bg-Green py-3 px-[10px] mt-3 rounded-md">
                      <Image src='/discountGreen.svg' width="16" height="16" alt="green discount"/>
                    </div>
                  </div>
                  <Image className="relative top-[54px] left-[104px]" src='/2.jpg' alt="iphone" width="200" height="270"/>
                  <div className="relative top-[73px] left-[187px] w-[66px] flex flex-row gap-1.5 hover:border-2">
                    <span className="w-1.5 h-1.5 bg-Blue cursor-pointer rounded-full"></span>
                    <span className="w-1.5 h-1.5 bg-Gray cursor-pointer rounded-full"></span>
                    <span className="w-1.5 h-1.5 bg-Gray cursor-pointer rounded-full"></span>
                    <span className="w-1.5 h-1.5 bg-Gray cursor-pointer rounded-full"></span>
                    <span className="w-1.5 h-1.5 bg-Gray cursor-pointer rounded-full"></span>
                    <span className="w-1.5 h-1.5 bg-Gray cursor-pointer rounded-full"></span>
                  </div>
                </div>
                <div className="ml-5 flex flex-col">
                  <div>
                    <p className="text-sm text-Gray font-normal">Цена телефона</p>
                    <p className="text-sm text-black font-semibold">6 000 000 сум</p>
                  </div>
                  <div className="mt-10">
                    <div className="flex flex-row justify-between">
                      <div>
                        <p className="text-sm text-Gray font-normal">Общая цена (с наценкой)</p>
                        <p className="text-sm text-black font-semibold">7 300 000 сум</p>
                      </div>
                      {month && <div className="flex flex-row mt-3">
                        <p className="max-w-max text-sm bg-BgRed py-1 px-1.5 rounded-md text-white">{amount} сум</p>
                        <span className="text-Gray bg-white ml-3 mt-1 text-sm">x{month}</span>
                      </div>}
                    </div>
                    <div className="inline-flex rounded-md shadow-sm mt-7" role="group">
                      <button type="button" className="w-[120px] h-[38px] text-sm font-medium text-Success bg-transparent rounded-l-lg border border-Success hover:bg-Success hover:text-white focus:z-10 focus:ring-2 focus:ring-Success focus:bg-Success focus:text-white" onClick={()=>handleMonth(3)}>
                        3 мес
                      </button>
                      <button type="button" className="w-[120px] h-[38px] text-sm font-medium text-Success bg-transparent border border-Success hover:bg-Success hover:text-white focus:z-10 focus:ring-2 focus:ring-Success focus:bg-Success focus:text-white" onClick={()=>handleMonth(6)}>
                        6 мес
                      </button>
                      <button type="button" className="w-[120px] h-[38px] text-sm font-medium text-Success bg-transparent border border-Success hover:bg-Success hover:text-white focus:z-10 focus:ring-2 focus:ring-Success focus:bg-Success focus:text-white" onClick={()=>handleMonth(9)}>
                        9 мес
                      </button>
                      <button type="button" className="w-[120px] h-[38px] text-sm font-medium text-Success bg-transparent rounded-r-md border border-Success hover:bg-Success hover:text-white focus:z-10 focus:ring-2 focus:ring-Success focus:bg-Success focus:text-white" onClick={()=>handleMonth(12)}>
                        12 мес
                      </button>
                    </div>
                    <p className="text-center text-base font-normal text-black">Наценка: <span className="font-semibold">5%</span></p>
                  </div>

                  <div className="mt-5">
                    <p className="text-base">Общие характеристики</p>
                    <p className="w-[270px] text-black text-base">Тип: моноблок (классический) Стандарт: 2G, 3G, 4G (LTE), 5G Операционная система: iOS 14</p>
                    <div className="mt-5">
                      <a href="#" className="text-semibold text-Success">Показать все</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <form className="mt-[30px] flex flex-col" forhtml="sales">
                <p className="text-Gray">Акции</p>
                <div className="mt-5 flex flex-row">
                    <div className="flex-none mb-2 py-1.5 px-2.5 rounded-md bg-Pink">
                      <svg width="12" height="10" className="relative top-0.5" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.36264 6.35999V7.16443C7.36264 7.41992 7.41366 7.63428 7.51437 7.80127C7.65329 8.03174 7.88131 8.16382 8.14022 8.16382C8.39389 8.16382 8.64596 8.04028 8.88937 7.79688L11.5463 5.13989C12.1297 4.55652 12.1297 3.6073 11.5463 3.02393L8.88937 0.366943C8.64596 0.123413 8.39389 0 8.14022 0C7.75314 0 7.36264 0.309082 7.36264 0.99939V1.72998C3.59042 1.95276 0.467625 4.84766 0.00351372 8.63782C-0.0224872 8.84949 0.097874 9.05212 0.296238 9.13062C0.35239 9.15283 0.410862 9.16357 0.468601 9.16357C0.614841 9.16357 0.756687 9.09509 0.847019 8.97168C2.09189 7.27075 4.09067 6.25525 6.19369 6.25525C6.58334 6.25525 6.97519 6.29041 7.36264 6.35999V6.35999Z" fill="#E83274"/>
                      </svg>
                      <svg width="12" height="10" className="relative bottom-0.5" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6954 0.868915C11.497 0.790302 11.2707 0.855732 11.1446 1.02797C9.89983 2.72878 7.90105 3.74429 5.79802 3.74429C5.40837 3.74429 5.01653 3.70913 4.62907 3.63955V2.83511C4.62907 2.1448 4.23845 1.83571 3.85149 1.83571C3.59782 1.83571 3.34575 1.95925 3.10222 2.20278L0.445236 4.85964C-0.138016 5.44302 -0.138016 6.39224 0.445358 6.97574L3.10222 9.6326C3.34575 9.87613 3.59782 9.99955 3.85149 9.99955C4.23845 9.99955 4.62907 9.69046 4.62907 9.00015V8.26956C8.40141 8.04678 11.5241 5.15188 11.9882 1.36184C12.0142 1.15004 11.8938 0.947407 11.6954 0.868915V0.868915Z" fill="#E83274"/>
                      </svg>
                    </div>
                    <div className="flex-1 ml-4">
                      <h3 className="text-black text-sm font-normal">Обменяй свой старый айфон и получи скидку на новый</h3>
                      <p className="text-Gray text-sm font-normal">- 400 000 сум</p>
                    </div>
                  <div className="flex-none">
                    <input type="checkbox" className="w-6 h-6" />
                  </div>
                </div>
                <div className="mt-5 pt-5 flex flex-row border-t">
                    <div className="flex-none mb-2 py-1.5 px-2.5 rounded-md bg-Purple">
                      <Image src='/gift.svg' alt="gift" width="16" height="16" />
                    </div>
                    <div className="flex-1 ml-4">
                      <h3 className="text-black text-sm font-normal">Наушники в подарок</h3>
                      <p className="text-Gray text-sm font-normal">Apple EarPods</p>
                    </div>
                  <div className="flex-none">
                    <input type="checkbox" className="w-6 h-6" defaultChecked />
                  </div>
                </div>
                <div className="mt-5 pt-5 flex flex-row border-t">
                    <div className="flex-none mb-2 py-1.5 px-2.5 rounded-md bg-BgOrange">
                      <Image src='/discount.svg' alt="gift" width="16" height="16" />
                    </div>
                    <div className="flex-1 ml-4">
                      <h3 className="text-black text-sm font-normal">Скидка 20% на смартфоны</h3>
                      <p className="text-Gray text-sm font-normal">- 10 000 сум</p>
                    </div>
                  <div className="flex-none">
                    <input type="checkbox" className="w-6 h-6" defaultChecked />
                  </div>
                </div>
                <div className="mt-5 pt-5 flex flex-row border-t">
                    <div className="flex-none mb-2 py-1.5 px-2.5 rounded-md bg-Green">
                      <Image src='/discountGreen.svg' alt="gift" width="16" height="16" />
                    </div>
                    <div className="flex-1 ml-4">
                      <h3 className="text-black text-sm font-normal">Скидка на айфоны</h3>
                      <p className="text-Gray text-sm font-normal">- 10 000 сум</p>
                    </div>
                  <div className="flex-none">
                    <input type="checkbox" className="w-6 h-6" defaultChecked />
                  </div>
                </div>
              </form>

              <div className="mt-[30px] w-full">
                <button className="w-full text-center py-4 bg-Success hover:bg-Blue text-white rounded-full">Добавить в корзину</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card