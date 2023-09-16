
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";


const ul = document.querySelector('ul')!;

const list = new ListTemplate(ul)

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;



let doc: HasFormatter;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();


    // Tuples استفاده از
    let values: [string, string, number]; // در اینجا تایپ تک به تک مقادیر رو مشخص کردیم

        values = [tofrom.value, details.value, amount.valueAsNumber];


    if (type.value === 'صورتحساب') { 
        doc = new Invoice(...values); // به من برگردون number یعنی valueAsNumber از نوع عدد هست پس بعد از دات یا . مینویسیم amount چون تایپ
    } else {
        doc = new payment(...values)
    }

    list.render(doc, type.value, 'end')

    amount.value = '';
    tofrom.value = '';
    details.value = '';

})
