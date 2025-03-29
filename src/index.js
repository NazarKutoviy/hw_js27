import Handlebars from 'handlebars';
import { products } from '../data.js';
import template from './template.hbs';

const app = document.getElementById('app');

function render() {
    app.innerHTML = template({ products });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const id = Number(event.target.closest('li').dataset.id);
            deleteProduct(id);
        });
    });
}

function deleteProduct(id) {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        render();
    }
}

render();
