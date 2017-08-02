import { Component, OnInit } from '@angular/core';
import { calculateMonthlyPayment, calculateAmortization } from './mortage.service';

@Component({
    selector: 'mortage-home',
    template:`
    <header>
        <h1>Mortgage Calculator</h1>
    </header>
    <div class="content">
        <div class="form">
            <div>
                <label>Principal:</label>
                <input type="text" id="principal" value="200000" [(ngModel)]="principal"/>
            </div>
            <div>
                <label>Years:</label>
                <input type="text" id="years" value="30" [(ngModel)]="years"/>
            </div>
            <div>
                <label htmlFor="rate">Rate:</label>
                <input type="text" id="rate" value="5.0" [(ngModel)]="rate"/>
            </div>
            <div>
                <label htmlFor="calcBtn"></label>
                <button class="calc" (click)="onCalculate($event)">Calculate</button>
            </div>
        </div>
        <div id="amort" [hidden]="!amortization.length">
            <h2>Monthly Payment: <span id="monthlyPayment" class="currency">{{monthlyPayment}}</span></h2>
            <h3>Monthly Rate: <span id="monthlyRate">{{monthlyRate}}</span></h3>
            <h3>Monthly Principal: <span id="monthlyPrincipal">{{monthlyPrincipal}}</span></h3>
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th class="principal">Principal</th>
                        <th class="stretch"></th>
                        <th class="interest">Interest</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody id="amortization">
                    <ng-container *ngFor="let amort of amortization; let i = index;">
                        <tr>
                            <td>{{i + 1}}</td>
                            <td class="principal">{{round(amort.principalY)}}</td>
                            <td class="stretch">
                                <div class="flex">
                                    <div class="bar principal" [style.flex]="amort.principalY">
                                    </div>
                                    <div class="bar interest" [style.flex]="amort.interestY">
                                    </div>
                                </div>
                            </td>
                            <td class="currency left">{{round(amort.interestY)}}</td>
                            <td class="currency">{{round(amort.balance)}}</td>
                        </tr>
                    </ng-container>
                </tbody>
            </table>
        </div>
    </div>
    `
})

export class MortageHomeComponent implements OnInit {

    principal: number = 200000;
    years: number = 30;
    rate: number = 6.0;

    monthlyPayment: string = "";
    monthlyRate: string = "";
    monthlyPrincipal: string = "";
    amortization: Array<any> = [];

    constructor() { }

    ngOnInit() {

    }

    onCalculate(): void {
        let { monthlyPayment, monthlyRate, monthlyPrincipal, amortization } = calculateAmortization(this.principal, this.years, this.rate);
        this.monthlyPayment = monthlyPayment.toFixed(2);
        this.monthlyRate = (monthlyRate * 100).toFixed(2);
        this.monthlyPrincipal = monthlyPrincipal.toFixed(2);
        this.amortization = amortization;
    }

    round(value: number): number {
        return Math.round(value);
    }
}

