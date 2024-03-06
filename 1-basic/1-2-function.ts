{
     // javascript
     function jsAdd(num1, num2){
        return num1 + num2;
     }

     // typscript
     function add(num1:number, num2:number): number {

        return num1 + num2;
     }

     // js
     function jsFetchNum(id) {
        // code
        
        return new Promise((resolve, reject) => {
            resolve(100);
        })
     }

     // ts
     function tsFetchNum(id: string): Promise<number> {
        // code
        
        return new Promise((resolve, reject) => {
            resolve(100);
        })
     }

     // Optional parameter
     // 만약 전달하지 않으면 undefined 할당
     function printName(fristName: string, lastName?: string){
        console.log(fristName);
        console.log(lastName);
     }

     printName('kang', 'gong');
     printName('gong12');

     // Default parameter
     // 아무것도 전달하지 않아도 디폴트 값 인자를 지정할 수 있다
     function printMessage(message: string = 'default msg'){
        console.log(message);
     }

     printMessage();

     // Rest parameter
     function addNumbers(...numberArr : number[]): number{
        return numberArr.reduce((a, b) => a + b);
     }

     console.log(addNumbers(1,2,3));

}