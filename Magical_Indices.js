let A=[1,2,3,5,7]
let value=13;
let r=0
for (let item of A){
    
   r=r+item 
}


let l=[]
 for (let i=0;i<A.length;i++){
    
    if(A[i]+value > r-A[i]){
        l.push(i)
    }
}

console.log(l)