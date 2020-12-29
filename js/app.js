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

//           <div class = about>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, a ea. In incidunt repellendus accusamus ullam odio nostrum magni aspernatur maxime iusto. Nemo corporis dolorem odit neque incidunt quia eveniet.</p>
//       </div>
//       <div class = projects>
//         <p></p>
//       </div>
//       <div class = contact>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptates tenetur, sed tempore similique iusto quaerat facilis atque alias laboriosam corrupti asperiores nam quae eveniet voluptatem quod, veniam deserunt necessitatibus.</p>
// </div>