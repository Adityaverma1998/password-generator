import Image from "next/image";
import React from "react";
import PasswordGerneratorBox from "@/components/password-gernerator-box";

export default function Home() {
 return (
    <>
        <div className="h-full w-full flex flex-col justify-center items-center gap-3">
            <h1 className={'text-3xl text-[#fff]'}>Password Generater</h1>
            <PasswordGerneratorBox/>
        </div>
        </>
        );
        }
