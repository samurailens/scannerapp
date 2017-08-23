import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  scans : any [];

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {
 
    var barcode = {
        format: "encoded format",
        text : "actual text"
      }

    this.scans = new Array();
    this.scans.push(barcode)
  }


  scan(){
    this.barcodeScanner.scan().then((barcodeData) => {
        // Success! Barcode data is here
        console.log(barcodeData);
        
          if(this.scans && this.scans.length == 0){
              this.scans[0]= barcodeData;
            }else{
              this.scans.push(barcodeData);
            }

    }, (err) => {
        // An error occurred
        console.log(err);
    });
  }

}
