import Link from 'next/link';

function Header() {
  return (
    <div className="flex row justify-between h-[70px]">
      <Link href="/application/checkout" className="ml-16 mt-[26px] text-xs leading-[19px] font-normal hover:scale-150">LOGO</Link>
      <div className="flex row justify-end">
        <div className="relative mt-1 mr-5 px-3 w-10 group hover:cursor-pointer hover:w-[280px] hover:bg-Success hover:rounded-full duration-150 ease-linear">
          <div>
            <span className="absolute pl-[6px] w-4 h-4 text-white text-[10px] top-5 right-0.5 rounded-full bg-Success group-hover:right-60 group-hover:bg-white group-hover:text-Success duration-75">1</span>
            <span className="mx-[23px]">
              <svg width="24" height="24" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.96318 17.2279C7.46309 17.1222 10.5093 17.1222 11.0092 17.2279C11.4366 17.3266 11.8987 17.5573 11.8987 18.0608C11.8738 18.5402 11.5926 18.9653 11.204 19.2352C10.7001 19.628 10.1088 19.8767 9.49057 19.9664C9.14868 20.0107 8.81276 20.0117 8.48279 19.9664C7.86362 19.8767 7.27227 19.628 6.76938 19.2342C6.37978 18.9653 6.09852 18.5402 6.07367 18.0608C6.07367 17.5573 6.53582 17.3266 6.96318 17.2279ZM9.04522 0C11.1254 0 13.2502 0.987019 14.5125 2.62466C15.3314 3.67916 15.7071 4.73265 15.7071 6.3703V6.79633C15.7071 8.05226 16.039 8.79253 16.7695 9.64559C17.3231 10.2741 17.5 11.0808 17.5 11.956C17.5 12.8302 17.2128 13.6601 16.6373 14.3339C15.884 15.1417 14.8215 15.6573 13.7372 15.747C12.1659 15.8809 10.5937 15.9937 9.0005 15.9937C7.40634 15.9937 5.83505 15.9263 4.26375 15.747C3.17846 15.6573 2.11602 15.1417 1.36367 14.3339C0.78822 13.6601 0.5 12.8302 0.5 11.956C0.5 11.0808 0.677901 10.2741 1.23049 9.64559C1.98384 8.79253 2.29392 8.05226 2.29392 6.79633V6.3703C2.29392 4.68834 2.71333 3.58852 3.577 2.51186C4.86106 0.941697 6.91935 0 8.95577 0H9.04522Z" fill="#BBC2D0"/>
              </svg>
            </span>
          </div>
          <div className="absolute invisible top-6 -left-20 group-hover:left-12 w-[250px] flex flex-row group-hover:visible duration-75 ease-linear">
            <span className="text-sm truncate text-black mr-2">Перейти в уведомления</span>
            <span className="relative -top-2.5 text-sm rounded-full pt-2 w-10 h-10 text-center text-BgRed bg-white">1</span>
          </div>
        </div>
        <a href="#" className="px-[66px] py-[19px] flex bg-Primary hover:bg-Success rounded-bl-thirty">
          <p className="text-xs leading-[19px] font-normal text-white mt-[6px]">Личный кабинет</p>
          <div className="ml-[12px]">
            <svg width="32" height="32" viewBox="0 0 18 20" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.00081 13.1739C13.5202 13.1739 17.3341 13.8789 17.3341 16.599C17.3341 19.32 13.4952 20 9.00081 20C4.48245 20 0.66748 19.295 0.66748 16.575C0.66748 13.8539 4.50642 13.1739 9.00081 13.1739ZM9.00081 0C12.0624 0 14.5154 2.35402 14.5154 5.29105C14.5154 8.22808 12.0624 10.5831 9.00081 10.5831C5.94029 10.5831 3.48625 8.22808 3.48625 5.29105C3.48625 2.35402 5.94029 0 9.00081 0Z" fill="#fff"/>
            </svg>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Header