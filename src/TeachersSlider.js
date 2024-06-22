import React from 'react';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from './CustomArrows';

const TeacherSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const cards = [
        {
            image: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
            name: "John Smith",
            subjects: [
              "Mathematics",
              "Physics"
            ],
            bg: "#fdcc7aff",
          },
          {
            image: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
            name: "Emily Johnson",
            subjects: [
              "English",
              "Literature"
            ],
            bg: "#ffb7a7ff",
          },
          {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg/1200px-Andrzej_Person_Kancelaria_Senatu.jpg",
            name: "Michael Williams",
            subjects: [
              "History",
              "Social Studies"
            ],
            bg: "#cbcaeeff",
          },
          {
            image: "https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg",
            name: "Emma Brown",
            subjects: [
              "Biology",
              "Chemistry"
            ],
            bg: "#d3dedfff",
          },
          {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3qBVX4XIA8zq3LpBn64zAuOt9_IZ7_H5uA&s",
            name: "Robert Lee",
            subjects: [
              "Computer Science",
              "Programming"
            ],
            bg: "#befcb6",
          },
          {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThX5LDybDwHB6EW2QtuHpUJAtvqTHHr0V7yw&s",
            name: "Sophia Davis",
            subjects: [
              "Art",
              "Drawing"
            ],
            bg: "#fdcc7aff",
          },
          {
            image: "https://kuhnmediator.com/wp-content/uploads/2017/12/cropped-1ac4d606-f539-425d-8653-5eee39ba5d131.jpeg?w=200",
            name: "William Robinson",
            subjects: [
              "Music",
              "Piano"
            ],
            bg: "#ffb7a7ff",
          },
          {
            image: "https://www.jamsadr.com/images/neutrals/popke-lita-250x300-web.jpg",
            name: "Olivia Martinez",
            subjects: [
              "Foreign Languages",
              "Spanish"
            ],
            bg: "#cbcaeeff",
          },
          {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCC1LqCyIHH9iVOv6UMsXirX0Wt1gX8BuKCA&s",
            name: "James Garcia",
            subjects: [
              "Physical Education",
              "Sports"
            ],
            bg: "#d3dedfff",
          },
          {
            image: "https://cdn.blrankings.com/best-lawyers/lawyer-images/belinda-hanson-34791?t=2022090219485622",
            name: "Ava Lopez",
            subjects: [
              "Geography",
              "World History"
            ],
            bg: "#befcb6",
          },
    ];

    return (
        <div className="row mt-1 px-3">
            <div className='col-12 bg-white p-1' style={{borderRadius: 20+"px"}}>
                <Slider {...settings}>
                    {cards.map((card, index) => (
                        <div key={index} className="p-2">
                            <div className="card custom-card h-100" style={{ background: card.bg }}>
                                <div className="card-body">
                                    <img src={card.image} className="me-2 img-fluid" alt={card.name} style={{width:10+"rem", height:10+"rem", objectFit: "cover", borderRadius: 50+"%"}}/>
                                    <h5 className="card-title mt-2" style={{marginBottom:0+"px"}}>{card.name}</h5>
                                    <h6 className='text-white' style={{marginTop:0+"px"}}>{card.subjects[0]} Teacher</h6>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit arcu non leo faucibus porta. Proin sed mattis lectus, eu placerat est. Etiam gravida, diam id elementum gravida, sem eros convallis ipsum, et placerat velit felis id nulla.</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TeacherSlider;