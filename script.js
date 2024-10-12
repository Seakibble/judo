let $glossary = document.getElementById('glossary')
let $search = document.getElementById('search')


function getTerms() {
    let search = $search.value

    let output = ''
    let terms = ''

    let letter = null
    let keys = Object.keys(judoTerms).sort()

    let exact = null
    if (search) {
        keys = keys.filter((term) => {
            let searchClean = search.toLowerCase()

            let inTerm = term

            if (inTerm.includes(searchClean)) {
                if (inTerm == search) {
                    exact = search
                }
                return inTerm
            }

            let inName = judoTerms[term].name
            if (inName.includes(searchClean)) {
                return inName
            }

            let inType = judoTerms[term].type 
            if (inType) {
                inType = inType
            }

            if (inType) {
                return inType.includes(searchClean)
            } else {
                return false
            }
        })
        output += `<p class='results'>${results(keys.length)}. ${exact ? ' Exact match:':''}</p>`
    } else {
        output += `<p class='results'>${results(keys.length)}. Showing all terms:</p>`
    }

    if (exact) {
        output += '<div class="exact"><div class="terms">' + makeDefinition(exact, true) + '</div></div>'
        output += `<p class='results'>Other results:</p>`
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

        terms += makeDefinition(term)

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

function makeDefinition(term) {
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

    return `<p><strong>${term}</strong> — ${judoTerms[term].name} ${wazaText}${linkText}</p>`
}