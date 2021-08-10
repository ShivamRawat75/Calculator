window.onload =() =>{
    let screen =document.querySelector('.screen');
    let button =document.querySelectorAll('.num');
    let clear =document.querySelector('.btn-r');
    let equal =document.querySelector('.btn-g');

    button.forEach(function(button){
        button.addEventListener('click',function(e){
            let value=e.target.dataset.num;
            screen.value +=value;
            //console.log(value);
        })
    })

    equal.addEventListener('click',function(){
        if(screen.value ===''){
            screen.value="Enter value";
        }else{
            let ans=eval(screen.value);
            screen.value=ans;
        }
    })

    clear.addEventListener('click',function(){
        screen.value='';
    })
}