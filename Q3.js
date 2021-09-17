var obj = {
    parent_name:'father',
    child1: 'Sumair'
}

var childs = ["Hamza","Shahbaz","Jahanzaib","Junaid","Tabish","Ahtisham","Asghar"];

childs.map((c, i) => {
    let key = 'child'+(i+1);
    
    obj[key] = c;
})

console.log(obj);
