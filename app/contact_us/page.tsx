import React from 'react'
import Layout from '../components/Layout'
import SignupFormDemo from '@/components/example/signup-form-demo'
import { Caveat } from 'next/font/google'
import stoke_img from "@/public/white_line_stroke.png"
import Image from 'next/image'

const caveat = Caveat({
    weight: '400',
    subsets: ['latin'],
})

const page = () => {
    return (
        <Layout>
            <div className='h-screen flex flex-col justify-center items-center px-10 '>
            <div className={``}>
                <h1 className={`${caveat.className} text-6xl`}>Contact</h1>
                <Image src={stoke_img} alt='White Stroke' width={200} className='relative -top-10 rotate-6'/>
            </div>
                <SignupFormDemo />
            </div>
        </Layout>
    )
}

export default page
