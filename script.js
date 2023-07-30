const form1 = document.getElementById('form-1').addEventListener('submit', function(event){
    event.preventDefault();

    const formData = new FormData(event.target);

    const formDataObject = {
        name: formData.get('name'),
        email: formData.get('email'),
        freeForm: formData.get('free-form'),
        submit: formData.get('form-1'),
    };

    localStorage.setItem('form-1', JSON.stringify(formDataObject));

    alert('Form Data Was Saved');

});