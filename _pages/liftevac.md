---
layout: page
permalink: /liftevac/
title: "Lift Evac"
timer: true
script_src: 
  - jquery-3.4.1.min.js
  - timer.js
---
# Lift Evac Process/Protocol Guide

  <div class="w3-row">
    <div class="w3-margin w3-container w3-card">
      <h2>Assess (Phase 0)</h2>
	  <label for="lift" class="w3-margin-right">Lift: </label>
	  <select id="lift" name="lift" class="w3-round">
		<option>First Class</option>
		<option>Dipsy</option>
		<option>Alpine</option>
		<option>Strata</option>
		<option>Eastwind</option>
	  </select>
	  <p><label for="incidenttime" class="w3-margin-right">Lift stopped at: </label><input type="time" id="incidenttime" name="incidenttime" oninput="showTime()"></p>
		<div class="w3-margin-bottom w3-border w3-border-red" style="padding: 5px; margin:-8px;">
			<h6> 4 min: Notify Patrol Base</h6>
			<table>
				<tr>
					<td><label for="notifiedat" class="w3-margin-right">Notified:</label></td>
					<td><input type="time" id="notifiedat"></td>
				</tr>
				<tr>
					<td><label for="notifiedby" class="w3-margin-right">By:</label></td>
					<td><input type="text" id="notifiedby"></td>
				</tr>
			</table>
		<ul><li>Base to monitor Ch.1; listen for mechanic dispatch</li></ul>
		</div>		
		<div class="w3-margin-bottom w3-margin-top w3-border w3-border-red" style="padding: 5px; margin:-8px;">
			<h6> 5 min: Notify Lift Maintenance</h6>
			<p>(if not already done)</p>
			<table>
				<tr>
					<td><label for="notifiedliftat" class="w3-margin-right">Notified:</label></td>
					<td><input type="time" id="notifiedliftat"></td>
				</tr>
				<tr>
					<td><label for="notifiedliftname" class="w3-margin-right">Whom:</label></td>
					<td><input type="text" id="notifiedliftname"></td>
				</tr>
			</table>
		<ul><li>If lift maintenance is not available, notify resort management (MOD)</li></ul>
		</div>		
		<div class="w3-margin-bottom w3-margin-top w3-border w3-border-red" style="padding: 5px; margin:-8px;">
			<h6> 10 min: Stranded Staff</h6>
			<table class="w3-table" id="tbStranded">
				<thead>
					<tr class="w3-red">
						<th scope="col" class="w3-border w3-border-white" id="staff"># of staff</th>
						<th scope="col" class="w3-border w3-border-white" id="tower">Tower #</th>
						<th scope="col" class="w3-border w3-border-white" id="chair">Chair</th>
					</tr>
				</thead>
				<tr class="w3-border-bottom w3-border-red">
					<td><input type="number" style="width:50px" aria-labelledby="staff"></td>
					<td><input type="number" style="width:50px" aria-labelledby="tower"></td>
					<td><input type="number" style="width:60px" aria-labelledby="chair"></td>
				</tr>
			</table>
		<button class="w3-button w3-round w3-theme w3-margin" onclick="addStranded()">Add row</button>
		</div>
	<p><strong>WAIT FOR INSTRUCTION FROM RESORT MANAGEMENT</strong></p>
  </div>

  <div class="w3-row">
    <div class="w3-margin w3-container w3-card">
      <h2>Standby (Phase 1)</h2>
	  On order from Resort Management
      <table>
			<tr>
				<td><label for="p1notified" class="w3-margin-right">Notified:</label></td>
				<td><input type="time" id="p1notified"></td>
			</tr>
			<tr>
				<td><label for="p1notifyer" class="w3-margin-right">By:</label></td>
				<td><input type="text" id="p1notifyer"></td>
			</tr>
		</table>
		<ul>
			<li>Establish communication network (ch 2)</li>
			<li>Designate Evac Supervisor</li>
			<li>All available personnel to Top Duty</li>
			<li>Assemble evac teams</li>
			<li>Break evac bag seals</li>
			<li>Belayers put on harnesses</li>
			<li>Reposition resources as needed</li>
		</ul>
    </div>
  </div>
  
  <div class="w3-row">
    <div class="w3-margin w3-container w3-card">
      <h2>Deploy (Phase 2)</h2>
	  On order from Resort Management
      <table>
			<tr>
				<td><label for="p2notified" class="w3-margin-right">Notified:</label></td>
				<td><input type="time" id="p2notified"></td>
			</tr>
			<tr>
				<td><label for="p2notifyer" class="w3-margin-right">By:</label></td>
				<td><input type="text" id="p2notifyer"></td>
			</tr>
		</table>
		<ul>
			<li>Teams deploy to assigned spans and STANDBY</li>
			<li>Teams report "in position"</li>
			<li>Evac Supervisor notifies Resort Management when ready</li>
		</ul>
    </div>
  </div>

  <div class="w3-row">
    <div class="w3-margin w3-container w3-card">
      <h2>Evacuate (Phase 3)</h2>
	  On order from Resort Management
      <table>
			<tr>
				<td><label for="p3notified" class="w3-margin-right">Notified:</label></td>
				<td><input type="time" id="p3notified"></td>
			</tr>
			<tr>
				<td><label for="p3notifyer" class="w3-margin-right">By:</label></td>
				<td><input type="text" id="p3notifyer"></td>
			</tr>
		</table>
		<ul>
			<li>Lift power lockout: Evacuation Supervisor MUST hear and POSITIVELY acknowledge that the lift has been locked out before starting by the Lift Supervisor</li>
			<li>Order evacuation</li>
			<li>Each team reports confirmation</li>
			<li>Begin evacuation</li>
			<li>Mountain Safety: Record the name, address, phone, chair number and time of guest evacuation</li>
			<li><strong>10 minutes updates to management</strong></li>
			<li>Evacuation Supervisor: Direct final check of all chairs and sweep of the area; obtain “all clear” confirmation</li>
		</ul>		
    </div>
  </div>
  <div class="w3-row">
    <div class="w3-margin w3-container w3-card">
      <h2>Post Evacuation (Phase 4)</h2>
	  On order from Resort Management
      <table>
			<tr>
				<td><label for="p4notified" class="w3-margin-right">Notified:</label></td>
				<td><input type="time" id="p4notified"></td>
			</tr>
			<tr>
				<td><label for="p4notifyer" class="w3-margin-right">By:</label></td>
				<td><input type="text" id="p4notifyer"></td>
			</tr>
		</table>
		<ul>
			<li>Data compiled to management</li>
			<li>Debrief and repack gear</li>
			<li>Note any damaged or missing gear to Evacuation Supervisor</li>
		</ul>
    </div>
  </div>
