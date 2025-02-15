const karuthuButton = document.getElementById('karuthuButton');
const quoteContainer = document.getElementById('quoteContainer');
const quoteText = document.createElement('p'); 
quoteText.id = 'quoteText'; 
quoteContainer.appendChild(quoteText); 
const quoteImage = document.createElement('img'); 
quoteContainer.appendChild(quoteImage); 
const regenerateButton = document.getElementById('regenerateButton');

const karuthuData = [
    { quote: "Thamma Thundu Blade Mela Vetcha Nambikaiya Unmela Vei Jeikalam.", image: "1.jpg" },
    { quote: "Evlovo pannitoo, itha panna matomaa...", image: "2.jpg" },
    { quote: "Ajith vaalga, Vijay vaalga.. Neenga eppo vaazha poringa..???", image: "3.jpeg" },
    { quote: "Nallavana erukalaam ana romba nallavana erukakudathu...", image: "4.jpg" },
    { quote: "Wake up to reality. Nothing ever goes as planned in this accursed world.", image: "5.avif" },
    { quote: "Athigama aasa padra aambalaiyu athigama kovva padra pombalaiyu nalla vaalnthathaa sarithirame kedaiyathu", image: "6.jpg" },
    { quote: "If you win, you live. If you lose, you die. If you don't fight, you can't win.", image: "7.avif" },
    { quote: "The hardest choices require the strongest wills.", image: "8.jpeg" },
    { quote: "It's not about how much we lost. It's about how much we have left. We're the Avengers. We gotta finish this.", image: "9.webp" },
    { quote: "Self-belief and hardwork will always earn you success.", image: "10.jpeg" },
    { quote: "Whatever you want to do, do with full passion and work really hard towards it. Don't look anywhere else.", image: "11.jpeg" },
    { quote: "Religion and caste make you 'hate people' but travel makes you 'empathetic'", image: "12.avif" },
    { quote: "You Either Die A Hero, Or You Live Long Enough To See Yourself Become A Villain.", image: "13.jpeg" },
    
];

karuthuButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * karuthuData.length);
    const randomKaruthu = karuthuData[randomIndex];

    quoteText.textContent = randomKaruthu.quote;
    quoteImage.src = randomKaruthu.image; 
    quoteImage.alt = randomKaruthu.quote; 

    quoteContainer.style.display = 'block'; 
    regenerateButton.style.display = 'block'; 
    karuthuButton.style.display = 'none'; 

});

regenerateButton.addEventListener('click', () => {
    location.reload(); 
});