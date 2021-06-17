const reviews = [{
        id: 1,
        name: "susan smith",
        profile: "web developer",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        profile: "web designer",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        profile: "intern",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        profile: "the boss",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

let index = 0;

// BUTTONS

const next = document.querySelector('.next-btn');
const prev = document.querySelector('.prev-btn');
const surprise = document.querySelector('.random');

// ATTRIBUTES

const name = document.querySelector('.name');
const profile = document.querySelector('.profile');
const image = document.querySelector('.image');
const text = document.querySelector('.text');

// FUNCTIONS

next.addEventListener('click' , () => {
    index = (index + 1) % 4;
    name.textContent = reviews[index].name;
    profile.textContent = reviews[index].profile;
    text.textContent = reviews[index].text;
    image.src = reviews[index].image;
})

prev.addEventListener('click' , () => {
    if (index == 0) {
        index = 4;
    } else {
        index--;
    }
    name.textContent = reviews[index].name;
    profile.textContent = reviews[index].profile;
    text.textContent = reviews[index].text;
    image.src = reviews[index].image;
})

surprise.addEventListener('click' , () => {
    index = randomNumber();
    name.textContent = reviews[index].name;
    profile.textContent = reviews[index].profile;
    text.textContent = reviews[index].text;
    image.src = reviews[index].image;
})

randomNumber = () => {
    let num = Math.floor(Math.random() * 4);
    return num;
}