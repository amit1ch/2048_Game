export function isNumber(value) {
    return typeof value === 'number' ;
}


export const upkeyclick = (vector,score) => {
     let modify_score = score;
  console.log(modify_score);
    const modify_vector = [...vector];
     
// for(let z = 0;z<16;z++){
//     console.log(modify_vector[z]);
// }

    for (let z = 0; z < 4; z++) {
        
        let i = z;
        let k = z;
        while (i < 16) {
             
            if (isNumber(modify_vector[i])) {
                let j = i + 4;
                let flag = 0;
                while (j < 16) {
                    if (isNumber(modify_vector[j])) {
                        if (modify_vector[i] === modify_vector[j]) {
                            let v = modify_vector[i];
                            modify_vector[i] = '';
                            modify_vector[j] = '';
                            modify_vector[k] = 2 * v;
                            console.log(2*v);
                            modify_score += modify_vector[k];
                            k = k + 4;
                            i = j + 4;
                            flag = 1;
                            break;
                        } else {
                            let v = modify_vector[i];
                            modify_vector[i] = '';
                            modify_vector[k] = v;
                            console.log(k);
                            i = j;
                            k = k + 4;
                            flag = 1;
                            break;
                        }
                    } else {
                        j = j + 4;
                    }
                }
                if (flag === 0) {
                    let v = modify_vector[i];
                    modify_vector[i] = '';
                    modify_vector[k] = v;
                    
                    i = i + 4;
                }
            } else {
                i = i + 4;
            }
        }
    }
 
    let remaining = []
    for(let i = 0;i<16;i++){
        if(isNumber(modify_vector[i])){

        }

        else{
            remaining.push(i);
             
        }
    }
   console.log(remaining);
    let len = remaining.length;
    if (len === 0) {

        return modify_vector;
    }
    
    let newposition =Math.trunc(Math.random()*len);




modify_vector[remaining[newposition]] = 2;
 console.log(score);

    return {modify_vector,modify_score};
};



export const downkeyclick = (vector) => {
     
    const modify_vector = [...vector];
     
// for(let z = 0;z<16;z++){
//     console.log(modify_vector[z]);
// }

    for (let z = 0; z < 4; z++) {
        
        let i = 12 + z;
        let k = i;
        while (i >= 0) {
             
            if (isNumber(modify_vector[i])) {
                let j = i - 4;
                let flag = 0;
                while (j>= 0) {
                    if (isNumber(modify_vector[j])) {
                        if (modify_vector[i] === modify_vector[j]) {
                            let v = modify_vector[i];
                            modify_vector[i] = '';
                            modify_vector[j] = '';
                            modify_vector[k] = 2 * v;
                            
                            k = k - 4;
                            i = j - 4;
                            flag = 1;
                            break;
                        } else {
                            let v = modify_vector[i];
                            modify_vector[i] = '';
                            modify_vector[k] = v;
                            console.log(k);
                            i = j;
                            k = k - 4;
                            flag = 1;
                            break;
                        }
                    } else {
                        j = j - 4;
                    }
                }
                if (flag === 0) {
                    let v = modify_vector[i];
                    modify_vector[i] = '';
                    modify_vector[k] = v;
                    
                    i = i - 4;
                }
            } else {
                i = i - 4;
            }
        }
    }
 
    let remaining = []
    for(let i = 0;i<16;i++){
        if(isNumber(modify_vector[i])){

        }

        else{
            remaining.push(i);
             
        }
    }
   console.log(remaining);
    let len = remaining.length;
    if (len === 0) {

        return modify_vector;
    }
    
    let newposition =Math.trunc(Math.random()*len);




modify_vector[remaining[newposition]] = 2;
 

    return modify_vector;
};


export  const leftkeyclick = (vector) => {
     
    const modify_vector = [...vector];
     
// for(let z = 0;z<16;z++){
//     console.log(modify_vector[z]);
// }

    for (let z = 0; z < 4; z++) {
        
        let i = 4*z;
        let m = i;
        let k = i;
        while (i<m+4) {
             
            if (isNumber(modify_vector[i])) {
                let j = i +1 ;
                let flag = 0;
                while (j<m+4) {
                    if (isNumber(modify_vector[j])) {
                        if (modify_vector[i] === modify_vector[j]) {
                            let v = modify_vector[i];
                            modify_vector[i] = '';
                            modify_vector[j] = '';
                            modify_vector[k] = 2 * v;
                            
                            k = k +1 ;
                            i = j +1;
                            flag = 1;
                            break;
                        } else {
                            let v = modify_vector[i];
                            modify_vector[i] = '';
                            modify_vector[k] = v;
                            console.log(k);
                            i = j;
                            k = k + 1;
                            flag = 1;
                            break;
                        }
                    } else {
                        j = j + 1;
                    }
                }
                if (flag === 0) {
                    let v = modify_vector[i];
                    modify_vector[i] = '';
                    modify_vector[k] = v;
                    
                    i = i + 1;
                }
            } else {
                i = i + 1;
            }
        }
    }
 
    let remaining = []
    for(let i = 0;i<16;i++){
        if(isNumber(modify_vector[i])){

        }

        else{
            remaining.push(i);
             
        }
    }
   console.log(remaining);
    let len = remaining.length;
    if (len === 0) {

        return modify_vector;
    }
    
    let newposition =Math.trunc(Math.random()*len);




modify_vector[remaining[newposition]] = 2;
 

    return modify_vector;
};



export  const rightkeyclick = (vector) => {
     
    const modify_vector = [...vector];
     
// for(let z = 0;z<16;z++){
//     console.log(modify_vector[z]);
// }

    for (let z = 0; z < 4; z++) {
         
        let i = 4*z+3;
        let m = i - 4;
        
        let k = i;
        while (i>m) {
             
            if (isNumber(modify_vector[i])) {
                let j = i - 1 ;
                let flag = 0;
                while (j>m) {
                    if (isNumber(modify_vector[j])) {
                        if (modify_vector[i] === modify_vector[j]) {
                            let v = modify_vector[i];
                            modify_vector[i] = '';
                            modify_vector[j] = '';
                            modify_vector[k] = 2 * v;
                            
                            k = k -1 ;
                            i = j -1;
                            flag = 1;
                            break;
                        } else {
                            let v = modify_vector[i];
                            modify_vector[i] = '';
                            modify_vector[k] = v;
                            console.log(k);
                            i = j;
                            k = k - 1;
                            flag = 1;
                            break;
                        }
                    } else {
                        j = j - 1;
                    }
                }
                if (flag === 0) {
                    let v = modify_vector[i];
                    modify_vector[i] = '';
                    modify_vector[k] = v;
                    
                    i = i - 1;
                }
            } else {
                i = i - 1;
            }
        }
    }
 
    let remaining = []
    for(let i = 0;i<16;i++){
        if(isNumber(modify_vector[i])){

        }

        else{
            remaining.push(i);
             
        }
    }
   console.log(remaining);
    let len = remaining.length;
    if (len === 0) {

        return modify_vector;
    }
    
    let newposition =Math.trunc(Math.random()*len);




modify_vector[remaining[newposition]] = 2;
 

    return modify_vector;
};
