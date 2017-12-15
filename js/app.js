$.ajax({
    url: 'http://localhost:3000/igdb'
}).done(function(data) {
    console.log('data', data);
    // $('.content').empty();
    // for (i = 0; i < data.length; i++) {
    //     $('.content').append('<div>Name: ' + data[i].name + '</div>');
    // }
    console.log(data);
})
