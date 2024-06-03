import React, { useEffect, useState } from 'react'
import { CiHeart, CiLocationOn, CiSearch } from 'react-icons/ci'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { IoPersonOutline } from 'react-icons/io5'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { RxCardStack } from 'react-icons/rx'
import { useTranslation } from 'react-i18next'
import "../../i18n"

const Navbar = () => {
    let { t, i18n } = useTranslation()
    let [lang, setLang] = useState("uz")

    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang])

    return (
        <header>
            <div className='navbar__header bg-[#dbd8d8] py-[8px]    '>
                <div className='kontainer flex items-center justify-between '>
                    <div className='flex items-center gap-2 '>
                        <CiLocationOn />
                        <p>{t("navbar-collection.locatoin")}</p>
                        <h5>{t("navbar-collection.punkt")}</h5>
                    </div>
                    <p className='text-[#919090]    '>
                        {t("navbar-collection.yetkazish")}
                    </p>
                    <div className='flex items-center gap-4'>
                        <h4>{t("navbar-collection.sotish")}</h4>
                        <h5>{t("navbar-collection.savollar")}</h5>
                        <h5>{t("navbar-collection.buyurtmalar")}</h5>
                        <select value={lang} onChange={e => setLang(e.target.value)} className='bg-transparent outline-none' name="" id="">
                            <option value="uz">O'zbekcha</option>
                            <option value="ru">Русский</option>
                        </select>
                    </div>


                </div>
            </div>
            <div className='kontainer '>
                <div className='flex items-center gap-5 py-4'>
                    <div className='w-[300px]'>
                        <img src="https://vectorseek.com/wp-content/uploads/2024/04/Uzum-Market-Logo-Vector.svg-.png" alt="" />
                    </div>
                    <div className='flex items-center gap-2 border rounded-md py-[6px] px-[15px] bg-[#eaeef0]  cursor-pointer hover:bg-slate-200  '>
                        <RxCardStack />
                        <p>{t("navbar.katalog")}</p>
                    </div>
                    <div className='serach__input flex items-center   border '>
                        <input className='outline-none py-1 px-4 w-[400px]' type="text" name="" id="" placeholder={t("navbar.searchPL")} />
                        <CiSearch className='border h-[35px] w-[100px] bg-[#e9e7e7] cursor-pointer ' size={22} />
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-1 cursor-pointer'>
                            <IoPersonOutline size={20} />
                            <p>{t("navbar.kirish")}</p>
                        </div>
                        <div className='flex items-center gap-1 cursor-pointer'>
                            <CiHeart size={22} />
                            <p>{t("navbar.saralangan")}</p>
                        </div>
                        <div className='flex items-center gap-1 cursor-pointer'>
                            <HiOutlineShoppingBag size={22} />
                            <p>{t("navbar.savat")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar