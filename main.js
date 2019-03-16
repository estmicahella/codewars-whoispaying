function whoIsPaying(name){ 
 let n = []
 if(name.length === 0){
    n.push("")
  }else if(name.length < 3){
    n.push(name)
  }else{
    n.push(name)
    n.push(name[0]+name[1])
//     n.push(`${name[0]}${name[1]}`)
  }
  return n
}
