import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as html2canvas from "html2canvas";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent{

	data: any;

	constructor() {
		pdfMake.vfs = pdfFonts.pdfMake.vfs;
		
		this.data = {
			labels: ['A','B','C'],
			datasets: [
				{
					data: [300, 50, 100],
					backgroundColor: [
						"#FF6384",
						"#36A2EB",
						"#FFCE56"
					],
					hoverBackgroundColor: [
						"#FF6384",
						"#36A2EB",
						"#FFCE56"
					]
				}] 
			};
	}

	pdfdownload() {

  		html2canvas(document.body).then(canvas => {
	        var data = canvas.toDataURL();
	        console.log(data);
	        var docDefinition = {
	        	content: [{
	        		image: data,
	        		width: 500,
	        	}]
	        };
	        pdfMake.createPdf(docDefinition).download("Score_Details.pdf");
	        }
	    );
	}
}
