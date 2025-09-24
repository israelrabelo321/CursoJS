function tabuada(){
    var acabou = window.document.getElementById('colocar')
    var tab = window.document.getElementById('lista')

    var n1 = Number(acabou.value)

    var lol = window.document.getElementById('aqui')
    if(n1 ==0){
        lol.innerHTML += "Não identificou!"
    }else{
    var c= 1
    var mult =n1*c
    tab.innerHTML+=''
        while(c<=10){
            var item = document.createElement('option') //criar opções no javaScript
            item.text=n1+'x'+c+'='+mult
            item.value =tab+c
            tab.appendChild(item)
            c++
        }
    }

        
    }
