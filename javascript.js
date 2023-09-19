const data = [
    { country: "Afghanistan", currency: "AFN" },
    { country: "Albania", currency: "ALL" },
    { country: "Algeria", currency: "DZD" },
    { country: "Andorra", currency: "EUR" },
    { country: "Angola", currency: "AOA" },
    { country: "Argentina", currency: "ARS" },
    { country: "Armenia", currency: "AMD" },
    { country: "Azerbaijan", currency: "AZN" },
    { country: "Bahamas", currency: "BSD" },
    { country: "Bahrain", currency: "BHD" },
    { country: "Bangladesh", currency: "BDT" },
    { country: "Barbados", currency: "BBD" },
    { country: "Belarus", currency: "BYN" },
    { country: "Belgium", currency: "EUR" },
    { country: "Belize", currency: "BZD" },
    { country: "Benin", currency: "XOF" },
    { country: "Bhutan", currency: "BTN" },
    { country: "Bolivia", currency: "BOB" },
    { country: "Bosnia and Herzegovina", currency: "BAM" },
    { country: "Brazil", currency: "BRL" }
];


function search(type) {
    if (type === 'country') {
        const searchTerm = document.getElementById('countrySearch').value;
        if (!searchTerm.match(/^[a-zA-Z\s]{1,20}$/)) {
            alert("Invalid input! Ensure it's a country name with no numbers and up to 20 characters.");
            return;
        }

        const results = data.filter(d => d.country.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 5);
        alert(JSON.stringify(results));

    } else if (type === 'currency') {
        const searchTerm = document.getElementById('currencySearch').value;
        if (!searchTerm.match(/^[A-Z]{3}$/)) {
            alert("Invalid input! Ensure it's a 3-letter currency code in uppercase.");
            return;
        }

        const results = data.filter(d => d.currency === searchTerm).slice(0, 5);
        alert(JSON.stringify(results));
    }
}

function searchOnEnter(event, type) {
    if (event.key === 'Enter') {
        search(type);
    }
}
