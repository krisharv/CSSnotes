// scroll stuff
function scrollTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' })
}

var bar = document.getElementById('sBar')
var btn = document.getElementById('goTopBtn')
var allLinks = document.querySelectorAll('.sideLink')
var ids = ['s31', 's32', 's33', 's34', 'qref']

window.addEventListener('scroll', function () {
     var st = document.documentElement.scrollTop
     var totalH = document.documentElement.scrollHeight - window.innerHeight
    bar.style.width = (st / totalH * 100) + '%'

    // show back to top btn after 400px
    if (st > 400) {
        btn.classList.add('show')
    } else {
         btn.classList.remove('show')
    }

    // highlight active nav link
    ids.forEach(function (id, i) {
         var el = document.getElementById(id)
        if (!el) return
            var r = el.getBoundingClientRect()
         if (r.top <= 120 && r.bottom > 120) {
             allLinks.forEach(function (l) { l.classList.remove('activeLink') })
            if (allLinks[i]) allLinks[i].classList.add('activeLink')
        }
     })
})