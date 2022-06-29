let card1 = document.getElementById('firstcard')
let card2 = document.getElementById('togglecard')
let card3 = document.getElementById('togglecard1')
let card4 = document.getElementById('togglecard2')
let card5 = document.getElementById('dfirstcard')
let card6 = document.getElementById('dtogglecard')
let card7 = document.getElementById('dtogglecard1')
let card8 = document.getElementById('dtogglecard2')
let left1 = document.getElementById('left1')
let right1 = document.getElementById('right1')
let left2 = document.getElementById('left2')
let right2 = document.getElementById('right2')
let Num = document.getElementById('cenb')
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
    let arr= [...petsData, ...petsData, ...petsData, ...petsData, ...petsData, ...petsData];
     res = arr; //.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
    console.log(res);
    const pets = res;
    return pets;

}
Pets();
let data = window.performance.getEntriesByType("navigation")[0].type;
if (data == 'reload') {
    Pets();
}
let count1 = 1;
card1.children[1].innerText = res[count1].name;
card1.children[0].src = res[count1].img;
count1++;
let count2 = 2;
card2.children[1].innerText = res[count2].name;
card2.children[0].src = res[count2].img;
count2++;
let count3 = 3;
card3.children[1].innerText = res[count3].name;
card3.children[0].src = res[count3].img;
count3++;
let count4 = 4;
card4.children[1].innerText = res[count4].name;
card4.children[0].src = res[count4].img;
count4++;
let count5 = 5;
card5.children[1].innerText = res[count5].name;
card5.children[0].src = res[count5].img;
count5++;
let count6 = 6;
card6.children[1].innerText = res[count6].name;
card6.children[0].src = res[count6].img;
count6++;
let count7 = 7;
card7.children[1].innerText = res[count7].name;
card7.children[0].src = res[count7].img;
count7++;
let count8 = 8;
card8.children[1].innerText = res[count8].name;
card8.children[0].src = res[count8].img;
count8++;
let countright;
let countleft;
let x=0;
let w = document.documentElement.clientWidth || window.innerWidth;
if (1080 <= w) {
x=6;
}
else if (768 <= w && w < 1080) {
x=8;
}
else if (w < 768) {
x=12;
}
else if (condition) {

}
right1.addEventListener('click', function () {
    card1.children[1].innerText = res[count1].name;
    card1.children[0].src = res[count1].img;
    count1++;
    card2.children[1].innerText = res[count2].name;
    card2.children[0].src = res[count2].img;
    count2++;
    card3.children[1].innerText = res[count3].name;
    card3.children[0].src = res[count3].img;
    count3++;
    card4.children[1].innerText = res[count4].name;
    card4.children[0].src = res[count4].img;
    count4++;
    card5.children[1].innerText = res[count5].name;
    card5.children[0].src = res[count5].img;
    count5++;
    card6.children[1].innerText = res[count6].name;
    card6.children[0].src = res[count6].img;
    count6++;
    card7.children[1].innerText = res[count7].name;
    card7.children[0].src = res[count7].img;
    count7++;
    card8.children[1].innerText = res[count8].name;
    card8.children[0].src = res[count8].img;
    count8++;
    let countright=0;
    countright++;
    Num.innerText = Number(Num.innerText) + countright
    if (Number(Num.innerText) > 1) {
        left1.disabled = false;
        left2.disabled = false;

    }
    if (Number(Num.innerText) > (x-1)) {
        right1.disabled = true;
        right2.disabled = true;
    }

})

left1.addEventListener('click', function () {
    card1.children[1].innerText = res[count1].name;
    card1.children[0].src = res[count1].img;
    count1--;
    card2.children[1].innerText = res[count2].name;
    card2.children[0].src = res[count2].img;
    count2--;
    card3.children[1].innerText = res[count3].name;
    card3.children[0].src = res[count3].img;
    count3--;
    card4.children[1].innerText = res[count4].name;
    card4.children[0].src = res[count4].img;
    count4--;
    card5.children[1].innerText = res[count5].name;
    card5.children[0].src = res[count5].img;
    count5--;
    card6.children[1].innerText = res[count6].name;
    card6.children[0].src = res[count6].img;
    count6--;
    card7.children[1].innerText = res[count7].name;
    card7.children[0].src = res[count7].img;
    count7--;
    card8.children[1].innerText = res[count8].name;
    card8.children[0].src = res[count8].img;
    count8--;

    let countleft = 0;
    countleft++;
    Num.innerText = Num.innerText-countleft
    if (Number(Num.innerText) > 1 ) {
        left1.disabled = false;
        left2.disabled = false;
    }
    if (Number(Num.innerText) < 2) {
        left1.disabled = true;
        left2.disabled = true;
    }
    if (Number(Num.innerText) < x) {
        right1.disabled = false;
        right2.disabled = false;
    }
})

left2.addEventListener ('click', function () {
count1=2;
count2=3;
count3=4;
count4=5;
count5=6;
count6=7;
count7=8;
count8=9;
    card1.children[1].innerText = res[count1].name;
    card1.children[0].src = res[count1].img;

    card2.children[1].innerText = res[count2].name;
    card2.children[0].src = res[count2].img;

    card3.children[1].innerText = res[count3].name;
    card3.children[0].src = res[count3].img;

    card4.children[1].innerText = res[count4].name;
    card4.children[0].src = res[count4].img;

    card5.children[1].innerText = res[count5].name;
    card5.children[0].src = res[count5].img;

    card6.children[1].innerText = res[count6].name;
    card6.children[0].src = res[count6].img;

    card7.children[1].innerText = res[count7].name;
    card7.children[0].src = res[count7].img;

    card8.children[1].innerText = res[count8].name;
    card8.children[0].src = res[count8].img;
    Num.innerText = 1;
    left1.disabled = true;
    left2.disabled = true;
    right1.disabled = false;
    right2.disabled = false;
})
right2.addEventListener('click', function () {
count1=6;
count2=7;
count3=8;
count4=9;
count5=10;
count6=11;
count7=12;
count8=13;

    card1.children[1].innerText = res[count1].name;
    card1.children[0].src = res[count1].img;

    card2.children[1].innerText = res[count2].name;
    card2.children[0].src = res[count2].img;

    card3.children[1].innerText = res[count3].name;
    card3.children[0].src = res[count3].img;

    card4.children[1].innerText = res[count4].name;
    card4.children[0].src = res[count4].img;

    card5.children[1].innerText = res[count5].name;
    card5.children[0].src = res[count5].img;

    card6.children[1].innerText = res[count6].name;
    card6.children[0].src = res[count6].img;

    card7.children[1].innerText = res[count7].name;
    card7.children[0].src = res[count7].img;

    card8.children[1].innerText = res[count8].name;
    card8.children[0].src = res[count8].img;
    Num.innerText=x;
    left1.disabled = false;
    left2.disabled = false;
    right1.disabled = true;
    right2.disabled = true;
})
var modal = document.getElementById("Popup");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
let age = document.getElementById("age");
let para = document.getElementById("parasi");
let disease = document.getElementById("dise");
let ino = document.getElementById("ino");
let popimage = document.getElementById("popimg");
let popd = document.getElementsByClassName("popdis")
let name1 = document.getElementById("petname");
card1.addEventListener('click', function () {
    popimage.src = res[count1-1].img;
    popd.headp.innerText = res[count1-1].description;
    age.innerText = `Age:${res[count1-1].age}`;
    ino.innerText = `Inoculations:${res[count1-1].inoculations}`;
    name1.innerText = `${res[count1-1].name}`;
    para.innerText = `Parasites:${res[count1-1].parasites}`;
    disease.innerText = `Diseases:${res[count1-1].diseases}`;

    modal.style.display = "block";
})
card2.addEventListener('click', function () {
    popimage.src = res[count2-1].img;
    popd.headp.innerText = res[count2-1].description;
    age.innerText = `Age:${res[count2-1].age}`;
    ino.innerText = `Inoculations:${res[count2-1].inoculations}`;
    name1.innerText = `${res[count2-1].name}`;
    para.innerText = `Parasites:${res[count2-1].parasites}`;
    disease.innerText = `Diseases:${res[count2-1].diseases}`;

    modal.style.display = "block";
})
card3.addEventListener('click', function () {
    popimage.src = res[count3-1].img;
    popd.headp.innerText = res[count3-1].description;
    age.innerText = `Age:${res[count3-1].age}`;
    ino.innerText = `Inoculations:${res[count3-1].inoculations}`;
    name1.innerText = `${res[count3-1].name}`;
    para.innerText = `Parasites:${res[count3-1].parasites}`;
    disease.innerText = `Diseases:${res[count3-1].diseases}`;

    modal.style.display = "block";
})
card4.addEventListener('click', function () {
    popimage.src = res[count4-1].img;
    popd.headp.innerText = res[count4-1].description;
    age.innerText = `Age:${res[count4-1].age}`;
    ino.innerText = `Inoculations:${res[count4-1].inoculations}`;
    name1.innerText = `${res[count4-1].name}`;
    para.innerText = `Parasites:${res[count4-1].parasites}`;
    disease.innerText = `Diseases:${res[count4-1].diseases}`;

    modal.style.display = "block";
})
card5.addEventListener('click', function () {
    popimage.src = res[count5-1].img;
    popd.headp.innerText = res[count5-1].description;
    age.innerText = `Age:${res[count5-1].age}`;
    ino.innerText = `Inoculations:${res[count5-1].inoculations}`;
    name1.innerText = `${res[count5-1].name}`;
    para.innerText = `Parasites:${res[count5-1].parasites}`;
    disease.innerText = `Diseases:${res[count5-1].diseases}`;

    modal.style.display = "block";
})
card6.addEventListener('click', function () {
    popimage.src = res[count6-1].img;
    popd.headp.innerText = res[count6-1].description;
    age.innerText = `Age:${res[count6-1].age}`;
    ino.innerText = `Inoculations:${res[count6-1].inoculations}`;
    name1.innerText = `${res[count6-1].name}`;
    para.innerText = `Parasites:${res[count6-1].parasites}`;
    disease.innerText = `Diseases:${res[count6-1].diseases}`;

    modal.style.display = "block";
})
card7.addEventListener('click', function () {
    popimage.src = res[count7-1].img;
    popd.headp.innerText = res[count7-1].description;
    age.innerText = `Age:${res[count7-1].age}`;
    ino.innerText = `Inoculations:${res[count7-1].inoculations}`;
    name1.innerText = `${res[count7-1].name}`;
    para.innerText = `Parasites:${res[count7-1].parasites}`;
    disease.innerText = `Diseases:${res[count7-1].diseases}`;

    modal.style.display = "block";
})
card8.addEventListener('click', function () {
    popimage.src = res[count8-1].img;
    popd.headp.innerText = res[count8-1].description;
    age.innerText = `Age:${res[count8-1].age}`;
    ino.innerText = `Inoculations:${res[count8-1].inoculations}`;
    name1.innerText = `${res[count8-1].name}`;
    para.innerText = `Parasites:${res[count8-1].parasites}`;
    disease.innerText = `Diseases:${res[count8-1].diseases}`;

    modal.style.display = "block";
})