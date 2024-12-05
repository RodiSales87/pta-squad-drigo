"use client";

import React from "react";
import {useForm, SubmitHandler} from "react-hook-form";

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
        <div>
            <form onSubmit={handleSubmit(printData)}>

            <input {...register('game')}></input>
            <input {...register('contactPlatform')}></input>
            <input {...register('date')}></input>
            <input {...register('hour')}></input>
            <input {...register('maxParticipants')}></input>
            <input {...register('link')}></input>
            <input {...register('description')}></input>

            <button type = 'submit'>Criar partida</button>
            </form>

        </div>
        
    )
}