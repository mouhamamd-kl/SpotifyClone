"use client";
interface SidebarProps{
    children:React.ReactNode;
}
import {usePathname}from "next/navigation";
import { useMemo } from "react";
import {HiHome} from "react-icons/hi";
import {BiSearch} from "react-icons/bi";
const Sidebar:React.FC<SidebarProps>=({
    children
})=>{
    const pathName=usePathname();
    const routes=useMemo(()=>
    [
        {
            icon:HiHome,
            label:'Home',
            active:pathName!=="/search",
            href:'/'
        }
        ,
        {
            icon:BiSearch,
            label:'Search',
            active:pathName=='/search',
            href:'/search'
        }
    ]
    ,
    [pathName]);
    return (
        <div className="flex h-full">

        <div
        className="
        hiddent md:flex
        flex-col
        gap-y-2
        bg-black
        h-full
        w-[300]
        p-2">
            <Box>
                Side bar navigation
            </Box>
        </div>
        </div>
    );
}
export default Sidebar;