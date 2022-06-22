let card1 = document.getElementById('firstcard')
let card2 = document.getElementById('togglecard')
let card3 = document.getElementById('togglecard1')
let left = document.getElementById('leftb')
let right = document.getElementById('rightb')
let res;

async function Pets() {
    const petsData = [
        {
            "name": "Katrine",
            "img": "../../assets/images/pets-katrine.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
            "age": "6 months",
            "inoculations": [
                "panleukopenia"
            ],
            "diseases": [
                "none"
            ],
            "parasites": [
                "none"
            ]
        }, {
            "name": "Jennifer",
            "img": "../../assets/images/pets-jennifer.png",
            "type": "Dog",
            "breed": "Labrador",
            "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
            "age": "2 months",
            "inoculations": [
                "none"
            ],
            "diseases": [
                "none"
            ],
            "parasites": [
                "none"
            ]
        }, {
            "name": "Woody",
            "img": "../../assets/images/pets-woody.png",
            "type": "Dog",
            "breed": "Golden Retriever",
            "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
            "age": "3 years 6 months",
            "inoculations": [
                "adenovirus",
                "distemper"
            ],
            "diseases": [
                "right back leg mobility reduced"
            ],
            "parasites": [
                "none"
            ]
        },
            {
            "name": "Tommie",
            "img": "../../assets/images/pets-katrinea.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
            "age": "6 months",
            "inoculations": [
                "panleukopenia"
            ],
            "diseases": [
                "none"
            ],
            "parasites": [
                "none"
            ]
        },

        {
            "name": "Sophia",
            "img": "../../assets/images/pets-charly.png",
            "type": "Dog",
            "breed": "Shih tzu",
            "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
            "age": "1 month",
            "inoculations": [
                "parvovirus"
            ],
            "diseases": [
                "none"
            ],
            "parasites": [
                "none"
            ]
        },
        {
            "name": "Scarlett",
            "img": "../../assets/images/pets-scarlet.png",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
            "age": "3 months",
            "inoculations": [
                "parainfluenza"
            ],
            "diseases": [
                "none"
            ],
            "parasites": [
                "none"
            ]
        },

        {
            "name": "Timmy",
            "img": "../../assets/images/pets-timmy.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
            "age": "2 years 3 months",
            "inoculations": [
                "calicivirus",
                "viral rhinotracheitis"
            ],
            "diseases": [
                "kidney stones"
            ],
            "parasites": [
                "none"
            ]
        },
        {
            "name": "Freddie",
            "img": "../../assets/images/pets-scarlet.png",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
            "age": "2 months",
            "inoculations": [
                "rabies"
            ],
            "diseases": [
                "none"
            ],
            "parasites": [
                "none"
            ]
        },
        {
            "name": "Charly",
            "img": "../../assets/images/pets-katrinet.png",
            "type": "Cat",
            "breed": "Jack Russell Terrier",
            "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
            "age": "8 years",
            "inoculations": [
                "bordetella bronchiseptica",
                "leptospirosis"
            ],
            "diseases": [
                "deafness",
                "blindness"
            ],
            "parasites": [
                "lice",
                "fleas"
            ]
        }
    ];
res = petsData;
const pets = res;
return pets;

}
let count1 = 1;
let count2 = 2;
let count3 = 3;

right.addEventListener('click', function () {
Pets();
card1.children[1].innerText = res[count1].name;
card1.children[0].src = res[count1].img;
count1++;
card2.children[1].innerText = res[count2].name;
card2.children[0].src = res[count2].img;
count2++;
card3.children[1].innerText = res[count3].name;
card3.children[0].src = res[count3].img;
count3++;
if (count1===9) {
    count1=0;

}
console.log(count1);
if (count2 === 9) {
        count2 = 1;
}
if (count3 === 9) {
        count3 = 2;
}
})

let count1m = 8;
let count2m = 7;
let count3m = 6;

left.addEventListener('click', function () {
    Pets();
    card1.children[1].innerText = res[count1m].name;
    card1.children[0].src = res[count1m].img;
    count1m--;
    card2.children[1].innerText = res[count2m].name;
    card2.children[0].src = res[count2m].img;
    count2m--;
    card3.children[1].innerText = res[count3m].name;
    card3.children[0].src = res[count3m].img;
    count3m--;
    if (count1m === 2) {
        count1m = 0;

    }
    console.log(count1m);
    if (count2m === 1) {
        count2m = 1;
    }
    if (count3m === 0) {
        count3m = 2;
    }
})