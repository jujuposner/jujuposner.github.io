///////////////////////////////////////
// PULL AND RENDER DATA FROM GOOGLE SHEET 
/////////////////////////////////////////

 $.ajax("https://spreadsheets.google.com/feeds/list/1aea6yjzeASKr-6tph4otjJNS53mtmwysXcFZIPclVX4/1/public/full?alt=json")
.then((data) => {

    // put our projects in a variable
    const rawProjects = data.feed.entry

    //prettify our projects array
    const projects = rawProjects.map((project) => {
        return{
            name: project.gsx$name.$t,
            github: project.gsx$github.$t,
            live: project.gsx$live.$t,
            img: project.gsx$img.$t,
        }
    })
console.log(projects)

    const final = projects.map((project) => {
        return `
        <my-card name=${project.name} git=${project.git}
         live=${project.live} img=${project.img}></my-card>`
    })

    const $section = $('section')

    $section.html(final.join(""))

})

// ---------------SANDWICH--------------

const $sandwich = $('#sandwich')
const $menu = $('#menu')

$sandwich.on('click', (event) => {

    if ($menu.css('display') === 'flex'){
        $menu.css('display', 'none')
    } else {
        $menu.css('display', 'flex')
    }

})