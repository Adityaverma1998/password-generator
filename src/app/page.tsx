import Image from "next/image";
import React from "react";
import PasswordGerneratorBox from "@/components/password-gernerator-box";

export default function Home() {
 return (
    <>
        <div className="h-full w-full flex justify-center items-center">
            <PasswordGerneratorBox/>
        </div>
        </>
        );
        }
