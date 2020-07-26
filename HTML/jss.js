var questions = [
    {
        prompt: "A Black Wing opera em solo brasileiro?\n(a) Sim\n(b) Não",
        answer: "a"
    },
    {
        prompt: "A Black Wing faz proteção de pessoas?\n(a) Sim\n(b) Não\n(c) Depende",
        answer: "c"
    },
    {
        prompt: "A Black Wing tem como armamento padrão:\n(a) AK-47 e revólver Colt\n(b) SCAR-H e pistola Desert Eagle\n(c) M4A1 e pistola Glock 19",
        answer: "c"
    },
    {
        prompt: "A Black Wing vende armas?\n(a) Sim\n(b) Não",
        answer: "b"
    },
    {
        prompt: "Qualquer empresa pode contratar os serviços da Black Wing?\n(a) Sim\n(b) Não",
        answer: "a"
    },
    {
        prompt: "A Black Wing dá apoio a ex-militares?\n(a) Sim\n(b) Não\n(c) Depende",
        answer: "a"
    },
]

for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        alert("Correto!");
        
    }else{
        alert("Errado!");
    }
}
