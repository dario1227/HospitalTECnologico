import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import {EvaluacionService} from '../../Connections/EvaluacionService';
 import * as html2pdf from 'html2pdf.js'
import {element} from 'protractor';
@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss'],
})
export class ReporteComponent implements OnInit {
  tratodata = 0;
  evaluaciones = [];
  higienedata = 0;
  puntualidaddata = 0;
  constructor(private EvaluacionService: EvaluacionService) { }

  ngOnInit() {
    this.EvaluacionService.getevaluacion().subscribe(res => this.evaluaciones = res as []);
  }
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Trato Personal','Higiene de Hospital','Puntualiad de Citas'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [Number(this.evaluaciones.length),this.higienedata,this.puntualidaddata], label: 'Datos Promedios' },
  ];

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  public randomize(): void {
    this.EvaluacionService.getevaluacion().subscribe(res => this.evaluaciones = res as []);
    var i = 0;
    this.puntualidaddata =0;
    this.higienedata = 0;
    this.tratodata = 0;
    while(this.evaluaciones.length>i) {
      this.tratodata += this.evaluaciones[i].trato;
      this.puntualidaddata += this.evaluaciones[i].puntualidad;
      this.higienedata += this.evaluaciones[i].higiene;
      i++;

    }
    this.tratodata /= this.evaluaciones.length;
    this.higienedata/= this.evaluaciones.length;
    this.puntualidaddata /= this.evaluaciones.length;
    const data= [this.tratodata,this.higienedata,this.puntualidaddata]
    this.barChartData[0].data = data;
  }
  public PDF(){
    const options={
      filename:'Reporte.pdf',
      image:{type:'jpeg'},
      html2canvas : { scale: 3, width:1400},
    };
    const content : Element = document.getElementById('contentReporte');
    html2pdf()
      .from(content)
      .set(options)
      .save();

  }

}
