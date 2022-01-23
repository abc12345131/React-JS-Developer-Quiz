let candyBar = () => {
    let input: number = + (<HTMLInputElement>document.getElementById('input')).value;
    let resultElement: HTMLElement = document.getElementById('result')!;
    let objArr: {[key: number]: string}[] = [{22: 'candybar'}, {11: 'bar'}, {2: 'candy'}]
    for(let obj of objArr) {
        let key: number= + Object.keys(obj)
        if(input%key===0) {
            resultElement.innerHTML = obj[key]
            console.log(obj[key]);
            return
        }
    }
    resultElement.innerHTML = String(input)
    console.log(input);
}

document.getElementById('enter')!.addEventListener('click', () => candyBar())