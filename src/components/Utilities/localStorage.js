const getStoredJobApplication = () =>{
    const storedApplication = localStorage.getItem('job-application')
    if(storedApplication){
        return JSON.parse(storedApplication)
    }

        return []
}

const saveJobApplication = id =>{
const storedJobApplication = getStoredJobApplication()
const exists = storedJobApplication.find(jobId => jobId === id)
if(!exists){
    storedJobApplication.push(id)
    localStorage.setItem('job-application', JSON.stringify(storedJobApplication))

}
}

export{saveJobApplication, getStoredJobApplication}