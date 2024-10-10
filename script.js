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
            return (term.includes(search.toLowerCase()) || judoTerms[term].name.includes(search.toLowerCase()))
        })
        output += `<p class='results'>${results(keys.length)}.</p>`
    
    } else {
        output += `<p class='results'>Showing all terms. ${results(keys.length)}.</p>`
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

        let waza = judoTerms[term].type
        let wazaText = ''
        if (waza) {
            let wazaTagText = waza.replaceAll('-', '&#8209;')
            wazaText = `<br><span class='waza ${waza}'>${wazaTagText}</span> `
        }

        let links = judoTerms[term].links
        let linkText = []
        if (links) {
            Object.keys(links).forEach(link => {
                linkText.push(`<a class="external" href='${links[link]}' target="_blank">${link}</i></a>`)
            })
        }
        if (linkText.length > 0) {
            linkText = `<span class='links'>| <em>videos:&nbsp;${linkText.join(', ')}</em></span>`
        }

        terms += `<p><strong>${term}</strong> - ${judoTerms[term].name} ${wazaText}${linkText}</p>` 

    })

    if (terms != '') {
        output += `<div class='terms'>${terms}</div>`
        terms = ''
    }

    $glossary.innerHTML = output
    $glossary.classList.add('fadein')
    $glossary.addEventListener('animationend', fadeIn)
}
function fadeIn() {
    $glossary.classList.remove('fadein')
    $glossary.removeEventListener('animationend', fadeIn)
}
getTerms()

let searchTimer = null
$search.addEventListener('input', () => {
    if (searchTimer !== null) {
        clearTimeout(searchTimer)
    }
    searchTimer = setTimeout(() => {
        getTerms()
    }, 250)
})

function results(n) {
    if (n > 1) return n + ' results' 
    else if (n == 1) return n + ' result'
    else return 'No results'
}