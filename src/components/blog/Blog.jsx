import React, { useState } from 'react';
import Modal from 'react-modal';

import Nav from './BlogNav';
import ModalContent from './modal/ModalContent';

Modal.setAppElement('#root');

const Blog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    // const [isOpen5, setIsOpen5] = useState(false);
    // const [isOpen6, setIsOpen6] = useState(false);

    function toggleModalOne() {
        setIsOpen(!isOpen);
    }
    function toggleModalTwo() {
        setIsOpen2(!isOpen2);
    }
    function toggleModalThree() {
        setIsOpen3(!isOpen3);
    }
    function toggleModalFour() {
    	setIsOpen4(!isOpen4);
    }
    // function toggleModalFive() {
    // 	setIsOpen5(!isOpen5);
    // }
    // function toggleModalSix() {
    // 	setIsOpen6(!isOpen6);
    // }

    const blogData = [
        {
            id: 1,
            image: 'img/blog/stlConverter/stl_converter.svg',
            name: 'STL to CSV Converter',
            desc: 'Convert a 3D .stl into a .csv as a list of xyz points using a graphical user interface',
            open: isOpen,
            toggle: toggleModalOne,
            category: 'Computer Science',
            author: 'Sawyer Paccione',
            date: 'Summer 2021',
            tags: 'STL, CSV, Computer Science',
            file: 'stl-to-csv-converter.md',
            slidePath: '',
			slides: [''],
            video: 'https://www.youtube.com/embed/O8TiVJCqcdQ',
            github: 'https://github.com/paccionesawyer/stl-to-csv-converter',
            license: 'GNU GPLv3'
        },
        {
            id: 2,
            image: 'img/blog/drawingArm/robotArm.png',
            name: 'Drawing Robot Arm',
            desc: 'Each group must build a robotic arm that writes your initials on something.',
            open: isOpen2,
            toggle: toggleModalTwo,
            category: 'Robotics',
            author: 'Sawyer Paccione, Rebecca Shen, Matt Toven',
            date: 'Fall 2021',
            tags: 'Robotics, ME134, Denavit-Hartenberg, 3D Printing, LaserCut, Raspberry Pi',
            file: '3-axis-robot.md',
            slidePath: '/img/blog/drawingArm/',
			slides: ['ME134_HW3_Group3_Presentation-1.jpg', 'ME134_HW3_Group3_Presentation-2.jpg', 'ME134_HW3_Group3_Presentation-3.jpg', 'ME134_HW3_Group3_Presentation-4.jpg', 'ME134_HW3_Group3_Presentation-5.jpg', 'ME134_HW3_Group3_Presentation-6.jpg', 'ME134_HW3_Group3_Presentation-7.jpg'],
            video: 'https://www.youtube.com/embed/DEUlKgTPG_8',
            github: 'https://github.com/paccionesawyer/3Axis-DrawingRobot',
            license: 'GNU GPLv3'
        },
        {
            id: 3,
            image: 'img/blog/webCar/PI_CAR_Labelled.jpg',
            name: 'Web Controlled Car',
            desc: 'A car built to run via a user-interface built into a web server',
            open: isOpen3,
            toggle: toggleModalThree,
            category: 'Robotics',
            author: 'Sawyer Paccione',
            date: 'Spring 2021',
            tags: 'Robotics, ME35, HTTP, Raspberry Pi',
            file: 'web-pi-car.md',
            slidePath: '/img/blog/webCar/',
			slides: ['PI_CAR_LABELLED.jpg'],
            video: 'https://www.youtube.com/embed/HMzt1AFN9BQ',
            github: 'https://github.com/paccionesawyer/web-pi-car',
            license: 'GNU GPLv3'
        },
		{
			id: 4,
			image: 'img/blog/barrelClock/barrelClockCover43.png',
			name: 'Barrel Clock',
			desc: 'Each group must build an analog clock that tells the time. Our CAD design is three “Barrels” one for hours, one for minutes and another for seconds.',
			open: isOpen4,
			toggle: toggleModalFour,
			category: 'Robotics',
			author: 'Sawyer Paccione, James Staley, Ilan Felberg',
			date: 'Fall 2021',
			tags: 'ME134, Robotics, Raspberry Pi, Servo Motor, 3D Printing, Lasercut',
			file: 'barrelClock.md',
            slidePath: '/img/blog/barrelClock/',
			slides: ['Group7 - Barrel Clock - ME134-1.jpg', 'Group7 - Barrel Clock - ME134-2.jpg', 'Group7 - Barrel Clock - ME134-3.jpg', 'Group7 - Barrel Clock - ME134-4.jpg', 'Group7 - Barrel Clock - ME134-5.jpg'],
            video: 'https://www.youtube.com/embed/XxoPbqSJhxU',
            github: 'https://github.com/paccionesawyer/Analog-Clock',
            license: 'GNU GPLv3'
		},
    ];
    const [filter, setFilter] = useState('All');
    function filterTags(val) {
        setFilter(val);
    }

    // const file_name = 'stl-to-csv-converter.md';
    // const [post, setPost] = useState('');

    // useEffect(() => {
    //     import(`./modal/MarkdownFiles/${file_name}`)
    //         .then((res) => {
    //             fetch(res.default)
    //                 .then((res) => res.text())
    //                 .then((res) => setPost(res))
    //                 .catch((err) => console.log(err));
    //         })
    //         .catch((err) => console.log(err));
    // });

    return (
        <>
            <Nav filter={filter} setFilter={filterTags} />
            {blogData.map((blogData, index) =>
                filter === blogData.category || filter === 'All' ? (
                    <div
                        key={index}
                        className="col-12 col-md-6 col-lg-6 col-xl-4 mb-30"
                    >
                        <article
                            className="post-container"
                            onClick={blogData.toggle}
                        >
                            <div className="post-thumb">
                                <div className="d-block position-relative overflow-hidden">
                                    <img
                                        src={blogData.image}
                                        className="img-fluid"
                                        alt="Blog Post"
                                    />
                                </div>
                            </div>
                            <div className="post-content">
                                <div className="entry-header">
                                    <h3>{blogData.name}</h3>
                                </div>
                                <div className="entry-content open-sans-font">
                                    <p>{blogData.desc}</p>
                                </div>
                            </div>
                        </article>
                        <Modal
                            isOpen={blogData.open}
                            onRequestClose={blogData.toggle}
                            contentLabel="My dialog"
                            className="custom-modal dark"
                            overlayClassName="custom-overlay dark"
                            closeTimeoutMS={500}
                        >
                            <div>
                                <button
                                    className="close-modal"
                                    onClick={blogData.toggle}
                                >
                                    <img
                                        src="/img/cancel.svg"
                                        alt="close icon"
                                    />
                                </button>

                                <div className="box_inner blog-post">
                                    <ModalContent
                                        data={blogData}
                                    ></ModalContent>
                                </div>
                            </div>
                        </Modal>
                    </div>
                ) : null
            )}
        </>
    );
};

export default Blog;