"use client";
interface SidebarProps{
    children:React.ReactNode;
}
import {usePathname}from "next/navigation";
import { useMemo } from "react";
const Sidebar:React.FC<SidebarProps>=({
    children
})=>{
    const pathName=usePathname();
    const routes=useMemo(()=>
    [
        {
            label:'Home',
            active:pathName!=="/search",
            href:'/'
        }
        ,
        {
            label:'Search',
            active:pathName=='/search',
            href:'/search'
        }
    ]
    ,
    [pathName]);
    return (
        <div>
        {children}
        </div>
    );
}
export default Sidebar;