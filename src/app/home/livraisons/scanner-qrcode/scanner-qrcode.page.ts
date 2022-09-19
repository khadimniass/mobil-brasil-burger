import { Component, ViewChild, ElementRef,OnInit } from '@angular/core';
import { ToastController, LoadingController, Platform } from '@ionic/angular';
import jsQR from 'jsqr';
import {Router} from '@angular/router';
import {BackService} from '../../../services/back.service';
@Component({
  selector: 'app-scanner-qrcode',
  templateUrl: './scanner-qrcode.page.html',
  styleUrls: ['./scanner-qrcode.page.scss'],
})
export class ScannerQrcodePage implements OnInit {
  @ViewChild('video', { static: false }) video: ElementRef;
  @ViewChild('canvas', { static: false }) canvas: ElementRef;
  @ViewChild('fileinput', { static: false }) fileinput: ElementRef;

  canvasElement: any;
  videoElement: any;
  canvasContext: any;
  scanActive = false;
  scanResult = null;
  commandeToValider: any;
  loading: HTMLIonLoadingElement = null;
  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private plt: Platform,
    private router: Router,
    private backService: BackService
  ) {
    const isInStandaloneMode = () =>
      'standalone' in window.navigator && window.navigator['standalone'];
    if (this.plt.is('ios') && isInStandaloneMode()) {
      // E.g. hide the scan functionality!
    }
  }
  ngOnInit() {
    this.startScan();
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
    this.videoElement = this.video.nativeElement;
  }

  // Helper functions
  reset() {
    this.scanResult = null;
  }

  stopScan() {
    this.scanActive = false;
    this.router.navigateByUrl('home/livraison');
  }
  async startScan() {
    // Not working on iOS standalone mode!
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' }
    });

    this.videoElement.srcObject = stream;
    // Required for Safari
    this.videoElement.setAttribute('playsinline', true);

    this.loading = await this.loadingCtrl.create({});
    await this.loading.present();

    this.videoElement.play();
    requestAnimationFrame(this.scan.bind(this));
  }
  async scan() {
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      if (this.loading) {
        await this.loading.dismiss();
        this.loading = null;
        this.scanActive = true;
      }

      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;

      this.canvasContext.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });

      if (code){
        this.scanActive = false;
        this.scanResult = code.data;
        //REDIRECTION ET UPDATE COMMANDE\\ => getcommandeByCode
        console.log(code.data); //information du scan
        this.backService.getCommandeByCode(+code.data).subscribe((commandesAValiver: any )=>{
          console.log(commandesAValiver);
          commandesAValiver.forEach(com=>{
            console.log(com);
            this.backService.updateCommande(com,'livre');
          });
          //faire des Teste
          return;
        });
      } else {
        if (this.scanActive) {
          requestAnimationFrame(this.scan.bind(this));
        }
      }
    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
  }
}

