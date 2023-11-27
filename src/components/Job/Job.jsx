import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router-dom";


const Job = ({job}) => {
    const {id,logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className="px-5 py-2 font-extrabold border rounded border-lime-300 mr-4">{remote_or_onsite}</button>
        <button className="px-5 py-2 font-extrabold border rounded border-lime-300 mr-4">{job_type}</button>
    </div>
    <div className="mt-4 flex gap-4">
      <h2 className="flex"><FaLocationDot className="text-2xl mr-2"></FaLocationDot> {location}</h2>
      <h2 className="flex"><HiOutlineCurrencyDollar className="text-2xl mr-2"></HiOutlineCurrencyDollar> {salary}</h2>
    </div>
    <div className="card-actions">
      <Link to={`/job/${id}`}>
      <button className="btn btn-primary">View Details</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default Job;