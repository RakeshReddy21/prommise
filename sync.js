function demo(){
    setTimeout(()=>{
        console.log("Iam demo1");
    },2000)
}
demo()

function demo2(){
    setTimeout(()=>{"Iam demo2"},2000)
}
demo2()


const pr1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        if(!true){
        resolve("Promise1 resolved") // resolving promise
        }
        else{
            reject("Promise1 rejected")
        }
    }, 1500);
})
// console.log(pr1)
pr1.then((e)=>{console.log(e)}).catch((x)=>{console.log(x)})


let a=5;
let b=5;
let c= a+b;
let d=a-b;

let promise1=new Promise((resolve, reject) => {
    setTimeout(() => {
    if(c || d){
        resolve("Promise1 resolved")
    }
    else{
        reject("Promise is rejeted")
    }
},3000)
})

promise1.then((e)=>{console.log(e)}).catch((a)=>console.log(a))

function prom(a){
    let b = Math.floor(Math.random()*10)
    console.log(b)
        return new Promise((resolve,reject)=>{
            if(b){
            setTimeout(() => {
                resolve("Promise resolved")
                }, 3000);
            }
            else{
                setTimeout(()=>{
                    reject("Promise rejected")
                })
            }
        })
    }



function prom1(a){
    let b = Math.floor(Math.random()*10)
    console.log(b)
        return new Promise((res,rej)=>{
            if(b){
            setTimeout(() => {
                res("Promise resolved 1")
                }, 1000);
            }
            else{
                setTimeout(()=>{
                    rej("Promise rejected 1")
                })
            }
        })
    }

prom().then((e)=>{console.log(e)}).catch((e)=>{console.log(e)})
prom1().then((e)=>{console.log(e)}).catch((e)=>{console.log(e)})

prom().then((e)=>{console.log(e); return prom1()}).then((a)=>{console.log(a)}).catch((a)=>{console.log(a)})

