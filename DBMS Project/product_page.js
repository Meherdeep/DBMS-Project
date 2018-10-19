$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
});

const root = document.getElementById('products');

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            console.log(movie.title);

            const item = document.createElement('div');
            item.setAttribute('class', 'item  col-xs-4 col-md-3');

            const thumbnail = document.createElement('div');
            thumbnail.setAttribute('class', 'thumbnail');

            const image = document.createElement('img');
            image.setAttribute('class', 'group list-group-image');
            image.setAttribute('src', 'http://res.cloudinary.com/dnhwxgf8i/image/upload/c_scale,h_250,w_400/v1488011915/mockup3_kxxwfy.jpg');
            image.setAttribute('alt', 'test_image');

            const category = document.createElement('div');
            category.setAttribute('class', 'category');

            const catName = document.createElement('h5');
            catName.setAttribute('class', 'category-name');
            catName.textContent = movie.title;

            const caption = document.createElement('div');
            caption.setAttribute('class', 'caption');

            const itemHead = document.createElement('h4');
            itemHead.setAttribute('class', 'group inner list-group-item-heading');
            itemHead.textContent = movie.title;

            const row = document.createElement('div');
            row.setAttribute('class', 'row');

            const col = document.createElement('div');
            col.setAttribute('class', 'col-xs-12 col-md-6');

            const lead = document.createElement('p');
            lead.setAttribute('class', 'lead');
            lead.textContent = "$2,100";

            const buttons = document.createElement('div');
            buttons.setAttribute('class', 'btn-group');

            const btnDetails = document.createElement('a');
            btnDetails.setAttribute('class', 'btn btn-details');
            btnDetails.setAttribute('href', 'http://www.jquery2dotnet.com');
            btnDetails.textContent = "Details";

            const success = document.createElement('a');
            success.setAttribute('class', 'btn btn-success');
            success.setAttribute('href', 'http://www.jquery2dotnet.com');
            success.textContent = "Add to Cart";

            root.appendChild(item);
            item.appendChild(thumbnail);
            thumbnail.appendChild(image);
            category.appendChild(catName);
            thumbnail.appendChild(caption);
            caption.appendChild(itemHead);
            caption.appendChild(row);
            row.appendChild(col);
            col.appendChild(lead);
            row.appendChild(buttons);
            buttons.appendChild(btnDetails);
            buttons.appendChild(success);

        });
    }
    else
    {
        console.log('error');
    }
}
request.send();