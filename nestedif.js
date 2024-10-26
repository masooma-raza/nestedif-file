let name = prompt('enter your name');
let cat  = prompt ('enter any one category (fast food , soft drink ,sweets)')
let items , qty , burgercat , broastcat ,sweetcat

if(cat== 'fastfood'){
    items = prompt("select any one item (burger RS 500 / broast RS 800)");
    if(items=="burger"){
        burgercat = prompt("select any one category(chicken burger400 / beef burger 500)")
        qty = prompt("insert your quantity")
        if(burgercat== "chicken burger"){
            document.write("<p>customer name :"+ name+ "</p>")
            document.write("<p>items:" +burgercat+ "</p>")
            document.write("<p>price: 400</p>")
            document.write("<p>quantity:" +qty+ "</p>")
            document.write("<p>total:" +qty*400+"</p>")
        }
        else if(burgercat=="beef burger"){
            document.write("<p>customer name :"+ name+ "</p>")
            document.write("<p>items:" +burgercat+ "</p>")
            document.write("<p>price: 500</p>")
            document.write("<p>quantity:" +qty+ "</p>")
            document.write("<p>total:" +qty*500+"</p>")
        }
        else{
            alert("invalid option")
        }
    }
    else if(items=="broast"){
        broastcat = prompt("select any one category(leg broast 600 /quarter broast 800)")
        qty = prompt("insert your quantity")
        if(broastcat== "leg broast"){
            document.write("<p>customer name :"+ name+ "</p>")
            document.write("<p>items:" +broastcat+ "</p>")
            document.write("<p>price: 600</p>")
            document.write("<p>quantity:" +qty+ "</p>")
            document.write("<p>total:" +qty*600+"</p>")
        }
        else if(broastcat=="quarter broast"){
            document.write("<p>customer name :"+ name+ "</p>")
            document.write("<p>items:" +broastcat+ "</p>")
            document.write("<p>price: 800</p>")
            document.write("<p>quantity:" +qty+ "</p>")
            document.write("<p>total:" +qty*800+"</p>")
        }
        else{
            alert("invalid option")
        }
    }
    else{
alert("invalid option")
    }

}
else if( cat =="soft drink"){
    items = prompt('select any one (pepsi / coke)')
    if(items=="PEPSI"){
        qty = prompt("insert your quantity")
        document.write("<p>customer name :"+ name+ "</p>")
        document.write("<p>items:" +items+ "</p>")
        document.write("<p>price: 200</p>")
        document.write("<p>quantity:" +qty+ "</p>")
        document.write("<p>total:" +qty*200+"</p>")
    }
    else{
        alert("invalid option")
    }

}
else if( cat =="softdrink"){
    items = prompt('select any one (pepsi / coke)')
    if(items=="coke"){
        qty = prompt("insert your quantity")
        document.write("<p>customer name :"+ name+ "</p>")
        document.write("<p>items:" +items+ "</p>")
        document.write("<p>price: 300</p>")
        document.write("<p>quantity:" +qty+ "</p>")
        document.write("<p>total:" +qty*300+"</p>")
    }
    else{
        alert("invalid option")
    }

}





    