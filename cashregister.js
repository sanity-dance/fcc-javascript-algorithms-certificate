function checkCashRegister(price, cash, cid) {
  var consumed={status: "OPEN", change: []};
  var required = (cash-price)*100; // Modulo operator doesn't play nice with floats, so make them ints for now.
  if(cid.reduce((x, y) => x + y[1]*100,0) - required == 0){
    consumed['status'] ="CLOSED"; // Close the drawer if the amount required is exactly equal to the amount of change in the drawer.
    consumed['change']=cid;
  }
  else{
    cid[0][2]=1; // Add currency amounts to the subarrays, appropriately scaled.
    cid[1][2]=5;
    cid[2][2]=10;
    cid[3][2]=25;
    cid[4][2]=100;
    cid[5][2]=500;
    cid[6][2]=1000;
    cid[7][2]=2000;
    cid[8][2]=10000;
    // If the amount of change required is exactly as much as there is in the cash drawer, close the drawer.
    for(let i=cid.length-1; i >= 0; i--){
      if(required % (cid[i][2]) != required){ // Check if the bill level is appropriate for the change required.
        if(cid[i][1]*100 - required >= 0 && required%cid[i][2] == 0){ // Check if the amount available is able to completely cover the change required.
          consumed['change'].push([cid[i][0],required/100]);
          required=0;
          break;
        }
        else if(cid[i][1] != 0) { //Otherwise take as much as possible from this level and move on.
          var viable = (cid[i][1]*100);
          if(viable > required && required % cid[i][2] != 0){ //Ensure we're only taking a logical amount from the cash drawer; that is, an amount divisible by the bill at hand.
            viable=required-(required % cid[i][2]);
          }
          consumed['change'].push([cid[i][0],viable/100]);
          required -= viable;
        }
      }
    }
    if(required > 0){ // If more is required after all currency types have been exhausted, declare insufficient funds.
      consumed['status'] = "INSUFFICIENT_FUNDS";
      consumed['change'] = [];
    }
  }
  // Here is your change, ma'am.
  return consumed;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0], ["NICKEL", 0.5], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
