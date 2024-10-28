import React from 'react'
import { ThreeDCardDemo } from '../components/3DCard'
import Layout from '../components/Layout'
import slicemaster from "@/public/slicemaster.png"
import levelupfitness from "@/public/levelupyourfitness.png"
import wiattend from "@/public/wiattend.jpeg"
import erp from "@/public/erp.png"
import recruitmentradar from "@/public/recruitment_radar.png"
import { ProjectCard } from '../components/ProjectCard'
import python from "@/public/python.png"
import django from "@/public/django1.png"
import react from "@/public/react.png"
import next from "@/public/next.png"
import ts from "@/public/ts.png"
import postgre from "@/public/postgres.png"
import nodejs from "@/public/nodejs.png"
import flutter from "@/public/flutter.png"
import gemini from "@/public/gemini1.png"
import fastapi from "@/public/fastapi.png"
import puppeteer from "@/public/puppeteer-logo.png"
import mongodb from "@/public/mongodb.png"
import js from "@/public/javascript.png"
import opencv from "@/public/opencv.png"
import cloudinary from "@/public/cloudinary.png"
import selenium from "@/public/selenium.png"
import aws from "@/public/aws.png"
import prisma from "@/public/prisma.png"
import threejs from "@/public/threejs.png"
import bikesetu from "@/public/bikesetu.png"
import scholarscraper from "@/public/scholar_scraper.webp"
import qr_code_attendance_system from "@/public/qr_code_attendance_system.webp"

const page = () => {
    return (
        <Layout>
            <div className='grid lg:grid-cols-2 xl:grid-cols-2 gap-32 p-10 xl:p-20 lg:p-20 grid-cols-1'>
                <ProjectCard title="Bike Setu 🛵" description="I developed a web scraper that extracts student result data from the university site using Selenium automation. I also
integrated a Gemini model using LangChain and created a FastAPI for text recognition" image={bikesetu} images={[react, threejs, nodejs, postgre, python, fastapi, gemini]} />
                <ProjectCard title="Scholar Scraper 🎓" description="I developed a web scraper that extracts student result data from the university site using Selenium automation. I also
integrated a Gemini model using LangChain and created a FastAPI for text recognition" image={scholarscraper} images={[python, fastapi, gemini, selenium]} />
                <ProjectCard title="ERP for College Mangement 🏫" description="Developing an ERP system using the PERN stack with TypeScript. The system allows faculty to view their lecture
schedules in a calendar view, mark student attendance, and download attendance reports in PDF format.
• Creating a mobile app using Flutter, enabling students to view their attendance records" image={erp} images={[ts, react, postgre, nodejs, prisma]} />
                <ProjectCard title="WiAttend - An Attendance App 🛜" description="Developed a cross-platform application for colleges and universities, implementing a Smart WiFi-Based Attendance
System.
• The application incorporates three authentication layers, including device-native Face Recognition for enhanced
security also Wifi Authentication layer" image={wiattend} images={[flutter, python, django, mongodb, aws]} />
                <ProjectCard title="Recruitment Radar" description="I created a project to receive alerts when new companies post jobs on our Edunet Foundation job portal. I used
Puppeteer to scrape recruitment data and set up cron jobs to send email alerts for new postings." image={recruitmentradar} images={[ts, next, puppeteer]} />
                <ProjectCard title="Slice Master 🍕" description="It is a fitness app which helps you to track your daily fitness goal and guide you." image={slicemaster} images={[js, react, nodejs, mongodb, cloudinary]} />
                <ProjectCard title="Level up your fitnes 💪" description="It is a fitness app which helps you to track your daily fitness goal and guide you." image={levelupfitness} images={[js, react, nodejs, mongodb]} />
                <ProjectCard title="QR code Attendance System" description=" I created a college project for a Smart QR Code Attendance System, enabling students to mark their attendance simply by scanning
their individual QR codes.
• To develop this project, I utilized OpenCV for real-time QR code detection from the camera feed, coupled with Python for decoding,
and Node.js for the backend" images={[python, opencv, nodejs, mongodb]} image={qr_code_attendance_system}/>
            </div>
        </Layout>
    )
}

export default page;