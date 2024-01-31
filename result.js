
const url = window.location.href
const params = new URL(url).searchParams


const regno = params.get("regNumber")
const name1 = params.get("name")
const age = params.get("age")
const sex = params.get("sex")
const address = params.get("address")
const contact = params.get("contact")
const resultContainer = document.getElementById('result');


resultContainer.innerHTML = `
   <p>It is certified that
    ${name1}
    of
    Registration No: ${regno}
    ,
    Age: ${age},
    Sex: ${sex}
    Contact Number: ${contact} 
    from
    ${address}
    is a bonafide of this college.</p>
`;

const dbutton = document.querySelector('#download')
dbutton.addEventListener('click', () => {
   window.print()
})