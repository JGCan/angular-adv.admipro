import { Component, Input } from '@angular/core';
import { Colors, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title: string = 'sin titulo'
 
  // Doughnut
  @Input('labels') doughnutChartLabels: Label[] = ['Label1', 'Label2', 'Label3'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 400],
  ];

  public colors: Colors[] = [
    { backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }
  ]
}
