let candyBar = () => {
    let input: number = + (<HTMLInputElement>document.getElementById('input')).value;
    let resultElement: HTMLElement = document.getElementById('result')!;
    if(input%22 == 0){
        resultElement.innerHTML = 'candybar'
        console.log('candybar');
    } else if(input%11==0) {
        resultElement.innerHTML = 'bar'        
        console.log('bar');
    } else if(input%2==0) {
        resultElement.innerHTML = 'candy'
        console.log('candy');
    }else {
        resultElement.innerHTML = String(input)
        console.log(input)
    }
}

document.getElementById('enter')!.addEventListener('click', () => candyBar())