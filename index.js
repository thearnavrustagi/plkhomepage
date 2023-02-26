data = [{
    img : '1.png',
    name : 'Founders Day',
    content : `Plaksha University will celebrate its first in-person Founders Day and conduct an Investiture Ceremony to commemorate Dr. Shankar Sastry’s appointment as our Founding Chancellor`
},{
    img : '2.png',
    name : 'ConfAi 2023',
    content : `Plaksha's 3-day multi-track ‘Conference on Artificial Intelligence’ is coming back from 22-24 March 2023.`
},{
    img : '3.png',
    name : "PhD Mini-Symposium",
    content : `Designed to foster exchange of experiences & knowledge among doctoral students, Mini-symposium will allow them to listen to distinguished speakers' multidisciplinary lectures, communicate their research and receive feedback.`
}]
main = async () => {
    str = await fetch('./card.html').
    then(response => response.text())
    str = str.toString()

    for (element of data) {
        console.log(typeof str)
        innerhtml = str.replace(/IMG/g,element.img).replace(/NAME/g,element.name).replace(/CONTENT/g,element.content)
        document.getElementById("holder").innerHTML += innerhtml
    }
}

main()