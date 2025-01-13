---
layout: page
permalink: /swap-fee/
---
# Ski Swap Convenience Fee Bookmarklets

Drag and links below to your bookmarks bar to create bookmarklets that will calculate and populate  the convenince fee for a transaction based on the Grand Total of the items currently in the Sell Items list of items.

Execute the bookmarklets in the same order that they are listed below in ordre to calculate and populate the convenience fee in the Add Item line.

- <a href="javascript:void((function() {convFeeCalcScript=document.createElement('script');convFeeCalcScript.setAttribute('src','https://code.jquery.com/jquery-3.6.0.min.js'); document.body.appendChild(convFeeCalcScript);})());">1 - Prep Total</a>
- <a href="javascript:void((function() {totalText=$('h2:contains(Grand Total)').text();console.log(totalText);numIndex=totalText.indexOf('$');calcStr=totalText.substr(numIndex + 1); calcNum=parseFloat(calcStr);console.log(calcStr);console.log(calcNum);let convFee=calcNum * .025;convFee=convFee.toFixed(2);console.log(convFee);$('input[name=Add_ItemName]').attr('value', 'Convenience Fee');$('select[name=Add_Type] option:contains(Clothing)').removeAttr('selected');$('select[name=Add_Type] option:contains(Convenience Fee)').attr('selected', 'true');$('input[name=Add_AskingPrice]').attr('value',convFee);$('select[name=Add_UserIDX] option:contains(JK1101)').attr('selected', 'true');})())">2 - Add Convenience Fee</a>
