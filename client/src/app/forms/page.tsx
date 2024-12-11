"use client";

import React from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import { Barlow } from "next/font/google";
import ArrowBack from "../../assets/arrowback.svg"
import Image from "next/image"

const barlow400 = Barlow({
    subsets: ["latin"],
    weight: "400",
  });


  const barlow700 = Barlow({
    subsets: ["latin"],
    weight: "700",
  });

  

type FormData = 
{
    game: string
    contactPlatform: string
    date: string
    hour: string
    maxParticipants: number
    link: string
    description: string
    
}

export default function App(){

    const { register, handleSubmit} = useForm<FormData>()

    const printData: SubmitHandler<FormData> = (data) =>
    {
        console.log(data);
    }

    return (
        <body className = "bg-[#EBEDF3]">
            <form onSubmit={handleSubmit(printData)}>
                <div id="main-container" className = "w-[1024px] ml-[344px] mt-[92px]">
                    <div id="match-create-container" className={`${barlow700.className} text-[36px]`}>
                        <div id="create-match-text" className = "flex">
                            <a className = "mt-[18px]" href = "https://youtube.com">
                                <Image src = {ArrowBack} alt = "arrowback"></Image>
                            </a>
                            
                            <h1 className = "ml-[10px]">Criar partida</h1>
                        </div>
                    
                        <div id="forms-container" className = {`grid grid-cols-6 gap-y-4 gap-x-[56px] text-[16px] text-black mt-[48px]`}>
                            <div id="gamename-input" className="col-start-1 col-span-3">
                                <label htmlFor="game" className="block text-sm/6 font-medium text-gray-900">Nome do jogo</label>
                                <input {...register('game')} id="game" placeholder="Jogo" className = {`${barlow400.className} block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 `}/>
                            </div>

                            <div id="contactplatform-input" className="col-start-4 col-span-3">
                                <label htmlFor="contactPlatform" className="block text-sm/6 font-medium text-gray-900">Plataforma de reunião da partida</label>
                                <input {...register('contactPlatform')} id="contactPlatform" placeholder="Plataforma" className = {`${barlow400.className} block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 `}/>
                            </div>

                            <div id="date-input" className = "col-start-1 col-span-2">
                                <label htmlFor="date" className="block text-sm/6 font-medium text-gray-900">Data da partida</label>
                                <input {...register('date')} id="date" placeholder="00/00/0000" className = {`${barlow400.className} block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 `} />
                            </div>

                            <div id="hour-input" className = "col-start-3 col-span-2">
                                <label htmlFor="hour" className="block text-sm/6 font-medium text-gray-900">Horário da partida</label>
                                <input {...register('hour')} id="hour" placeholder="00:00" className = {`${barlow400.className} block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 `}/>
                            </div>

                            <div id="maxparticipants-input" className = "col-start-5 col-span-2">
                                <label htmlFor="maxParticipants" className="block text-sm/6 font-medium text-gray-900">Quantidade de pessoas na partida</label>
                                <input {...register('maxParticipants')} id="maxParticipants" placeholder="Número de participantes" type="number" className = {`${barlow400.className} block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 `} />
                            </div>

                            <div id="link-input" className = "col-start-1 col-span-6">
                                <label htmlFor="link" className="block text-sm/6 font-medium text-gray-900">Link da partida</label>
                                <input {...register('link')} id="link" placeholder="Link da partida" className = {`${barlow400.className} block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 `} />
                            </div>

                            <div id="description-input" className="cold-start-1 col-span-6">
                                <label htmlFor="description" className = "block text-sm/6 font-medium text-gray-900">Descrição da partida</label>
                                <textarea {...register('description')} id="description" placeholder="Descrição" rows = {3} className = {`${barlow400.className} block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 `} />
                            </div>

                            <button type="submit" className = "bg-[#51E678] text-white rounded-md w-[320px] h-[48px] text-[20px] mt-[292px] ml-[728px]">Criar partida</button>
                        </div>
                    </div>
                </div>
            </form>
        </body>

        
    )
}