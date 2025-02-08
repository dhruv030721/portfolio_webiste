import React from 'react'
import Layout from '../components/Layout';
import { TracingBeamDemo } from '../components/TracingBeam';
import { Caveat } from 'next/font/google';

const caveat = Caveat({
    weight: '400',
    subsets: ['latin'],
})

const experience = () => {

    const content = [
        {
            title: "Kartavya Technology",
            description: (
                <>
                    <ul>
                        <li>Developed a B2B SaaS application using <strong>Flutter</strong> for the frontend and <strong>Node.js</strong> for the backend.</li>
                        <li>Deployed and maintained the backend on <strong>AWS EC2</strong> and managed media on the <strong>AWS S3</strong> bucket.</li>
                        <li>Built a <strong>CI/CD pipeline</strong> using <strong>Docker</strong> and <strong>GitHub Actions</strong> on an <strong>Amazon Linux EC2</strong> instance.</li>
                        <li>Integrated <strong>Redis</strong> and <strong>BullMQ</strong> for Notification Job Scheduling and Queuing.</li>
                    </ul>

                </>
            ),
            badge: "Software Developer Intern",
            image:
                "https://media.licdn.com/dms/image/v2/C4D0BAQFpzTTsclt6Pg/company-logo_200_200/company-logo_200_200/0/1675952101350?e=2147483647&v=beta&t=cA7RK_YQPC7B3eZePQQOCvSYp_bQwdzrN5OP-ER3S7A",
            height: 150,
            width: 150
        },
        {
            title: "Webito Infotech",
            description: (
                <>
                    <ul>
                        <li>I gained experience with Agile methodologies and Scrum practices. Acquired expertise in creating and managing production environments, <strong>MongoDB Aggregation Pipelines</strong>, and <strong>Socket.IO</strong>.</li>
                        <li>I have made sure to include both authentication and authorization features, especially for the admin module. Admins can smoothly handle tasks like adding or editing products, managing ingredient stock, and monitoring orders through a user-friendly dashboard.</li>
                        <li>The journey so far has given me hands-on experience with <strong>React</strong>, <strong>Express</strong>, <strong>Cloudinary</strong> (for handling images), and the <strong>Redux Toolkit</strong> for effective state management.</li>
                    </ul>
                </>
            ),
            badge: "Backend Developer Intern",
            image: "https://slideserve.com/photo/1889310.png",
            height: 150,
            width: 150
        },
        {
            title: "Oasis Infobyte",
            description: (
                <>
                    <ul>
                        <li>I gained experience with Agile methodologies and Scrum practices. Acquired expertise in creating and managing production environments, <strong>MongoDB Aggregation Pipelines</strong>, and <strong>Socket.IO</strong>.</li>
                        <li>I have made sure to include both authentication and authorization features, especially for the admin module. Admins can smoothly handle tasks like adding or editing products, managing ingredient stock, and monitoring orders through a user-friendly dashboard.</li>
                        <li>The journey so far has given me hands-on experience with <strong>React</strong>, <strong>Express</strong>, <strong>Cloudinary</strong> (for handling images), and the <strong>Redux Toolkit</strong> for effective state management.</li>
                    </ul>

                </>
            ),
            badge: "Web Developer Intern",
            image: "https://media.licdn.com/dms/image/v2/C4E0BAQHfk_O8amPovQ/company-logo_200_200/company-logo_200_200/0/1642532597684/oasis_infobyte_logo?e=2147483647&v=beta&t=I7DRu4nea9ivLzi4napdkXSwVC8_o4Or0KsVnWMqsWA",
            height: 150,
            width: 150
        },
    ];

    return (
        <Layout>
            <div className='p-10'>
            <h1 className={`text-6xl text-center mb-10 ${caveat.className}`}>Experience</h1>
                <TracingBeamDemo data={content} />
            </div>
        </Layout>
    );
}

export default experience;

