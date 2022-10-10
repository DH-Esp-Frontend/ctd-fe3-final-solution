import { useContext } from "react";
import { ContextGlobal } from './utils/global.context';
import styles from './ScheduleForm.module.css';

const ScheduleForm = () => {
  const { theme } = useContext(ContextGlobal)
  const isDarkMode = theme === "dark" || false

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);
    //TODO Do the Scheduling in API
  };

  return (
    <div className={`text-center container ${isDarkMode ? styles.cardDark : ''}`}>
      <form onSubmit={handleSubmit}>
        <div className={`row ${styles.rowSpacing}`}>
          <div className="col-sm-12 col-lg-6">
            <label htmlFor="doctor" className="form-label">Doctor</label>
            <select
              className="form-select"
              name="doctor"
              id="doctor"
            >
              <option value="1">One</option>
            </select>
          </div>
          <div className="col-sm-12 col-lg-6">
            <label htmlFor="patient" className="form-label">Patient</label>
            <select
              className="form-select"
              name="patient"
              id="patient"
            >
              <option value="2">Two</option>
            </select>
          </div>
        </div>
        <div className={`row ${styles.rowSpacing}`}>
          <div className="col-12">
            <label htmlFor="appointmentDate" className="form-label">Date</label>
            <input className="form-control" id="appointmentDate" name="appointmentDate" type="datetime-local" />
          </div>
        </div>
        <div className={`row ${styles.rowSpacing}`}>
          <button className={`btn btn-${isDarkMode ? 'dark' : 'light'} ${styles.button}`} type="submit">Schedule</button>
        </div>
      </form>
    </div>
  )
}

export default ScheduleForm;