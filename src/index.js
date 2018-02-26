module.exports = function getZerosCount(number, base) {
    // your implementation
    let array = [2,3,5,7,11,13];
    let st = [];
    let num = base;

    for(let i = 0; i < array.length + 1; i++){
        if(i == 6){
            st.push(num);
            break;
        }
        if(num == 1){
            break;
        }
        if(num%array[i] == 0){
            st.push(array[i]);
            num /= array[i];
            i = -1;
        }

    }

    st.sort();
    let obj = {};
    let next_num = st[0];
    let del_count = 0;
    for(let i = 0; i < st.length; i++){
        if(st[i] != next_num){
            obj[next_num] = del_count;
            next_num = st[i];
            del_count = 0;
        }
        del_count++;
        if(i + 1 >= st.length && del_count > 0){
            obj[next_num] = del_count;
        }
    }

    let min_array = [];
    for(let key in obj){
        let ziro_num = Math.floor(number/parseInt(key));
        let stepen = parseInt(key)*parseInt(key);
        while(true){
            ziro_num += Math.floor(number/stepen);
            stepen *= parseInt(key);
            if(stepen > number){
                min_array.push(Math.floor(ziro_num/obj[key]));
                break;
            }
        }
    }

    let min = min_array[0];
    for(let i = 1; i < min_array.length; i++){
        if(min > min_array[i]){
            min = min_array[i];
        }
    }

    return min;
}
