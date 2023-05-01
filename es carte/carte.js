class carte
{
    constructor()
    {
        this.credito = 100;
        this.dorso = "immagini/dorso.png";
    }

    scommetti(numero)
    {
        let scommessa = document.getElementById("selScommetti").value;
        let rand;

        if(numero == 1)
        {
            rand = this.generaRandom();
            document.getElementById("imm1").src = "immagini/" + rand + ".jpg";
            this.reset(2,3);
            if(rand == 1)
                this.vincita(scommessa);
            if(this.credito < 0)
            {
                alert("hai finito il credito");
                document.getElementById("credito").innerHTML =  "Credito: " + 0;
            }
            document.getElementById("credito").innerHTML = "Credito: " + this.credito; 
            
        }
        else if(numero == 2)
        {
            rand = this.generaRandom();
            document.getElementById("imm2").src = "immagini/" + rand + ".jpg";
            this.reset(1,3);
            if(this.credito != 0) 
                this.credito = this.credito - scommessa;
            if(rand == 1)
                this.vincita(scommessa);
            if(this.credito < 0)
            {
                alert("hai finito il credito");
                document.getElementById("credito").innerHTML =  "Credito: " + 0;
            }
            document.getElementById("credito").innerHTML = "Credito: " + this.credito; 
        }
        else if(numero == 3)
        {
            rand = this.generaRandom();
            document.getElementById("imm3").src = "immagini/" + rand + ".jpg";
            this.reset(1,2);
            if(this.credito != 0) 
                this.credito = this.credito - scommessa;
            if(rand == 1)
                this.vincita(scommessa);
            if(this.credito < 0)
            {
                alert("hai finito il credito");
                document.getElementById("credito").innerHTML =  "Credito: " + 0;
            }
            document.getElementById("credito").innerHTML = "Credito: " + this.credito; 
        }

    }

    generaRandom()
    {
        let random = Math.floor(Math.random() * 3) + 1;
        return random;
        
    }

    reset(imm1, imm2)
    {
        document.getElementById("imm" + imm1).src = this.dorso;
        document.getElementById("imm" + imm2).src = this.dorso;
    }

    vincita(scommessa)
    {
        this.credito += scommessa * 5;
        return this.credito;
    }
}