let valores=[1,2,3,4,5]
const op=[
    (valores)=>{
        let res=0
        for(v of valores){
            res+=v
        }
        return res
    },
    (valores)=>{
        let res=1
        for(v of valores){
            res*=v
        }
        return res
    },
    (valores)=>{
        for(v of valores){
            console.log(v)
        }
    },
]
console.log(op[0](valores))
console.log(op[1](valores))
op[2](valores)