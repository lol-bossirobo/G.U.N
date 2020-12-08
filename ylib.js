

function isTouching(O1, O2) {
    if(O1.x - O2.x <= O1.width/2 + O2.width/2 && O1.y - O2.y <= O1.height/2 + O2.height/2 
     &&O2.x - O1.x <= O1.width/2 + O2.width/2 && O2.y - O1.y <= O1.height/2 + O2.height/2) {
     return true;
    } else {
      return false;
    }
  
  }
