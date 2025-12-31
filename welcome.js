const greetings = [
    "Welcome",
    "ආයුබෝවන්",
    "¡Bienvenido!",
    "Bienvenue",
    "ようこそ!",
    "स्वागत है!",
    "欢迎!",
    "환영합니다!"
];

const colors = [
    "	#333333",
    "	#FF7F50",
    "	#4B3832",
    "	#9932CC",
    "	#006666",
    "	#708090",
    "	#FF6347",
    "	#191970"




];

let index = 0;

function changeGreeting(){
    document.getElementById("welcome").textContent = greetings[index];
    document.getElementById("welcome").style.color = colors[index];
    index = (index + 1) % greetings.length;
}
setInterval(changeGreeting,2000);