let $glossary = document.getElementById('glossary')
let $search = document.getElementById('search')


function getTerms() {
    let search = $search.value

    let output = ''
    let terms = ''

    let letter = null
    let keys = Object.keys(judoTerms).sort()

    if (search) {
        keys = keys.filter((term) => {
            return (term.includes(search.toLowerCase()) || judoTerms[term].includes(search.toLowerCase()))
        })
        output += `<p class='results'>${results(keys.length)}.</p>`
    
    } else {
        output += `<p class='results'>All terms. ${results(keys.length)}.</p>`
    }

    keys.forEach(term => {
        if (term[0] != letter) {
            if (terms != '') {
                output += `<div class='terms'>${terms}</div>`
                terms = ''
            }
            letter = term[0]
            output += '<h2>'+letter.toUpperCase()+'</h2>'
        }

        terms += `<p><strong>${term}</strong> - ${judoTerms[term]}</p>` 

    })

    if (terms != '') {
        output += `<div class='terms'>${terms}</div>`
        terms = ''
    }

    $glossary.innerHTML = output
    $glossary.classList.add('fadein')
    $glossary.addEventListener('animationend', () => {
        $glossary.classList.remove('fadein')
        $glossary.removeEventListener('animationend')
    })
}
getTerms()

$search.addEventListener('input', getTerms)

function results(n) {
    if (n > 1) return n + ' results' 
    else if (n == 1) return n + ' result'
    else return 'No results'
}