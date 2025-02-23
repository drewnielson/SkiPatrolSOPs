---
layout: page
permalink: /lostchild/
title: "Lost Child"
timer: true
---
# Lost Child Process Guide

<form>
	<div class="w3-margin w3-container w3-card w3-row">
      <h2>Assess and Notify</h2>
	  <table>
			<tr>
				<td><label for="incidenttime" class="w3-margin-right">Reported lost at: </label></td>
				<td><input type="time" id="incidenttime" name="incidenttime" oninput="showTime()"></td>
			</tr>
			<tr>
				<td><label for="notifiedby" class="w3-margin-right">Notified by:</label></td>
				<td><input type="text" id="notifiedby"></td>
			</tr>
			<tr>
				<td><label for="notifierContact">Contact #:</label></td>
				<td><input type="tel" id="notifierContact" placeholder="888 888 8888" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxlength="12"></td>
			</tr>
		</table>
	  <div class="w3-row w3-round w3-border w3-border-red substep">
		<h6>Interview of reporting person:</h6>
		<table>
			<tr>
				<td><label for="childName">Child's name:</label></td>
				<td><input type="text" id="childName"></td>
			</tr>
			<tr>
				<td><label for="childAge">Child's age:</label></td>
				<td><input type="number" id="childAge"></td>
			</tr>
			<tr>
				<td><label id="childGender">Child's gender:</label></td>
				<td><input type="radio" name="gender" value="Male" id="genderM" aria-describedby="childGender"><label for="genderM"> Male</label>
					<input type="radio" name="gender" value="Femle" id="genderF" style="margin-left:5px;" aria-describedby="childGender"><label for="genderF"> Female</label>
				</td>
			</tr>
		</table>
		<p><label for="descr">Child's description:</label><br>(Hair/hat/helmet color, jacket/shirt color, pants color, skis or snowboard, distinguishing characteristics)<br><textarea id="descr" style="width:100%; min-height:100px;"></textarea></p>
		<table>
			<tr>
				<td><label for="lastloc">Child last seen where:</label></td>
				<td><input type="text" id="lastloc"></td>
			</tr>
			<tr>
				<td><label for="lasttime">How long ago:</label></td>
				<td><input type="text" id="lasttime"></td>
			</tr>
			<tr>
				<td><label id="skiride">Skiing/snowboarding:</label></td>
				<td><input type="radio" name="skiing" value="Y" id="skiY" aria-describedby="skiride"><label for="skiY"> Y</label>
					<input type="radio" name="skiing" value="N" id="skiN" style="margin-left:5px;" aria-describedby="skiride"><label for="skiN"> N</label>
				</td>
			</tr>
			<tr>
				<td><label id="ability">Ability level:</label></td>
				<td><input type="radio" name="level" value="Beginner" id="levelB" aria-describedby="skiride"><label for="levelB"> Beg.</label>
					<input type="radio" name="level" value="Intermediate" id="levelI" aria-describedby="skiride"><label for="levelI"> Int.</label>
					<input type="radio" name="level" value="Advanced" id="levelA" style="margin-left:5px;" aria-describedby="skiride"><label for="levelA"> Adv.</label>
				</td>
			</tr>
			<tr>
				<td><label for="equip">Where is child's equip.:</label></td>
				<td><input type="text" id="equip"></td>
			</tr>
			<tr>
				<td><label for="with">With anyone (whom):</label></td>
				<td><input type="text" id="with"></td>
			</tr>
			<tr>
				<td><label for="camewith">Came with whom:</label></td>
				<td><input type="text" id="camewith"></td>
			</tr>
			<tr>
				<td><label for="childCell">Child's cell #:</label></td>
				<td><input type="tel" id="childCell" placeholder="888 888 8888" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxlength="12"></td>
			</tr>
		</table>
	  </div>
	  <div class="w3-row w3-round w3-border w3-border-red substep">
		<h6>Notification Steps:</h6>
			<ol>
				<li>Notify Security supervisor on radio ch-1.</li>
				<li>Announce who you are, and ask that they stand by for a report of a lost child.</li>
				<li>Give description as recorded above.</li>
				<li>Notify the Ski Patrol Base on radio ch-2.</li>
				<li>Notify the Lift Operations supervisor on radio ch-12</li>
			</ol>
		<p><strong>Note: </strong>A staff member with a radio must accompany the reporting person until the child is found</p>
	  </div>
	</div>
</form>
<div class="w3-row">
    <div class="w3-margin w3-container w3-card">
	  <h2>Lost Child Procedures</h2>
      <h3>Step 1</h3>
		<ol type="a">
			<li>Security immediately moves to designated exit points:
				<ol type="1">
					<li>Circle area</li>
					<li>Main parking lot exit</li>
					<li>Hotel parking exit</li>
				</ol>
			</li>
			<li>Ski Patrol / Mountain Safety immediately moves to designated exit points:
				<ol type="1" start="4">
					<li>Ski patrol ambulance exit (gate near Alpine lift)</li>
					<li>Backside gate exit</li>
					<li>Whitney's Way cut-over to Boulder Ridge parking lot</li>
				</ol>
			</li>
			<li>Lift Ops supervisor to notify each lift station
				<ul>
					<li>Operators post message and start looking for child</li>
				</ul>
			</li>
		</ol>
	  <h3>Step 2:</h3>
		<ol type="a">
			<li>The designated staff member (with a radio) will proceed with the reporting person to the area where the child was last seen.</li>
		</ol>
	  <h3>Step 3:</h3>
		<h4 style="margin-left:16px;">If child was skiing/snowboarding</h4>
			<ol type="a">
				<li>The designated staff member should wait with the reporting person at the bottom of the last slope the child was skiing.</li>
				<li>Direct the patrol dispatcher to notify all on-snow patrollers and mountain safety.</li>
				<li>Identify and void the lost persons lift ticket.</li>
			</ol>
		<h4 style="margin-left:16px;">If child was NOT skiing/snowboarding</h4>
			<ol type="a">
				<li>The designated staff member will do a cursory search the are where the child was last seen.</li>
				<li>Direct Courtesy staff to start a Facilities search of the all indoor public locations.</li>
				<li>Direct Lodge Maintenance to check restrooms - (Lodge maintenance) Radio Channel 10</li>
				<li>If child was previously skiing, check the racks for the child's skis.</li>
				<li>Direct Security to check the reporting persons vehicle - (Security) radio channel 1.</li>
			</ol>
	  <h3>Step 4 (if child is not found within one hour):</h3>
			<ol type="a">
				<li>Notify the General Manager, Risk Manager or MOD</li>
				<li>Full area search and patrol sweep (Patrol Supervisor) Radio Ch-2</li>
				<li>Call other family or friends</li>
			</ol>
	</div>
</div>
<div class="w3-row">
    <div class="w3-margin w3-container w3-card">
	  <h2 id="lostParent">Lost Parent Procedure</h2>
	  <p>When a child reports a lost parent, a staff member will accompany the child on a search of the immediate area. Then escort the child to guest services.</p>
	 </div>
</div>
