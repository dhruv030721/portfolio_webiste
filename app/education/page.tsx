import React from 'react'
import Layout from '../components/Layout';
import { TracingBeamDemo } from '../components/TracingBeam';

const education = () => {

    const content = [
        {
            title: "Gujarat Technological University",
            description: (
                <>
                    <span className='font-bold text-lg'>
                        Sardar Patel College of Engineering, affiliated with Gujarat Technological University (GTU)
                    </span>
                    <p>
                        I pursued my Bachelor of Engineering in Computer Engineering at Sardar Patel College of Engineering, a reputed institution under Gujarat Technological University (GTU). During the course of my studies from 2021 to 2025, I developed a strong foundation in programming, algorithms, software development, and emerging technologies like machine learning and web development. The program provided me with a blend of theoretical knowledge and practical experience through hands-on projects, internships, and industry-relevant workshops.
                    </p>
                    <p>
                        Throughout these four years, I enhanced my problem-solving skills, collaborated on team projects, and stayed updated with the latest trends in technology. This experience has not only shaped my technical competencies but also instilled in me a passion for continuous learning and innovation in the field of computer science.
                    </p>
                </>
            ),
            badge: "B.Tech - Computer Engineering",
            image:
                "https://www.hbpateldiploma.org/image/gtu.png",
            height: 200,
            width: 200
        },
        {
            title: "Tapovan Science Academy",
            description: (
                <>
                    <span className='font-bold text-lg'>Tapovan Science Academy | Gujarat Secondary and Higher Secondary Education Board (GSEB)</span>
                    <p>
                        I completed my higher secondary education in the Science stream with Mathematics from Tapovan Science Academy. During this period, I developed a strong interest in problem-solving, logical thinking, and analytical skills, which laid the foundation for my journey into engineering.
                    </p>
                    <p>
                        Alongside my academic curriculum, I prepared for competitive exams such as JEE (Joint Entrance Examination) and GUJCET (Gujarat Common Entrance Test). My efforts in these exams resulted in securing a rank of 5919 through ACPC (Admission Committee for Professional Courses), enabling me to pursue Computer Engineering at a reputed institution.
                    </p>
                    <p>This phase of my education honed my discipline, work ethic, and time management skills, providing me with the tools to excel in both academics and competitive exams.</p>
                </>
            ),
            badge: "HSC - Science Stream (Mathematics)",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnTiX6TCu7QdL6VqcPrZ_A8CrGiSOQqVtwHVA8BLGIFGdpsZLB9-om_c_jtpi8FEg-MnY&usqp=CAU",
            height: 200,
            width: 200
        },
    ];

    return (
        <Layout>
            <div className='p-10'>
                <TracingBeamDemo data={content} />
            </div>
        </Layout>
    );
}

export default education;

