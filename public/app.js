import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { payment } from "./classes/payment.js";
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
let doc;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Tuples استفاده از
    let values; // در اینجا تایپ تک به تک مقادیر رو مشخص کردیم
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'صورتحساب') {
        doc = new Invoice(...values); // به من برگردون number یعنی valueAsNumber از نوع عدد هست پس بعد از دات یا . مینویسیم amount چون تایپ
    }
    else {
        doc = new payment(...values);
    }
    list.render(doc, type.value, 'end');
    amount.value = '';
    tofrom.value = '';
    details.value = '';
});
