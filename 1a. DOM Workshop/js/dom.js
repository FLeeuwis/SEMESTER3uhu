/*
    * Traversing the DOM with JavaScript
    * View the output in the console
    * Comment all, except the the one your want to show
*/

// 1. Selecteer .characters met document.querySelector

    let characters = document.querySelector('.characters');
    console.log(characters);


// 2. Selecteer .humans uit .characters (Start from characters)
    let humans = characters.querySelector('.humans');
    console.log(humans);

// 3. Selecteer alle mensen met querySelectorAll, beginnend bij .humans
    let AllHumans = humans.querySelectorAll("li");
    for(var i=0;i<5;i++)
    {
        console.log(AllHumans[i].textContent);  
    }

// 4. Selecteer alle hobbits met kinderen
    let hobbit = document.querySelector('.characters > .hobbits');
    console.log(hobbit);

// 5. Selecteer de Merry (de hobbit)
    let hobbite = hobbit.querySelectorAll("li");
    for(var i=0;i<5;i++)
    {
        console.log(hobbite[2].textContent);
    } 

// 6. Selecteer Sauron uit .vijanden
    let vijand = characters.querySelector('.enemies')
    let enemie = vijand.querySelectorAll("li");
    for(var i=0;i<2;i++)
    {
        console.log(enemie[0].textContent);
    }

// 7. Selecteer de .characters div van Nazgûl
for(var i=0;i<2;i++)
{
    console.log(enemie[1].textContent);
}

// 8. Selecteer Elrond uit elves
let elves = characters.querySelector('.elves')
let elf = elves.querySelectorAll("li");
for(var i=0;i<4;i++)
{
    console.log(elf[2].textContent);
}

// 9. Selecteer Legolas uit elves
for(var i=0;i<4;i++)
{
    console.log(elf[0].textContent);
}

// 10. Selecteer Arwen uit elves
for(var i= 0;i<4;i++)
{
    console.log(elf[3].textContent);
}