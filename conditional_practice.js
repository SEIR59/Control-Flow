// Easy going
for(let i = 1; i<21 ; i++){
    console.log(i)
}

// Get Even
for (let i = 0; i <=200 ; i+=2 ){
    console.log(i)
  }

  // Excited Kitten
for (let i = 0 ; i<20 ; i++){
    console.log("Love me, pet me! HSSSSSS!")
    
  //index 0, which is even, is actually instance #1, which is odd. This is in addition to the previous console log.
    if (i%2 == 1 ){
      let response = ["...human...why you taking pictures of me?...","...the catnip made me do it...","...why does the red dot always get away..."]
      console.log(response[Math.floor(Math.random()*3)])
    }
  }