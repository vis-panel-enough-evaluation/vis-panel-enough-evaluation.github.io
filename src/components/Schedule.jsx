import React from "react";

import styles from "./Schedule.module.scss";

const Schedule = () => {


	// make a schedule in the form of a table

// 	Introduction by Organizers: 5 minutes
// Presentation by Panelists: 25 minutes(5 Panelist X 5 minutes = 25 minutes)
// Panel Discussion and Q & A : 40 minutes
// Closing by Organizers: 5 minutes 
	return (
		<div>
			<table>
				<tr>
					<th>Time</th>
					<th>Event</th>
				</tr>
				<tr>
					<td style={{ paddingBottom: "10px" }}>10:15 PM - 10:20 PM</td>
					<td style={{ paddingBottom: "10px" }}>Introduction by Organizers</td>
				</tr>
				<tr>
					<td>10:20 PM - 10:25 PM</td>
					<td>Presentation by <b>Niklas Elmqvist</b></td>
				</tr>
				<tr>
					<td>10:25 PM - 10:30 PM</td>
					<td>Presentation by <b>Tobias Isenberg</b></td>
				</tr>
				<tr>
					<td>10:30 PM - 10:35 PM</td>
					<td>Presentation by <b>Rita Borgo</b></td>
				</tr>
				<tr>
					<td>10:35 PM - 10:40 PM</td>
					<td>Presentation by <b>Michael Sedlmair</b></td>
				</tr>
				<tr>
					<td style={{ paddingBottom: "10px" }} >10:40 PM - 10:45 PM</td>
					<td style={{ paddingBottom: "10px" }} >Presentation by <b>Cindy Xiong Bearfield</b></td>
				</tr>
				<tr>
					<td style={{ paddingBottom: "10px" }} >10:45 PM - 11:25 PM</td>
					<td style={{ paddingBottom: "10px" }} >Panel Discussion and Q & A</td>
				</tr>
				<tr>
					<td>11:25 PM - 11:30 PM</td>
					<td>Closing by Organizers</td>
				</tr>
			</table>

		</div>
	)
}

export default Schedule;