var userscore = 0
var computerscore  = 0
const user_score =  document.getElementById('score-man')
const comp_score =  document.getElementById('score-comp')
const action  = document.querySelector('.action')
const result = document.querySelector('.result')
const rock = document.getElementById('r')
const paper = document.getElementById('p')
const scissor= document.getElementById('s')

function getcomputerchoice()
{
    const item = ['r','p','s']
    const computerchoice = item[Math.floor(Math.random()*3)]
    return computerchoice

}
function word1(u,c)
{
    if(u === 'p' && c === 'r')
    return ' covers '
    else if(u === 's' && c === 'p')
    return ' cuts '
    else return ' beats '
}
function word2(u,c)
{
    if( c === 'p' && u === 'r')
    return ' covers '
    else if(u === 'p' && c === 's')
    return ' cuts '
    else return ' beats '
}
function convert(s)
{
    if (s==='r') return 'Rock'
    else if( s=== 'p') return 'Paper'
    else return 'Scissor'
}
function win (userchoice,computerchoice){
    userscore++;
    user_score.textContent = userscore
    action.textContent = convert(userchoice) + word1(userchoice,computerchoice) + convert(computerchoice) + ". You Win!"
    
     document.getElementById(userchoice).classList.add('green')
     setTimeout(function(){
         document.getElementById(userchoice).classList.remove('green')
     },300)
     if(userscore===5)
      {
          result.textContent="Congratulations!!! You Win !!!!!"
          comp_score.textContent = 0
          userscore =0
          computerscore =0
          user_score.textContent = 0
          prompt("!!!!YOU WIN!!!!")
          
          

      }
}
function lost(userchoice,computerchoice){
    computerscore++;
    comp_score.textContent = computerscore
    action.textContent = convert(computerchoice) + word2(userchoice,computerchoice) + convert(userchoice) + ". You Loose!"
    document.getElementById(userchoice).classList.add('red')
    setTimeout(function(){
        document.getElementById(userchoice).classList.remove('red')
    },300)
    if(computerscore===5)
    {
        result.textContent=" !!!! LOOSER !!!!"
        comp_score.textContent = 0
        userscore =0
        computerscore =0
        user_score.textContent = 0
        prompt("!!!!YOU LOOSE!!!!")
        
        

    }
    
   
}
function draw(userchoice,computerchoice)
{
    action.textContent = convert(computerchoice) +" is same as " + convert(userchoice) + ". It's a Drawww!"

    document.getElementById(userchoice).classList.add('grey')
    setTimeout(function(){
        document.getElementById(userchoice).classList.remove('grey')
    },300)
    if(computerscore===5 && userscore===5)
    {
        result.textContent=" !!!! DRAW !!!!"
        comp_score.textContent = 0
        userscore =0
        computerscore =0
        user_score.textContent = 0
        prompt("!!!!DRAW!!!!")
        
        

    }
}


function game(userchoice){
    const computerchoice = getcomputerchoice()
    switch(userchoice+computerchoice)
    {
        case 'rs':
        case 'pr':
        case 'sp':
                win (userchoice,computerchoice)
                
                break;
               


        case 'sr':
        case 'rp':
        case 'sp':
            lost(userchoice,computerchoice)
       
            break;

        case 'rr':
        case 'pp':
        case 'ss':
            draw(userchoice,computerchoice)
            break;
    
    }
    
    
}
 

function main(){
rock.addEventListener('click',function(){
     game('r')

})

paper.addEventListener('click',function(){
    game('p')

})

scissor.addEventListener('click',function(){
    game('s')

})
}

main()

// will correct the prompt; add more effects ; add a reset/restart button& function