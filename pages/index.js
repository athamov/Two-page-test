import { useEffect, useState } from "react";

import Image from "next/image"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

export default function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const a = await fetch('/api/api');
      const data = a.json()
      return data;
    };
    fetchData().then((response) => {setData(response);});
  },[]);

  useEffect(() => {
    console.log(data)
  },[data])

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
            <span className="text-Success">Оформить заказ</span></p>
          </div>

          <h2 className="mt-[30px] text-[22px] leading-[26px] text-Primary font-medium">Оформить заказ</h2>

          <form className="mt-5 w-full flex flex-row">
            <input type="text" className="w-[calc(100%-100px)] py-5 px-4 rounded-l-full" placeholder="Поиск по названию товара" />
            <button className="w-[100px] px-[38px] bg-Success rounded-r-full">
              <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.73876 0C15.1088 0 19.4768 4.368 19.4768 9.738C19.4768 12.2715 18.5045 14.5823 16.9134 16.3165L20.0442 19.4407C20.3372 19.7337 20.3382 20.2077 20.0452 20.5007C19.8992 20.6487 19.7062 20.7217 19.5142 20.7217C19.3232 20.7217 19.1312 20.6487 18.9842 20.5027L15.8156 17.343C14.1488 18.6778 12.0354 19.477 9.73876 19.477C4.36876 19.477 -0.000244141 15.108 -0.000244141 9.738C-0.000244141 4.368 4.36876 0 9.73876 0ZM9.73876 1.5C5.19576 1.5 1.49976 5.195 1.49976 9.738C1.49976 14.281 5.19576 17.977 9.73876 17.977C14.2808 17.977 17.9768 14.281 17.9768 9.738C17.9768 5.195 14.2808 1.5 9.73876 1.5Z" fill="white"/>
              </svg>
            </button>
          </form>

          <h3 className="mt-[30px] text-base">Все товары (121)</h3>

          <div className="grid grid-cols-5 gap-5 mt-5">
            {data && data.map((item)=>
              <div className="bg-white p-3 rounded-xl w-[192px]" key={item.id}>
                <div className="relative bg-BgColor p-3 w-[168px] h-[168px]">
                  <div className="absolute">
                    {item.swop && <div className="bg-Pink py-1 px-[10px] rounded-md ">
                      <svg width="12" height="10" className="relative top-1" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.36264 6.35999V7.16443C7.36264 7.41992 7.41366 7.63428 7.51437 7.80127C7.65329 8.03174 7.88131 8.16382 8.14022 8.16382C8.39389 8.16382 8.64596 8.04028 8.88937 7.79688L11.5463 5.13989C12.1297 4.55652 12.1297 3.6073 11.5463 3.02393L8.88937 0.366943C8.64596 0.123413 8.39389 0 8.14022 0C7.75314 0 7.36264 0.309082 7.36264 0.99939V1.72998C3.59042 1.95276 0.467625 4.84766 0.00351372 8.63782C-0.0224872 8.84949 0.097874 9.05212 0.296238 9.13062C0.35239 9.15283 0.410862 9.16357 0.468601 9.16357C0.614841 9.16357 0.756687 9.09509 0.847019 8.97168C2.09189 7.27075 4.09067 6.25525 6.19369 6.25525C6.58334 6.25525 6.97519 6.29041 7.36264 6.35999V6.35999Z" fill="#E83274"/>
                      </svg>
                        <svg width="12" height="10" className="relative" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.6954 0.868915C11.497 0.790302 11.2707 0.855732 11.1446 1.02797C9.89983 2.72878 7.90105 3.74429 5.79802 3.74429C5.40837 3.74429 5.01653 3.70913 4.62907 3.63955V2.83511C4.62907 2.1448 4.23845 1.83571 3.85149 1.83571C3.59782 1.83571 3.34575 1.95925 3.10222 2.20278L0.445236 4.85964C-0.138016 5.44302 -0.138016 6.39224 0.445358 6.97574L3.10222 9.6326C3.34575 9.87613 3.59782 9.99955 3.85149 9.99955C4.23845 9.99955 4.62907 9.69046 4.62907 9.00015V8.26956C8.40141 8.04678 11.5241 5.15188 11.9882 1.36184C12.0142 1.15004 11.8938 0.947407 11.6954 0.868915V0.868915Z" fill="#E83274"/>
                        </svg>
                    </div>}
                    { item.gift && <div className="bg-Purple py-3 px-[10px] mt-3 rounded-md">
                        <Image src='/gift.svg' width="16" height="16" alt="gift"/>
                      </div> }
                    { item.discount && <div className="bg-BgOrange py-3 px-[10px] mt-3 rounded-md">
                      <Image src='/discount.svg' width="16" height="16" alt="discount" />
                      </div>}
                    { item.isIPhone && <div className="bg-Green py-3 px-[10px] mt-3 rounded-md">
                        <Image src='/discountGreen.svg' width="16" height="16" alt="green discount"/>
                      </div>}
                  </div>
                <Image className="m-auto" src={ item.imageUrl } alt={ item.name } width={ item.width } height={ item.height }/>
              </div>
              <div className="mt-3">
                <h3 className="text-sm">{ item.name }</h3>
                <p className="mt-3 text-sm">{ item.price }</p>
                <div className="flex flex-row mt-3">
                  <p className="max-w-max text-sm bg-BgRed py-1 px-1.5 rounded-md text-white">{ item.sale_price }</p>
                  <span className="text-Gray bg-white ml-3 mt-1 text-sm">X{ item.amount }</span>
                </div>
              </div>
            </div>
            )}
        </div>

          <pagination className="flex flex-row justify-between mt-[30px]">
            <span className="w-[30px] h-[30px] hover:border-2">
              <svg width="12" height="20" viewBox="0 0 12 20" className="m-auto mt-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0379 19.4129C11.3707 19.0801 11.401 18.5592 11.1287 18.1922L11.0379 18.0871L2.95125 10L11.0379 1.91291C11.3707 1.58008 11.401 1.05925 11.1287 0.692236L11.0379 0.587088C10.7051 0.254255 10.1842 0.223997 9.81724 0.496315L9.71209 0.587088L0.962088 9.33709C0.629254 9.66992 0.598997 10.1908 0.871315 10.5578L0.962088 10.6629L9.71209 19.4129C10.0782 19.779 10.6718 19.779 11.0379 19.4129Z" fill="#262728"/>
              </svg>
            </span>
            <ul className="flex flex-row justify-center">
              <li className="px-[13px] py-[5px] hover:bg-Blue hover:text-white rounded-[10px]">1</li>
              <li className="px-[13px] py-[5px] hover:bg-Blue hover:text-white rounded-[10px] bg-Success text-white">2</li>
              <li className="px-[13px] py-[5px] hover:bg-Blue hover:text-white rounded-[10px]">3</li>
              <li className="px-[13px] py-[5px] hover:bg-Blue hover:text-white rounded-[10px]">4</li>
              <li className="px-[13px] py-[5px] hover:bg-Blue hover:text-white rounded-[10px]">5</li>
              <li className="px-[13px] py-[5px] hover:bg-Blue hover:text-white rounded-[10px]"><input type="text" className="w-3 bg-BgColor" placeholder="..."/></li>
              <li className="px-[13px] py-[5px] hover:bg-Blue hover:text-white rounded-[10px]">10</li>
            </ul>
            <span className="w-[30px] h-[30px] hover:border-2">
              <svg width="12" height="20" viewBox="0 0 12 20" className="m-auto mt-1" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M0.962087 19.4129C0.629254 19.0801 0.598997 18.5592 0.871315 18.1922L0.962087 18.0871L9.04875 10L0.962087 1.91291C0.629254 1.58008 0.598997 1.05925 0.871315 0.692236L0.962087 0.587088C1.29492 0.254255 1.81575 0.223997 2.18276 0.496315L2.28791 0.587088L11.0379 9.33709C11.3707 9.66992 11.401 10.1908 11.1287 10.5578L11.0379 10.6629L2.28791 19.4129C1.9218 19.779 1.3282 19.779 0.962087 19.4129Z" fill="#262728"/>
              </svg>
            </span>
          </pagination>
        </div>
      </div>
    </>
  )
}
