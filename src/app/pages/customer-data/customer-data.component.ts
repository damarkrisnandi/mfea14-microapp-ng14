import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer, Representative } from './customer';
import { CustomerService } from './customerservice';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent {
    customers: Customer[] | undefined = [];

    selectedCustomers: Customer[] | undefined = [];

    representatives: Representative[] | undefined = [];

    statuses: any[] | undefined = [];

    loading: boolean = true;

    @ViewChild('dt') table: Table;

    constructor(private customerService: CustomerService, private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.customerService.getCustomersLarge().then(customers => {
            this.customers = customers;
            this.loading = false;
        });

        this.representatives = [
            {name: "Amy Elsner", image: 'amyelsner.png'},
            {name: "Anna Fali", image: 'annafali.png'},
            {name: "Asiya Javayant", image: 'asiyajavayant.png'},
            {name: "Bernardo Dominic", image: 'bernardodominic.png'},
            {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
            {name: "Ioni Bowcher", image: 'ionibowcher.png'},
            {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
            {name: "Onyama Limba", image: 'onyamalimba.png'},
            {name: "Stephen Shaw", image: 'stephenshaw.png'},
            {name: "XuXue Feng", image: 'xuxuefeng.png'}
        ];

        this.statuses = [
            {label: 'Unqualified', value: 'unqualified'},
            {label: 'Qualified', value: 'qualified'},
            {label: 'New', value: 'new'},
            {label: 'Negotiation', value: 'negotiation'},
            {label: 'Renewal', value: 'renewal'},
            {label: 'Proposal', value: 'proposal'}
        ]
        this.primengConfig.ripple = true;
    }

    onActivityChange(event: any) {
        const value = event.target.value;
        if (value && value.trim().length) {
            const activity = parseInt(value);

            if (!isNaN(activity)) {
                this.table.filter(activity, 'activity', 'gte');
            }
        }
    }

    onDateSelect(value: any) {
        this.table.filter(this.formatDate(value), 'date', 'equals')
    }

    formatDate(date: Date) {
        let month = date.getMonth() + 1;
        let day = date.getDate();

        let strDay = day.toString();
        let strMon = month.toString();

        if (month < 10) {
            strMon = '0' + strMon;
        }

        if (day < 10) {
            strDay = '0' + strDay;
        }

        return date.getFullYear() + '-' + strMon + '-' + strDay;
    }

    onRepresentativeChange(event: any) {
        this.table.filter(event.value, 'representative', 'in')
    }
}
