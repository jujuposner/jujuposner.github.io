///////////////////////////////////////
// PULL AND RENDER DATA FROM GOOGLE SHEET 
/////////////////////////////////////////

 $.ajax("https://spreadsheets.google.com/feeds/list/1aea6yjzeASKr-6tph4otjJNS53mtmwysXcFZIPclVX4/1/public/full?alt=json")
.then((data) => {
    //CHECKING MY DATA
    console.log(data)

    // put our projects in a variable
    const rawProjects = data.feed.entry

    //log our projects
    console.log(rawProjects)

    //prettify our projects array
    const projects = rawProjects.map((project) => {
        return{
            name: project.gsx$name$t,
            img: project.gsx$img.$t,
            description: project.gsx$description.$t,
            live: project.gsx$live.$t,
            github: project.gsx$github.$t
        }
    })
    console.log(rawProjects)

    //////////////////////////////////////////
    //USE JQUERY TO RENDER PROJECTS TO PAGE
    /////////////////////////////////////////
})


{/* <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul> */}
