import React from 'react'
import Layout from '../components/Layout';
import { TracingBeamDemo } from '../components/TracingBeam';

const experience = () => {

    const content = [
        {
            title: "Kartavya Technology",
            description: (
                <>
                    <p>
                        Sit duis est minim proident non nisi velit non consectetur. Esse
                        adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
                        Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
                        incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
                        fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
                        nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
                        occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
                        officia sint labore. Tempor consectetur excepteur ut fugiat veniam
                        commodo et labore dolore commodo pariatur.
                    </p>
                    <p>
                        Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
                        veniam in commodo id reprehenderit adipisicing. Proident duis
                        exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
                    </p>
                    <p>
                        Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
                        reprehenderit deserunt amet laborum consequat adipisicing officia qui
                        irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
                        Amet culpa officia aliquip deserunt veniam deserunt officia
                        adipisicing aliquip proident officia sunt.
                    </p>
                </>
            ),
            badge: "Backend Developer Intern",
            image:
                "https://media.licdn.com/dms/image/v2/C4D0BAQFpzTTsclt6Pg/company-logo_200_200/company-logo_200_200/0/1675952101350?e=2147483647&v=beta&t=cA7RK_YQPC7B3eZePQQOCvSYp_bQwdzrN5OP-ER3S7A",
            height: 150,
            width: 150
        },
        {
            title: "Webito Infotech",
            description: (
                <>
                    <p>
                        Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
                        deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
                        non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
                        sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
                        velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
                        commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
                    </p>
                    <p>
                        In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
                        veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
                        reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
                        cillum ut mollit.
                    </p>
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
                    <p>
                        Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
                        deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
                        non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
                        sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
                        velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
                        commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
                    </p>
                    <p>
                        In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
                        veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
                        reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
                        cillum ut mollit.
                    </p>
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
            <div className='p-20'>
                <TracingBeamDemo data={content} />
            </div>
        </Layout>
    );
}

export default experience;

