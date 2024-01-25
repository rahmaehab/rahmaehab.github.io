let title = document.querySelector('.title');
let turn = 'X';
let boxs = [];
function end(num1,num2,num3){
    title.innerHTML = `${boxs[num1]} winnner`;
    document.getElementById('item'+num1).style.background = '#000';
    document.getElementById('item'+num2).style.background = '#000';
    document.getElementById('item'+num3).style.background = '#000';

    setInterval(function(){title.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()},2000)
}
function winnner()
{
    for(let i = 1; i<10;i++)
    {
        boxs[i] = document.getElementById( 'item' + i).innerHTML;
    }
    if(boxs[1] == boxs[2] && boxs[2] == boxs[3] && boxs[1] != '')
    {
        end(1,2,3);
    }
    else if(boxs[4] == boxs[5] && boxs[5] == boxs[6] && boxs[4] != '')
    {
        end(4,5,6);
    }
    else if(boxs[7] == boxs[8] && boxs[8] == boxs[9] && boxs[7] != '')
    {
        end(7,8,9);
    }
    else if(boxs[1] == boxs[4] && boxs[4] == boxs[7] && boxs[1] != '')
    {
        end(1,4,7);
    }
    else if(boxs[2] == boxs[5] && boxs[5] == boxs[8] && boxs[2] != '')
    {
        end(2,5,8);
    }
    else if(boxs[3] == boxs[6] && boxs[6] == boxs[9] && boxs[3] != '')
    {
        end(3,6,9);
    }
    else if(boxs[1] == boxs[5] && boxs[5] == boxs[9] && boxs[1] != '')
    {
        end(1,5,9);
    }
    else if(boxs[3] == boxs[5] && boxs[5] == boxs[7] && boxs[3] != '')
    {
        end(3,5,7);
    }
}
function game(id)
{
    let element = document.getElementById(id);
    if(turn === 'X'  && element.innerHTML == '')
    {
         element.innerHTML = 'X';
         turn = 'O';
         title.innerHTML = 'O';
    }
    else if(turn === 'O' && element.innerHTML == ''){
        element.innerHTML = 'O';
        turn = 'X';
        title.innerHTML = 'X';
    }
    winnner()
}
