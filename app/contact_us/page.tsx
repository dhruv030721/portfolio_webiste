import React from 'react'
import Layout from '../components/Layout'
import SignupFormDemo from '@/components/example/signup-form-demo'

const page = () => {
    return (
        <Layout>
            <div className='h-screen flex justify-center items-center '>
                <SignupFormDemo />
            </div>
        </Layout>
    )
}

export default page
