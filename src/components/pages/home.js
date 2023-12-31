import RevenueByJobLocation from "../charts/Bar";
import RevenueByJob from "../charts/Bar2";
import classes from "./Home.module.css";

//TASK 4 --> Dashboard of the Application with Charts

export default function Home() {
  return (
    <div className={classes.bg}>
      <div>
        <div className={classes.heading}>
          <h1 className={classes.h2}>Company Metrics</h1>
        </div>
        <div className={classes.metrics}>
          <div className={classes.flex}>
            <div className={classes.color}></div>
            <div>
              <div className={classes.number1}>$406,411.29</div>
              <div className={classes.label}>Total Revenue</div>
            </div>
          </div>
          <div className={classes.flex}>
            <div className={classes.color}></div>
            <div>
              <div className={classes.number}>$620</div>
              <div className={classes.label}>Total Jobs Avg</div>
            </div>
          </div>
          <div className={classes.flex}>
            <div className={classes.color}></div>
            <div>
              <div className={classes.number}>$655</div>
              <div className={classes.label}>Tickets Created</div>
            </div>
          </div>
          <div className={classes.flex}>
            <div className={classes.color}></div>
            <div>
              <div className={classes.number}>$735</div>
              <div className={classes.label}>Tickets Scheduled</div>
            </div>
          </div>
          <div className={classes.flex}>
            <div className={classes.color}></div>
            <div>
              <div className={classes.number2}>$110,448.8</div>
              <div className={classes.label}>Outstanding Amount</div>
            </div>
          </div>
          <div className={classes.flex}>
            <div className={classes.color}></div>
            <div>
              <div className={classes.number}>$105</div>
              <div className={classes.label}>Memberships Sold</div>
            </div>
          </div>
          <div className={classes.flex}>
            <div className={classes.color}></div>
            <div>
              <div className={classes.number}>$436</div>
              <div className={classes.label}>Jobs Completed</div>
            </div>
          </div>
          <div className={classes.flex}>
            <div className={classes.color}></div>
            <div>
              <div className={classes.number}> 12</div>
              <div className={classes.label}>Total Canceled</div>
            </div>
          </div>
        </div>
        <div className={classes.flex2}>
          <div className={classes.chart}>
            <div className={classes.heading}>
              <h1 className={classes.h1}>Revenue By Location</h1>
            </div>
            <div className={classes.bar}>
              <RevenueByJobLocation />
            </div>
          </div>
          <div className={classes.chart}>
            <div className={classes.heading}>
              <h1 className={classes.h1}>Revenue By Job</h1>
            </div>
            <div className={classes.bar}>
              <RevenueByJob />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
